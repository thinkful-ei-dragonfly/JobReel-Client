import React, { Component } from 'react'
import JobReelContext from '../../context/JobReelContext';
import './Job.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class GithubJob extends Component {
    static contextType = JobReelContext

    state = {
        expanded: false
    }

    renderJob() {
        const {job = {}} = this.props
        return (
            <div className='job-card'>
                <div className='job-card-title'>
                    <h3>{job.title}</h3>
                </div>
                <div className='job-card-type'>
                    <p>{job.type}</p>    
                </div>
                <div className='job-card-company'>
                    <p>{job.company}</p>
                </div>
                <div className='job-card-location'>
                    <p>{job.location}</p>
                </div>
                <div className='expandButton'>
                    <FontAwesomeIcon icon='expand-arrows-alt' onClick={this.handleExpand}/>
                </div>
                
                
            </div>
        )
    }

    renderJobDescription() {
        //Transform job description HTML into JSX
    }

    renderJobExpanded() {
        const {job = {}} = this.props
        return (
            <div className='job-card-expanded'>
                 <div className='job-card-title'>
                    <h3>{job.title}</h3>
                </div>
                <div className='job-card-type'>
                    <p>{job.type}</p>    
                </div>
                <div className='job-card-company'>
                    <p>{job.company}</p>
                </div>
                <div className='job-card-location'>
                    <p>{job.location}</p>
                </div>
                <div className='job-card-url'>
                    <a href={job.url}>{job.company} Job Post on GitHub</a>
                </div>
                <div className='job-card-apply'>
                    <p>To apply, please visit website</p>
                </div>
                <div className='collapseButton'>
                    <FontAwesomeIcon icon='compress-arrows-alt' onClick={this.handleCollapse}/>
                </div>
            </div>
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