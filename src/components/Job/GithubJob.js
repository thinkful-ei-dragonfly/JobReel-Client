import React, { Component } from 'react'
import JobReelContext from '../../context/JobReelContext';
import Button from '../Button/Button';
import jobReelApiService from '../../services/jobreel-api-service';
import './Job.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class GithubJob extends Component {
    static contextType = JobReelContext

    state = {
        expanded: false,
        saved: false
    }

    static getDerivedStateFromProps(props) {
        const {job = {}, savedJobUrls} = props;
        if (job.url in savedJobUrls) {
            return {saved: true};
        }
        return null;
    }

    convertState = (state) => {
        state = state.toLowerCase();
        state = state[0].toUpperCase() + state.slice(1);
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

    handleClick = () => {
        const job = this.props.job;
        const location = job.location.split(', ');
        if (!job.state) {
            location[1] ? job.state = location[1] : job.state = '';
        }
        if (job.state.length > 2) {
            job.state = this.convertState(job.state);
        }
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
        jobReelApiService.submitJob(jobData)
            .then(res => {
                this.setState({saved: true});
                this.context.setSavedJobs([...this.context.savedJobs, res]);
            })
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
                {this.renderSaveButton()}  
            </div>
        )
    }

    renderSaveButton() {
        if (this.state.saved) {
            return (
                <div className='save-button'>
                    <p>Saved &#10004;</p>
                </div>
            
            )
        }
        return (
            <div className='save-button'>
                <Button id='save-button' onClick={this.handleClick}>Save Job</Button>
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
                    <a href={job.url} target='blank'>{job.company} Job Post on GitHub</a>
                </div>
                <div className='job-card-apply'>
                    <p>To apply, please visit website</p>
                </div>
                <div className='collapseButton'>
                    <FontAwesomeIcon icon='compress-arrows-alt' onClick={this.handleCollapse}/>
                </div>
                {this.renderSaveButton()}
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