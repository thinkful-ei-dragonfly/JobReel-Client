import React, { Component } from 'react'
import JobReelApiService from '../../services/jobreel-api-service'
import JobReelContext from '../../context/JobReelContext';
import './Job.css'


export default class Job extends Component {
    static contextType = JobReelContext

    state = {
        expanded: false
    }

    componentDidMount() {

    }

    renderJob() {
        const { job = {}} = this.props
        console.log(job.category)
        return (
            <li>
                {job.title}
                <br/>
                {job.category.name}
                <br/>
                {job.type.name}
                <br/>
                {job.company.name}
                {job.company.location.name}
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
        const { job } = this.props
        return (
            <li>
                {job.title}
                {job.category.name}
                {job.type.name}
                {job.company.name}
                {job.company.location.name}
                {job.company.url}
                {job.company.perks}
                {job.apply_url}
                {/* {job.description} */}
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