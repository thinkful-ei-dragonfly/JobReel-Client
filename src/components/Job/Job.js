import React, { Component } from 'react'
import JobReelApiService from '../../services/jobreel-api-service'
import JobReelContext from '../../context/JobReelContext';


export default class Job extends Component {
    static contextType = JobReelContext

    state = {
        expanded: false
    }

    // componentDidMount() {
    //     const jobkey = this.props.job.jobkey
    //     JobReelApiService.getJobDetails(jobkey)
    //         .then(data => {
    //             this.context.setJobDetails(details, jobkey)
    //         })
    //         .catch(this.context.setError)
    // }


    setJobDetails = (details, jobkey) => {

        const updatedJobs = [...this.state.jobs]
        updatedJobs.find(job => job.jobkey === jobkey).details = details;
        this.setState({
            jobs: updatedJobs
        })
    }

    setJobStatus = (status, jobkey) => {
        const updatedJobs = [...this.state.jobs]
        updatedJobs.find(job => job.jobkey === jobkey).status = status;
        this.setState({
            jobs: updatedJobs
        })
    }

    renderJob() {
        const { job } = this.props
        return (
            <li>
                {job.jobtitle}
                {job.company}
                {job.status}
                <button onClick={this.handleExpand} className="expandButton">
                    <div className="expand">&#x2965;</div>
                    Get More Details
                </button>
            </li>
        )
    }

    renderJobDetails() {
        //parse job details object to turn into JSX
        // {job.results.formattedLocationFull}
        //         {job.results.date}
        //         {job.results.snippet}
        //         {job.results.url}
    }

    renderJobExpanded() {
        const { job } = this.props
        return (
            <li>
                <h2>Results:</h2>
                {job.jobtitle}
                {job.company}
                {/* {job.details} */}
                <button onClick={this.handleCollapse} className="collapseButton">
                    <div className="collapse">&#x2963;</div>
                    <h3>Collapse</h3>
                </button>
            </li>
        )
    }

    handleExpand = () => {
        this.setState({ expand: true })
    }

    handleCollapse = () => {
        this.setState({ expand: false })
    }

    renderFunction = () => {
        if (this.state.expanded) {
            return this.renderJobExpanded()
        }
        else {
            return this.renderJob()
        }
    }

    render() {
        return (
            <>
                {this.renderFunction()}
            </>
        )
    }
}