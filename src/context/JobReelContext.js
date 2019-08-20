import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'

const JobReelContext = React.createContext({
    error: null,
    user: {}, //nested Resume object assigned to User?
    search: {},
    jobData: {},
    savedJobs: [],
    savedEvents: [],
    authenticJobs: [],
    gitHubJobs: [],
    companies: [],
    resources: [],
    contacts: [],
    meetups: [],
    professionals: [],
    manualJobAdd: false,
    manualEventAdd: false,
    manualCompanyAdd: false,
    setError: () => { },
    clearError: () => { },
    processLogin: () => { },
    processLogout: () => { },
    setUser: () => { },
    setAuthenticJobs: () => [],
    setGithubJobs: () => [],
    setCompanies: () => { },
    setResources: () => { },
    setContacts: () => { },
    setMeetups: () => { },
    setProfessionals: () => { },
    setJobData: () => { },
    setSearch: () => { },
    setManualJobAdd: () => { },
    setManualEventAdd: () => { },
    setManualCompanyAdd: () => { },
    setSavedJobs: () => { },
    deleteJob: () => { },
    updateJob: () => { },
    updateEvent: () => { },
    deleteEvent: () => { },
    updateCompany: () => { },
    deleteCompany: () => { },
})

export default JobReelContext

export class JobReelProvider extends Component {
    constructor(props) {
        super(props)
        const state = {
            error: null,
            user: {}, //nested Resume object assigned to User?
            search: {},
            authenticJobs: [],
            gitHubJobs: [],
            companies: [],
            resources: [],
            contacts: [],
            meetups: [],
            professionals: [],
            savedJobs: [],
            savedEvents: [],
            jobData: {},
            manualJobAdd: false,
            manualEventAdd: false,
            manualCompanyAdd: false,
            setError: this.setError,
            clearError: this.clearError,
            setUser: this.setUser,
            setAuthenticJobs: this.setAuthenticJobs,
            setGithubJobs: this.setGithubJobs,
            setSavedJobs: this.setSavedJobs,
            setSavedEvents: this.setSavedEvents,
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
            setJobData: this.setJobData,
            setSearch: this.setSearch,
            setManualJobAdd: this.setManualJobAdd,
            setManualEventAdd: this.setManualEventAdd,
            setManualCompanyAdd: this.setManualCompanyAdd,
            deleteJob: this.deleteJob,
            deleteEvent: this.deleteEvent,
            updateJob: this.updateJob,
            updateEvent: this.updateEvent,
            updateCompany: this.updateCompany,
            deleteCompany: this.deleteCompany,
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

    setUserMeetupProfile = (user, accesstoken) => {
        console.log(user, accesstoken)
        user.meetupProfile = accesstoken
    }

    setJobData = jobData => {
        this.setState({
            jobData
        })
        this.setJobs(jobData.listing)
    }

    setAuthenticJobs = authenticJobs => {
        this.setState({ authenticJobs })
    }

    setGithubJobs = gitHubJobs => {
        this.setState({ gitHubJobs })
    }

    setSavedJobs = savedJobs => {
        this.setState({ savedJobs })
    }

    setSavedEvents = savedEvents => {
        this.setState({ savedEvents })
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

    setSearch = search => {
        const location = search.location
        const jobTitle = search.jobTitle
        this.setState({search : {location, jobTitle}})
    }

    setManualJobAdd = status => {
        this.setState({ manualJobAdd: status })
    }

    setManualEventAdd = status => {
        this.setState({ manualEventAdd: status })
    }

    setManualCompanyAdd = status => {
        this.setState({ manualCompanyAdd: status })
    }

    //INDEED API METHOD
    // setJobDetails = (details, jobkey) => {

    //     const updatedJobs = [...this.state.jobs]
    //     updatedJobs.find(job => job.jobkey === jobkey).details = details;
    //     this.setState({
    //         jobs: updatedJobs
    //     })
    // }

    setJobStatus = (status, jobs, jobkey) => {
        const updatedJobs = [...jobs]
        updatedJobs.find(job => job.jobkey === jobkey).status = status;
        this.setState({
            jobs: updatedJobs
        })
    }

    deleteJob = jobId => {
        this.setState({
            savedJobs: this.state.savedJobs.filter(job => job.job_id !== jobId)
        });
    }

    deleteEvent = eventId => {
        this.setState({
            savedEvents: this.state.savedEvents.filter(event => event.event_id !== eventId)
        });
    }

    updateJob = (updatedJob) => {
        this.setState({
            savedJobs: this.state.savedJobs.map(job => 
               (job.job_id !== updatedJob.job_id) ? job : updatedJob 
            )
        })
    }

    updateEvent = (updatedEvent) => {
        this.setState({
            savedEvents: this.state.savedEvents.map(event => 
               (event.event_id !== updatedEvent.event_id) ? event : updatedEvent 
            )
        })
    }

    deleteCompany = companyId => {
        this.setState({
            companies: this.state.companies.filter(company => company.company_id !== companyId)
        });
    }

    updateCompany = (updatedCompany) => {
        this.setState({
            companies: this.state.companies.map(company => 
               (company.company_id !== updatedCompany.company_id) ? company : updatedCompany 
            )
        })
    }

    updateEvent = (updatedEvent) => {
        this.setState({
            savedEvents: this.state.savedEvents.map(event => 
               (event.event_id !== updatedEvent.event_id) ? event : updatedEvent 
            )
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
