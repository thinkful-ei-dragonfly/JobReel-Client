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
            const jobs = JobReelApiService.getJobs(search)
            this.context.setJobData(jobs)
            console.log(this.context)
                // .then(this.context.setJobs)
                // .catch(this.context.setError)
        }, 200)
    }

  renderJobList() {
    const {jobData = {}} = this.context
    const {jobs = {} } = this.context
    console.log(jobs)
    const jobsList= jobs.map(job => {
        return <Job job={job} />
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