import React, { Component } from 'react'
import { Input, Label } from '../../components/Form/Form'
import AuthApiService from '../../services/auth-api-service'
import JobReelContext from '../../context/JobReelContext';
import Button from '../../components/Button/Button'
import './LoginForm.css'

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  static contextType = JobReelContext;

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target
    this.setState({ error: null });
      AuthApiService.postLogin({
        username: username.value,
        password: password.value,
      })
        .then(res => {
          username.value = ''
          password.value = ''
          this.context.processLogin(res.authToken);
          this.props.onLoginSuccess();
        })
        .catch(res => {
          this.setState({ error: res.error })
        })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state;
    return (
        <form className="LoginForm"
          onSubmit={this.handleSubmit}
        >
          <div role='alert' className='error-message'>
            {error && <p>{error}</p>}
          </div>
          <div>
            <Label htmlFor='login-username-input'>
              Username
            </Label>
          <br/>
            <Input
              ref={this.firstInput}
              id='login-username-input'
              name='username'
              required
            />
          </div>
          <div>
            <Label htmlFor='login-password-input'>
              Password
            </Label>
          <br/>
            <Input
              id='login-password-input'
              name='password'
              type='password'
              required
            />
        </div>
        <br/>
          <div>
            <Button type="submit">
              Log In
            </Button>
          </div>
        </form>
    )
  }
}

export default LoginForm;