import React, { Component } from 'react'
import JobReelApiService from '../../services/jobreel-api-service'
import JobReelContext from '../../context/JobReelContext';
import Job from '../Job/Job'
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
        const {jobData = {}} = this.context
        const {jobs = {} } = this.context
        console.log(jobData)
        console.log(jobs)
        const jobsList= jobs.map((job, i) => {
            return <Job job={job} key={i}/>
        })
        return (
            <>
            Total Results: {jobData.total}
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