import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'


function Footer(props) {
  
    return(
      <footer className='footer'>
        <div className='frontEnd'>
          <a href='https://github.com/thinkful-ei-dragonfly/JobReel-client' rel='noopener noreferrer' target='_blank'>GitHub Client</a>
        </div>
        <div className='contactUs'>
          <Link to='/communicate'>Contact Us</Link>
        </div>
        <div className='backEnd'>
          <a href='https://github.com/thinkful-ei-dragonfly/JobReel-server' rel='noopener noreferrer' target='_blank'>GitHub Server</a>
        </div>
      </footer>
    )
}

export default Footer;