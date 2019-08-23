import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';
import JobReelContext from '../../context/JobReelContext';
import './Header.css';
import logo from '../../assests/jobreellogo200.png'

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
          <Link to='/'>Sign Up</Link>
        </nav>
      </div>
    )
  }

  render() {
    return (
      <header className='header'>
        <div className='logo'>
          <Link to='/dashboard'>
            <img src={logo} alt='jobreel-logo'/>
          </Link>
        </div>
          {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}

      </header>
    )
  }
}

export default Header;