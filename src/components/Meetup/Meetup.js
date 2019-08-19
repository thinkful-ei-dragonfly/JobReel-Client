import React, { Component } from 'react';
import { OauthSender } from 'react-oauth-flow';
 
export default class Meetup extends Component {
  render() {
    return (
      <OauthSender
        authorizeUrl="https://secure.meetup.com/oauth2/authorize"
        clientId={process.env.CLIENT_ID}
        response_type={process.env.CLIENT_TOKEN}
        redirectUri="https://jobreel.now.sh/events"
      />
    );
  }
}