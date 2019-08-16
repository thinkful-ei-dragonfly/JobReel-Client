import React, { Component } from 'react'
import JobReelContext from '../../context/JobReelContext';


export default class Job extends Component {
    static contextType = JobReelContext

    state = {
        expanded: false
    }


    renderJob() {
        const {job = {}} = this.props
        const {type = {}} = this.props
        const {company = {}} = this.props
        console.log(job.category)
        return (
            <li>
                JOB TITLE: {job.title}
                <br/>
                JOB TYPE: {type.name}
                <br/>
                COMPANY: {company.name}
                <br/>
                LOCATION: {company.location.name}
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
        const { job = {}} = this.props
        const {type = {}} = this.props
        const {company = {}} = this.props
        return (
            <li>
                JOB TITLE: {job.title}
                <br/>
                JOB TYPE: {type.name}
                <br/>
                COMPANY: {company.name}
                <br/>
                LOCATION: {company.location.name}
                <br/>
                COMPANY URL: {company.url}
                <br/>
                APPLY: {job.apply_url}
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
                {this.props.job.category 
                && this.renderFunction()}
            </>
        )
    }
}