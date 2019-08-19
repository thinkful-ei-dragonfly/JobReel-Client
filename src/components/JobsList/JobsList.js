import React, { Component } from 'react'
import JobReelContext from '../../context/JobReelContext';
import Job from '../Job/Job'
import './JobsList.css';

import config from '../../config'
import TokenService from '../../services/token-service'
import GithubJob from '../Job/GithubJob';
import SideNav from '../SideNav/SideNav';
import { Link } from 'react-router-dom';

export default class JobsList extends Component {
    state = {
    search: null
    }
    static contextType = JobReelContext

    componentDidMount() {
        console.log(this.context)
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
            return <GithubJob job={job} key={i}/>
        })
        const jobsListTwo = authenticJobs.map((job, i) => {
            return <Job job={job} company={job.company} type={job.type} location={job.company.name} key={i}/>
        })
        return (
            <>
            JobsList:
            {jobsListOne}
            {jobsListTwo}
            </>
        )
    }

    render() {
        return (
            <div>
                <SideNav/>
                <br/>
                <Link to={`/jobs`} alt="goBack"><h2>Go Back</h2></Link>
                <br/>
                {this.renderJobList()}
            </div>
        )
    }

}