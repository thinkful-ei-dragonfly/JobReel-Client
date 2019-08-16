import React, { Component } from 'react'
import JobReelContext from '../../context/JobReelContext';
import Job from '../Job/Job'
import './JobsList.css';

import config from '../../config'
import TokenService from '../../services/token-service'
import GithubJob from '../Job/GithubJob';

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
<<<<<<< HEAD

  renderJobList() {
    const { jobData = {} } = this.context
    const { jobs = {} } = this.context
    console.log(jobs)
    const jobsList = jobs.map((job, i) => {
        return <Job job={job} key={i} />
    })
    return (
      <>
        <div className='information'>
          <div className='total-results-count'>
            <p>Total Results: {jobData.totalResults}</p>
          </div>
          <div className='results-page-number'>
            <p>Page Number: {jobData.pageNumber+1}</p>
          </div>
        </div>
        <div className='results'>
          <h3>Results</h3>
          {jobsList}
        </div>
        </>
      )
  }
=======
   
    renderJobList() {
        const {gitHubJobs = {} } = this.context
        const {authenticJobs = {} } = this.context
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

>>>>>>> 477d38a092de0fa607c873235588beab1b9f18d1
    render() {
        return (
            <div className='jobslist'>
                {this.renderJobList()}
            </div>
        )
    }

}