import React, { Component } from 'react'
import Description from '../../components/Description/Description'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm';

class LoginRoute extends Component {

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  }

  render() {
    return (
      <section className="LoginRoute">
        <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
        <Link className="new-user" to='/'>New User? Register Here</Link>
        <Description />
      </section>
    )
  }
}

export default LoginRoute;