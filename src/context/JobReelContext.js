import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'

const JobReelContext = React.createContext({
    error: null,
    user: {}, //nested Resume object assigned to User?
    jobData: {},
    jobs: [],
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
    setJobData: () => { },
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
            resources: [],
            contacts: [],
            meetups: [],
            professionals: [],
            jobData: {},
            setError: this.setError,
            clearError: this.clearError,
            setUser: this.setUser,
            setJobs: this.setJobs,
            setCompanies: this.setCompanies,
            setResources: this.setResources,
            setContacts: this.setContacts,
            setMeetups: this.setMeetups,
            setProfessionals: this.setProfessionals,
            setJobDetails: this.setJobDetails,
            setJobStatus: this.setJobStatus,
            processLogin: this.processLogin,
            processLogout: this.processLogout,
            handleSubmit: this.handleSubmit,
            setJobData: this.setJobData
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

    setJobData = jobData => {
        this.setState({
            jobData
        })
        this.setJobs(jobData.listing)
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

    //INDEED API METHOD
    // setJobDetails = (details, jobkey) => {

    //     const updatedJobs = [...this.state.jobs]
    //     updatedJobs.find(job => job.jobkey === jobkey).details = details;
    //     this.setState({
    //         jobs: updatedJobs
    //     })
    // }

    setJobStatus = (status, jobkey) => {
        const updatedJobs = [...this.state.jobs]
        updatedJobs.find(job => job.jobkey === jobkey).status = status;
        this.setState({
            jobs: updatedJobs
        })
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
        return (
            <JobReelContext.Provider value={this.state}>
                {this.props.children}
            </JobReelContext.Provider>
        )
    }
}
