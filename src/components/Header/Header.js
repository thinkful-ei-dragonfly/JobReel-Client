import React from 'react';
import {Link} from 'react-router-dom';
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
<<<<<<< HEAD
=======
        <Link to='/profile'>
          {this.context.user.username}
        </Link>
>>>>>>> 0752ea2ee9df6f4a5f5f062f5f60e102510c8d4e
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

  renderUsername() {
    if (this.context.user.username) {
      return (
        <>
          Signed in as  {this.context.user.username.toUpperCase()}
        </>
      )
    } else {
      return (
        <>
        </>
      )
    }
  }

  render() {
    return (
      <header className='header'>
        <div className='logo'>
          <Link to='/dashboard'>
            <img src={logo} alt='jobreel-logo'/>
          </Link>
        </div>
        <div className='username'>
            {this.renderUsername()}  
        </div>
          {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}

      </header>
    )
  }
}

export default Header;