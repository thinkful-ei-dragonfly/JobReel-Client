import React from 'react';
import './Footer.css'


function Footer(props) {
  
    return(
      <footer className='footer'>
        <div className='team-info'>
          Created by:
          Aldiyar Batyrbekov
          Chris Fiander
          Erin Dustin
          Jonathan Moore
          Michael Romero
        </div>
        <div className='links-to-tech'>
          <a href='https://github.com/thinkful-ei-dragonfly/JobReel-client' rel='noopener noreferrer' target='_blank'>GitHub Client</a>
          <br/>
          <a href='https://github.com/thinkful-ei-dragonfly/JobReel-server' rel='noopener noreferrer' target='_blank'>GitHub Server</a>
        </div>
      </footer>
    )
}

export default Footer;