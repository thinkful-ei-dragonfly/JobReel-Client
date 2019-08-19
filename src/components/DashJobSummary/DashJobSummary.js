import React from 'react';
import { Link } from 'react-router-dom';
import './DashJobSummary.css';
import jobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';

class DashJobSummary extends React.Component {

  static contextType = jobReelContext

  componentDidMount() {
    if (this.context.savedJobs.length === 0) {
      jobReelApiService.getSavedJobs()
        .then(res => {
          this.context.setSavedJobs(res);
        })
    }
  }

  renderJobSummaries = () => {
    let jobs = Array.from(this.context.savedJobs);
    jobs = jobs.sort((a, b) => {
      return new Date(b.date_added) - new Date(a.date_added);
    });
    if (this.props.section === "APPLIED JOBS") {
      jobs = jobs.filter(job => {
        return job.status === 'Applied';
      })
    } else {
      jobs = jobs.filter(job => {
        return job.status === 'Interested';
      })
    }
    jobs = jobs.slice(0, 3).map(job => {
      return (
        <li key={job.job_id}>{job.job_title}, {job.company} - <a href={job.url}>{job.url}</a></li>
      )
    })
    return (
      <ul>
        {jobs}
      </ul>
    )
  }
  
  render() {
    return (
      <>
        <div className="DashJobSummary">
          <h4>{this.props.section}</h4>
        </div>
        <div className='options'>
            {this.renderJobSummaries()}
        </div>
        <Link to="/saved-jobs">View all</Link>
      </>
    )
  }
}

export default DashJobSummary;