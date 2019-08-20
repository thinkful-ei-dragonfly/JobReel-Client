import React, { Component } from 'react';

export default class SendToMeetup extends Component {

    handleMeetup = () => {
        fetch(`https://secure.meetup.com/oauth2/authorize
        ?client_id=67tbmv2gfetercp9rke84h8ale
        &response_type=token
        &redirect_uri=http://localhost:3000/meetups`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
            })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : console.log(res)
            )
    }
    render() {
        return (
            <>
                <button onClick={this.handleMeetup}>Meetup</button>
            </>
        );
    }
}