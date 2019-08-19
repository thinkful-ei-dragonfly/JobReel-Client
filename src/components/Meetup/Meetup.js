import React, { Component } from 'react';
import { OauthSender } from 'react-oauth-flow';
import config from '../../config'

export default class Meetup extends Component {
    render() {
        console.log(`67tbmv2gfetercp9rke84h8ale`)
        return (
            <>
                <OauthSender
                    authorizeUrl="https://secure.meetup.com/oauth2/authorize"
                    clientId={`67tbmv2gfetercp9rke84h8ale`}
                    response_type={`2a9ev7ddp43n80sn9e47eb7q5r`}
                    redirectUri="https://jobreel.now.sh/events"
                />
            </>
        );
    }
}