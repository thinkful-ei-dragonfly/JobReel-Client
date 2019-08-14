import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'

const JobReelContext = React.createContext({
    error: null,
    user: {}, //nested Resume object assigned to User?
    jobs: [{
        title: 'Job test',
        description: 'Job description bla bla bla',
        status: 'Active'
    }],
    companies: [],
    resources: [],
    contacts: [],
    meetups: [],
    professionals: [],
    setError: () => { },
    clearError: () => { },
    processLogin: () => { },
    processLogout: () => { },
    setUser: () => { },
    setJobs: () => [],
    setCompanies: () => { },
    setResources: () => { },
    setContacts: () => { },
    setMeetups: () => { },
    setProfessionals: () => { },
})

export default JobReelContext

export class JobReelProvider extends Component {
    constructor(props) {
        super(props)
        const state = {
            error: null,
            user: {}, //nested Resume object assigned to User?
            jobs: [],
            companies: [],
            resoureces: [],
            contacts: [],
            meetups: [],
            professionals: [],
        }

        const jwtPayload = TokenService.parseAuthToken()

        if (jwtPayload)
            state.user = {
                id: jwtPayload.user_id,
                name: jwtPayload.name,
                username: jwtPayload.sub,
            }

        this.state = state;
        IdleService.setIdleCallback(this.logoutBecauseIdle)
    }

    componentDidMount() {
        if (TokenService.hasAuthToken()) {
            IdleService.registerIdleTimerResets()
            TokenService.queueCallbackBeforeExpiry(() => {
                this.fetchRefreshToken()
            })
        }
    }

    componentWillUnmount() {
        IdleService.unRegisterIdleResets()
        TokenService.clearCallbackBeforeExpiry()
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setUser = user => {
        this.setState({ user })
    }

    setJobs = jobs => {
        this.setState({ jobs })
    }

    setCompanies = companies => {
        this.setState({ companies })
    }

    setResources = resources => {
        this.setState({ resources })
    }

    setContacts = contacts => {
        this.setState({ contacts })
    }

    setMeetups = meetups => {
        this.setState({ meetups })
    }

    setProfessionals = professionals => {
        this.setState({ professionals })
    }

    processLogin = authToken => {
        TokenService.saveAuthToken(authToken)
        const jwtPayload = TokenService.parseAuthToken()
        this.setUser({
            id: jwtPayload.user_id,
            name: jwtPayload.name,
            username: jwtPayload.sub,
        })
        IdleService.registerIdleTimerResets()
        TokenService.queueCallbackBeforeExpiry(() => {
            this.fetchRefreshToken()
        })
    }

    processLogout = () => {
        TokenService.clearAuthToken()
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
        this.setUser({})
    }

    logoutBecauseIdle = () => {
        TokenService.clearAuthToken()
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
        this.setUser({ idle: true })
    }

    fetchRefreshToken = () => {
        AuthApiService.refreshToken()
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
                TokenService.queueCallbackBeforeExpiry(() => {
                    this.fetchRefreshToken()
                })
            })
            .catch(err => {
                this.setError(err)
            })
    }

    render() {
        const value = {
            user: this.state.user,
            error: this.state.error,
            jobs: this.state.jobs,
            companies: this.state.companies,
            resources: this.state.resources,
            contacts: this.contacts,
            meetups: this.meetups,
            professionals: this.professionals,
            setError: this.setError,
            clearError: this.clearError,
            setUser: this.setUser,
            setJobs: this.setJobs,
            setCompanies: this.setCompanies,
            setResources: this.setResources,
            setContacts: this.setContacts,
            setMeetups: this.setMeetups,
            setProfessionals: this.setProfessionals,
            processLogin: this.processLogin,
            processLogout: this.processLogout,
            handleSubmit: this.handleSubmit,
        }
        return (
            <JobReelContext.Provider value={value}>
                {this.props.children}
            </JobReelContext.Provider>
        )
    }
}
