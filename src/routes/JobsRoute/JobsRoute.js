import React, { Component } from 'react'
import JobReelContext from '../../context/JobReelContext';
import Job from '../../components/Job/Job'
import './JobsRoute.css';
import config from '../../config'
import TokenService from '../../services/token-service'
import GithubJob from '../../components/Job/GithubJob';
import SideNav from '../../components/SideNav/SideNav';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class JobsRoute extends Component {
    state = {
        search: null,
        savedJobUrls: {}
    }
    static contextType = JobReelContext

    componentDidMount() {
        const savedJobUrls = this.context.savedJobs.map(job => job.url);
        let savedJobUrlsObj = {};
        savedJobUrls.forEach(url => {
            savedJobUrlsObj[url] = url;
        })
        this.setState({ savedJobUrls: savedJobUrlsObj });
        const search = this.context.search
        setTimeout(() => {
            Promise.all([
                fetch(`${config.API_ENDPOINT}/jobs/authentic`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `bearer ${TokenService.getAuthToken()}`,
                    },
                    body: JSON.stringify({
                        search
                    }),
                }),
                fetch(`${config.API_ENDPOINT}/jobs/github`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `bearer ${TokenService.getAuthToken()}`,
                    },
                    body: JSON.stringify({
                        search
                    }),
                })
            ])
                .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
                .then(([data1, data2]) => {
                    this.context.setGithubJobs(data2)
                    this.context.setAuthenticJobs(data1.listings.listing)
                });
        }, 500)
    }
   
    renderJobList() {
        const {gitHubJobs = [] } = this.context
        const {authenticJobs = [] } = this.context
        console.log(gitHubJobs)
        console.log(authenticJobs)
        const jobsListOne = gitHubJobs.map((job, i) => {
            return <GithubJob job={job} key={i} savedJobUrls={this.state.savedJobUrls}/>
        })
        const jobsListTwo = authenticJobs.map((job, i) => {
            return <Job job={job} company={job.company} type={job.type} location={job.company.name} key={i} savedJobUrls={this.state.savedJobUrls}/>
        })

        let joinedList = jobsListOne.concat(jobsListTwo);

        return (
            <div className='results'>
                {joinedList}
            </div>
        )
    }


    render() {
        return (
            <div className='job-search-results'>
                <div className='title'>
                    <h2>Jobs List</h2>
                </div>
                <SideNav />
                <div className='results-container'>
                    <Link  to={`/jobs`} alt="goBack">
                            <FontAwesomeIcon id='go-back' icon='times-circle' size='2x'/>
                    </Link>
                    {this.renderJobList()}
                </div>
                
                
            </div>
        )
    }

}