import React, { Component } from 'react';
import config from '../../config'
import TokenService from '../../services/token-service'
import JobReelContext from '../../context/JobReelContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './EventBriteItem.css'

export default class EventBriteList extends Component {
    state = {
        host: '',
        address: '',
        expanded: false,
    }

    static contextType = JobReelContext

    componentDidMount() {
        const venue_id = this.props.venue_id
        const venue = { id: venue_id }
        console.log(venue)
        fetch(`${config.API_ENDPOINT}/eventbrite/venue`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                venue,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(data => {
                console.log(data)
                this.setState({host: data.name})
                this.setState({address: data.address.localized_address_display})
            })
    }

    handleExpand = () => {
        this.setState({ expanded: true })
    }

    handleCollapse = () => {
        this.setState({ expanded: false })
    }

    renderEvent() {
        const name = this.props.name
        const uri = this.props.uri
        const host = this.state.host
        const address = this.state.address
        return (
            <li>
                <h4>{name}</h4>
                <p>Host: {host}</p>
                <p>Address: {address}</p>
                <a href={uri}>Go to event page</a>
                <br/>
                <button onClick={this.handleExpand}>
                More Details
                </button>
            </li>
        )
    }

    renderEventExpanded() {
        const name = this.props.name
        const uri = this.props.uri
        const description = this.props.description
        const venue = this.state
        const address = venue.address
        return (
            <li>
                <h4>{name}</h4>
                <p>Host: {venue.name}</p>
                <p>Address: {address}</p>
                <a href={uri}>Go to event page</a>
                <p>{description}</p>
                <br/>
                <button onClick={this.handleCollapse}>
                Collapse Description
                </button>
            </li>
        )
    }

    renderFunction = () => {
        if (this.state.expanded) {
            return this.renderEventExpanded()
        }
        else {
            return this.renderEvent()
        }
    }
    


    render() {
        return (
            <>
            {this.renderFunction()}
            </>
        );
    }
}