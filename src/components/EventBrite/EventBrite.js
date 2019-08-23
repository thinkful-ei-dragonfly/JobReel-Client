import React, { Component } from 'react';
import config from '../../config'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import {Link} from 'react-router-dom'


export default class EventBrite extends Component {

    // state = {
    //     url: null
    // }

    // // componentDidMount () {
    // //     fetch(`${config.API_ENDPOINT}/eventbrite`, {
    // //         method: 'GET',
    // //         headers: {
    // //             'authorization': `Bearer ${TokenService.getAuthToken()}`,
    // //         }
    // //     })
    // //         .then(res =>
    // //             (!res.ok)
    // //                 ? res.json().then(e => Promise.reject(e))
    // //                 : res.json()
    // //         )
    // //         .then(data => {
    // //             this.setState({url: data.url})
    // //         })
    // // }

    // renderURL() {
    //     const url = this.state.url
    //     return (
    //         <a href={url}>Connect to your events</a>
    //     )
    // }

   

    render() {
        return (
            <>
                <p> a string</p>
            </>
        );
    }
}