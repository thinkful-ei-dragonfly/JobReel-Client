import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';

import './Footer.css'


function Footer(props) {
  
    return(
      <footer className='footer'>
        <div className='team-info'>
          'Some Team Information goes here'
        </div>
        <div className='links-to-tech'>
          <Link to='/'>GitHub Client</Link>
          <br/>
          <Link to='/'>GitHub Server</Link>
        </div>
      </footer>
    )
}

export default Footer;