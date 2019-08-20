import React, { Component } from 'react'
import JobReelContext from '../../context/JobReelContext';
import Button from '../Button/Button';
import jobReelApiService from '../../services/jobreel-api-service';


export default class GithubJob extends Component {
    static contextType = JobReelContext

    state = {
        expanded: false
    }

    handleClick = (e) => {
        const job = this.props.job;
        console.log(job);
        if (!job.state) {
            console.log('No State');
            job.state = '';
        }
        console.log(job.state);
        const jobData = {
            job_title: job.title,
            company: job.company,
            city: job.location,
            state: job.state,
            url: job.url,
            description: job.description,
            status: 'Interested',
            user_id: this.context.user.id
        }
        console.log(jobData);
        // jobReelApiService.submitJob(jobData)
        //     .then(res => {
        //         console.log(res);
        //     })
    }
    
    renderJob() {
        const {job = {}} = this.props
        return (
            <li>
                JOB TITLE: {job.title}
                <br/>
                JOB TYPE: {job.type}
                <br/>
                COMPANY: {job.company}
                <br/>
                LOCATION: {job.location}
                <br/>
                <button onClick={this.handleExpand} className="expandButton">
                    <div className="expand">&#x2965;</div>
                    Get More Details
                </button>
                <Button onClick={this.handleClick}>Save Job</Button>
            </li>
        )
    }

    renderJobDescription() {
        //Transform job description HTML into JSX
    }

    renderJobExpanded() {
        const {job = {}} = this.props
        return (
            <li>
                JOB TITLE: {job.title}
                <br/>
                JOB TYPE: {job.type}
                <br/>
                COMPANY: {job.company}
                <br/>
                LOCATION: {job.location}
                <br/>
                COMPANY URL: {job.url}
                <br/>
                APPLY: {job.how_to_apply}
                {/* {job.description} */}
                <br/>
                <button onClick={this.handleCollapse} className="collapseButton">
                    <div className="collapse">&#x2963;</div>
                    <h3>Collapse</h3>
                </button>
            </li>
        )
    }

    handleExpand = () => {
        this.setState({ expanded: true })
    }

    handleCollapse = () => {
        this.setState({ expanded: false })
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