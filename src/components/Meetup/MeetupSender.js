import React, { Component } from 'react';
import { OauthSender } from 'react-oauth-flow';
import Iframe from 'react-iframe'
import config from '../../config'

export default class SendToMeetup extends Component {
    render() {
        return (
            <>

                <OauthSender
                    authorizeUrl="https://secure.meetup.com/oauth2/authorize"
                    clientId={`67tbmv2gfetercp9rke84h8ale`}
                    response_type={`2a9ev7ddp43n80sn9e47eb7q5r`}
                    redirectUri="https://jobreel.now.sh/meetups"
                    render={({ url }) => <a href={url}>Connect to Meetup</a>}
                />
            </>
        );
    }
}