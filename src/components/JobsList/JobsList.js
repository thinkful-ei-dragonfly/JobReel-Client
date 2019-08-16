import React, { Component } from 'react'
import JobReelApiService from '../../services/jobreel-api-service'
import JobReelContext from '../../context/JobReelContext';
import Job from '../Job/Job'
import './JobsList.css';


export default class JobsList extends Component {
    static contextType = JobReelContext

    componentDidMount() {
        setTimeout(() => {
            const search = this.context.search
            JobReelApiService.getJobs(search)
                .then(this.context.setJobData)
                .catch(this.context.setError)
        }, 500)
    }

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
    render() {
        return (
            <div className='jobslist'>
                {this.renderJobList()}
            </div>
        )
    }

}