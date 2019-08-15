import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginRoute.css'
import loginPic from '../../assests/login.svg';

class LoginRoute extends Component {

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/dashboard';
    history.push(destination);
  }

  render() {
    return (
      <section className="LoginRoute">
        <div className='login-image'>
          <img src={loginPic} alt='login-background'/>
        </div>
        <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
        <Link className="new-user" to='/'>New User? Register Here</Link>
      </section>
    )
  }
}

export default LoginRoute;