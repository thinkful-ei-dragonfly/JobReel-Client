import React from 'react';



class Footer extends React.Component() {
  
  
  render() {
    return(
      <footer className='footer'>
        <div className='team-info'>
          'Some Team Information goes here'
        </div>
        <div className='links-to-tech'>
          <link to='#'>GitHub Client</link>
          <link to='#'>GitHub Server</link>
        </div>
      </footer>
    )
  }
}