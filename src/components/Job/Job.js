import React, { Component } from 'react'
import JobReelContext from '../../context/JobReelContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Job.css'


export default class Job extends Component {
    static contextType = JobReelContext

    state = {
        expanded: false
    }


    renderJob() {
        const {job = {}} = this.props
        const {type = {}} = this.props
        const {company = {}} = this.props
        const {location = {}} = this.props
        console.log(job.category)
        return (
            <div className='job-card'>
                <div className='job-card-title'>
                    <h3>{job.title}</h3>
                </div>
                <div className='job-card-type'>
                    <p>{type.name}</p>    
                </div>
                <div className='job-card-company'>
                    <p>{company.name}</p>
                </div>
                <div className='job-card-location'>
                    <p>{this.location ? location.name : 'Remote'}</p>
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
        const { job = {}} = this.props
        const {type = {}} = this.props
        const {company = {}} = this.props
        const {location = {}} = this.props
        return (
            <div className='job-card'>
                <div className='job-card-title'>
                    <h3>{job.title}</h3>
                </div>
                <div className='job-card-type'>
                    <p>{type.name}</p>    
                </div>
                <div className='job-card-company'>
                    <p>{company.name}</p>
                </div>
                <div className='job-card-location'>
                    <p>{this.location ? location.name : 'Remote'}</p>
                </div>
                <div className='job-card-url'>
                    <a href={company.url} target='blank'>{company.name}'s Website</a>
                </div>
                <div className='job-card-apply'>
                    <a href={job.apply_url} target='blank'>Apply for {company.name}</a>
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
                {this.props.job.company 
                && this.renderFunction()}
            </>
        )
    }
}