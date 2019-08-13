import React, { Component } from 'react'
import Description from '../../components/Description/Description'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../../components/Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../../components/Button/Button'

class LoginRoute extends Component {

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target
    console.log(`Username: ${username.value}`);
    console.log(`Password: ${password.value}`);
      AuthApiService.postLogin({
        username: username.value,
        password: password.value,
      })
        .then(user => {
          username.value = ''
          password.value = ''
          const { history } = this.props
          history.push('/')
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
      <section className="LoginRoute">
        <form id="form-container"
          onSubmit={this.handleSubmit}
        >
          <div role='alert'>
              {error && <p>{error}</p>}
          </div>
          <div>
              <Label htmlFor='login-username-input'>
                  Username<Required />
              </Label>
              <Input
                  ref={this.firstInput}
                  id='login-username-input'
                  name='username'
                  required
              />
          </div>
          <div>
              <Label htmlFor='login-password-input'>
                  Choose a password<Required />
              </Label>
              <Input
                  id='login-password-input'
                  name='password'
                  type='password'
                  required
              />
          </div>
          <div>
              <Button type="submit">
                  Log In
              </Button>
          </div>
        </form>
        <Link className="new-user" to='/'>New User? Register Here</Link>
        <Description />
      </section>
    )
  }
}

export default LoginRoute;