import React from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';

import './Header.css';

class Header exteds React.Component {

  static contextType = UserContext

  handleLogOutClick = () => {
    console.log('this function calls for context logout')
  }

  renderLogoutLink() {
    return (
      <div className='nav'>
        <span>
          !!!Placeholder for user name!!!
        </span>
        <nav role ='navigation'>
          <Link 
            onClick={this.handleLogOutClick}
            to='/login'>
            Log Out
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='nav'>
        <nav role='navigation'>
          <Link to ='/login'>Login</Link>
          {' '}
          <Link to='/register'>Sign Up</Link>
        </nav>
      </div>
    )
  }

  render() {
    return (
      <header className='header'>
        <h1 className='logo'>
          <Link to ='/'>
            JobReel
          </Link>
        </h1>
        <div className='login-logout'>
          {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        </div>

      </header>
    )
  }
}

export default Header;