import React, { Component } from 'react';
import config from '../../config'
import TokenService from '../../services/token-service'
import JobReelContext from '../../context/JobReelContext';
import Moment from 'react-moment';
import Iframe from 'react-iframe'
import './EventBriteItem.css'

export default class EventBriteList extends Component {
    state = {
        host: '',
        address: '',
        URL: false,
        expanded: false,
    }

    static contextType = JobReelContext

    componentDidMount() {
        const venue_id = this.props.venue_id
        const venue = { id: venue_id }
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
                this.setState({ host: data.name })
                this.setState({ address: data.address.localized_address_display })
            })
    }

    handleExpand = () => {
        this.setState({ expanded: true })
    }

    handleCollapse = () => {
        this.setState({ expanded: false })
    }

    handleURL = () => {
        this.setState({ URL: true })
    }

    handleURLcollapse = () => {
        this.setState({ URL: false })
    }

    renderEvent() {
        const name = this.props.name
        // const url = this.props.url
        const host = this.state.host
        const address = this.state.address
        const date = this.props.date
        return (
            <li>
                <h4>{name}</h4>
                <p>Host: {host}</p>
                <p>Address: {address}</p>
                <p>Date:<Moment format="MM/DD/YYYY">{date}</Moment></p>
                <br />
                {!this.state.URL && <button onClick={this.handleURL}>Event Page</button>}
                <br/>
                {this.state.URL && this.renderEventURL()}
                <br/>
                {this.state.URL && this.renderURLcollapse()}
                <br />
                <button onClick={this.handleExpand}>
                    More Details
                </button>
            </li>
        )
    }

    renderEventExpanded() {
        const name = this.props.name
        const description = this.props.description
        const venue = this.state
        const address = venue.address
        const date = this.props.date
        return (
            <li>
                <h4>{name}</h4>
                <p>Host: {venue.name}</p>
                <p>Address: {address}</p>
                <p>Date:<Moment>{date}</Moment></p>
                <br />
                {!this.state.URL && <button onClick={this.handleURL}>Event Page</button>}
                <br/>
                {this.state.URL && this.renderEventURL()}
                <br/>
                {this.state.URL && this.renderURLcollapse()}
                <br />
                <p>{description}</p>
                <br/>
                <button onClick={this.handleCollapse}>
                    Collapse Description
                </button>
            </li>
        )
    }

    renderEventURL() {
        const url = this.props.url
        return (
            <>
                <Iframe url={url}
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />
            </>
        )
    }

    renderURLcollapse = () => {
        return (
            <button onClick={this.handleURLcollapse}>
                Collapse URL
            </button>
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