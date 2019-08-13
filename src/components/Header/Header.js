import React from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';
import JobReelContext from '../../context/JobReelContext';
import './Header.css';

class Header extends React.Component {

  static contextType = JobReelContext

  handleLogOutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div className='nav'>
        <span>
          {this.context.user.name}
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
        <div className='logo'>
          <h1>
            <Link to ='/'>
              JobReel
            </Link>
          </h1>
        </div>
          {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}

      </header>
    )
  }
}

export default Header;