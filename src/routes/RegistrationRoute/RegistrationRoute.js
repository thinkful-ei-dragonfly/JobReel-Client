import React, { Component } from 'react'
import Description from '../../components/Description/Description'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../../components/Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../../components/Button/Button'
import './Registration.css';
import registration from '../../assests/registration.svg'



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
        const { email, first_name, last_name, username, password } = ev.target
        AuthApiService.postUser({
            email: email.value,
            first_name: first_name.value,
            last_name: last_name.value,
            username: username.value,
            password: password.value,
        })
            .then(() => {
                email.value = ''
                first_name.value = ''
                last_name.value = ''
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
            <div className='registration-page'>
                <div className='registration-image'>
                    <img src={registration}alt='registration-background'/>
                </div>
                <Description className='registration-description'/>
                <div className='form-registration'>
                    <form id="form-container"

                        onSubmit={this.handleSubmit}
                    >
                        <div role='alert' className='error'>
                            {error && <p>{error}</p>}
                        </div>
                        <div>
                            <Label htmlFor='registration-email-input'>
                                Email:<Required />
                            </Label>
                            <br/>
                            <Input
                                ref={this.firstInput}
                                id='registration-email-input'
                                name='email'
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor='registration-first-name-input'>
                                First name:<Required />
                            </Label>
                            <br/>
                            <Input

                                id='registration-first-name-input'
                                name='first_name'
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor='registration-last-name-input'>
                                Last name:<Required />
                            </Label>
                            <br/>
                            <Input
                                id='registration-last-name-input'
                                name='last_name'
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor='registration-username-input'>
                                Choose a username<Required />
                            </Label>
                            <br/>
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
                            <br/>
                            <Input
                                id='registration-password-input'
                                name='password'
                                type='password'
                                required
                            />
                        </div>
                        <br/>
                        <div>
                            <Button type="submit">
                                Sign up
                        </Button>
                        </div>
                        {' '}
                        <br/>
                        <Link className="already" to='/login'>Already have an account?</Link>
                    </form>
                </div>
            </div>
        )
    }
}

