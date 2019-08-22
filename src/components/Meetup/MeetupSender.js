import React, { Component } from 'react';
import config from '../../config'
import TokenService from '../../services/token-service'

export default class SendToMeetup extends Component {

    handleMeetupClick = () => {
        fetch(`${config.API_ENDPOINT}/meetups/auth`, {
            method: 'POST',
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleMeetupClick} alt="meetupButton">Go to meetup</button>
            </>
        );
    }
}