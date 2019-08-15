import React, { Component } from 'react'
import JobReelApiService from '../../services/jobreel-api-service'
import JobReelContext from '../../context/JobReelContext';
import Job from '../Job/Job'
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
            Total Results: {jobData.totalResults}
            <br/>
            Page Number: {jobData.pageNumber+1}
            <br/>
            JobsList:
            {jobsList}
            </>
        )
    }
    render() {
        return (
            <div>
                {this.renderJobList()}
            </div>
        )
    }

}