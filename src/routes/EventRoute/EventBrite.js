import React, { Component } from 'react';
import config from '../../config'
import './EventBrite.css';
import TokenService from '../../services/token-service'


export default class EventBrite extends Component {

  state = {
    url: null
  }

  componentDidMount () {
    fetch(`${config.API_ENDPOINT}/eventbrite`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(data => {
        this.setState({url: data.url})
      })
  }

  renderURL() {
    const url = this.state.url
    return (
      <div className='content'>
        <h1><a href={url} rel='noopener noreferrer' target='_blank'>Find Events</a></h1>     
      </div>
      
    )
  }

  

   

  render() {
    return (
      <div className='eventBriteRoute'>
        {this.state.url && this.renderURL()}
      </div>
    );
  }
}