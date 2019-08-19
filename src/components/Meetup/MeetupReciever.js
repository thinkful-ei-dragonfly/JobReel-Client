import React, { Component } from 'react';
import { OauthReceiver } from 'react-oauth-flow';
 
export default class ReceiveFromMeetup extends Component {
  handleSuccess = async (accessToken, { response, state }) => {
    console.log('Successfully authorized');
    await setProfileFromMeetup(accessToken);
    await redirect(state.from);
  };
 
  handleError = error => {
    console.error('An error occured');
    console.error(error.message);
  };
 
  render() {
    return (
      <OauthReceiver
        tokenUrl="https://secure.meetup.com/oauth2/access"
        clientId={`67tbmv2gfetercp9rke84h8ale`}
        clientSecret={`2a9ev7ddp43n80sn9e47eb7q5r`}
        redirectUri="https://jobreel.now.sh/meetups"
        onAuthSuccess={this.handleSuccess}
        onAuthError={this.handleError}
        render={({ processing, state, error }) => (
          <div>
            {processing && <p>Authorizing now...</p>}
            {error && (
              <p className="error">An error occured: {error.message}</p>
            )}
          </div>
        )}
      />
    );
  }
}