import React, { Component } from 'react'
import Description from '../../components/Description/Description'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../../components/Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../../components/Button/Button'



export default class RegistrationRoute extends Component {
    static defaultProps = {
        history: {
            push: () => { },
        },
    }

    state = { error: null }

    firstInput = React.createRef()

    handleSubmit = ev => {
        ev.preventDefault()
        const { name, username, password } = ev.target
        AuthApiService.postUser({
            name: name.value,
            username: username.value,
            password: password.value,
        })
            .then(user => {
                name.value = ''
                username.value = ''
                password.value = ''
                const { history } = this.props
                history.push('/login')
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    componentDidMount() {
        this.firstInput.current.focus()
    }

    render() {
        const { error } = this.state
        return (
            <section className="authSection">
                <form id="form-container"
                    onSubmit={this.handleSubmit}
                >
                    <div role='alert'>
                        {error && <p>{error}</p>}
                    </div>
                    <div>
                        <Label htmlFor='registration-name-input'>
                            Enter your name<Required />
                        </Label>
                        <Input
                            ref={this.firstInput}
                            id='registration-name-input'
                            name='name'
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor='registration-username-input'>
                            Choose a username<Required />
                        </Label>
                        <Input
                            id='registration-username-input'
                            name='username'
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor='registration-password-input'>
                            Choose a password<Required />
                        </Label>
                        <Input
                            id='registration-password-input'
                            name='password'
                            type='password'
                            required
                        />
                    </div>
                    <div>
                        <Button type="submit">
                            Sign up
                        </Button>
                    </div>
                    {' '}
                    <Link className="already" to='/login'>Already have an account?</Link>
                    <Description />
                </form>
            </section>
        )
    }
}
