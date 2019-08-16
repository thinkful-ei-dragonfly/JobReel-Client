import React, { Component } from 'react'
import JobReelContext from '../../context/JobReelContext';


export default class GithubJob extends Component {
    static contextType = JobReelContext

    state = {
        expanded: false
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