import React, { Component } from 'react'
import JobReelContext from '../../context/JobReelContext';
import Button from '../Button/Button';
import jobReelApiService from '../../services/jobreel-api-service';


export default class GithubJob extends Component {
    static contextType = JobReelContext

    state = {
        expanded: false
    }

    convertState = (state) => {
        console.log(`Converting; ${state}`);
        const states = {
            'Alabama' : 'AL',
            'Alaska' : 'AK',
            'American Samoa' : 'AS',
            'Arizona' : 'AZ',
            'Arkansas' : 'AR',
            'California' : 'CA',
            'Colorado' : 'CO',
            'Connecticut' : 'CT',
            'Delaware' : 'DE',
            'District Of Columbia' : 'DC',
            'Federated States Of Micronesia' : 'FM',
            'Florida' : 'FL',
            'Georgia' : 'GA',
            'Guam' : 'GU',
            'Hawaii' : 'HI',
            'Idaho' : 'ID',
            'Illinois' : 'IL',
            'Indiana' : 'IN',
            'Iowa' : 'IA',
            'Kansas' : 'KS',
            'Kentucky' : 'KY',
            'Louisiana' : 'LA',
            'Maine' : 'ME',
            'Marshall Islands' : 'MH',
            'Maryland' : 'MD',
            'Massachusetts' : 'MA',
            'Michigan' : 'MI',
            'Minnesota' : 'MN',
            'Mississippi' : 'MS',
            'Missouri' : 'MO',
            'Montana' : 'MT',
            'Nebraska' : 'NE',
            'Nevada' : 'NV',
            'New Hampshire' : 'NH',
            'New Jersey' : 'NJ',
            'New Mexico' : 'NM',
            'New York' : 'NY',
            'North Carolina' : 'NC',
            'North Dakota' : 'ND',
            'Northern Mariana Islands' : 'MP',
            'Ohio' : 'OH',
            'Oklahoma' : 'OK',
            'Oregon' : 'OR',
            'Palau' : 'PW',
            'Pennsylvania' : 'PA',
            'Puerto Rico' : 'PR',
            'Rhode Island' : 'RI',
            'South Carolina' : 'SC',
            'South Dakota' : 'SD',
            'Tennessee' : 'TN',
            'Texas' : 'TX',
            'Utah' : 'UT',
            'Vermont' : 'VT',
            'Virgin Islands' : 'VI',
            'Virginia' : 'VA',
            'Washington' : 'WA',
            'West Virginia' : 'WV',
            'Wisconsin' : 'WI',
            'Wyomin' : 'WY'
        }
        if (state in states) {
            return states[state];
        }
        return state;
    }

    handleClick = (e) => {
        this.convertState('California');
        const job = this.props.job;
        console.log(job)
        const location = job.location.split(', ');
        console.log(location);
        if (!job.state) {
            console.log('No State');
            console.log(location[1]);
            // job.state = '';
            location[1] ? job.state = location[1] : job.state = '';;
        }
        console.log(job.state);
        const jobData = {
            job_title: job.title,
            company: job.company,
            city: location[0],
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