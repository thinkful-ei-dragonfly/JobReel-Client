import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import { format } from 'date-fns'
import './SavedJobSummary.css'

class SavedJobSummary extends React.Component {

  static contextType = JobReelContext;


  handleClick = () => {
    this.context.setManualJobAdd(true)
  }

  render(){
    let mappedJobs;

    if(this.context.savedJobs !== []){
      let jobs = this.context.savedJobs
      mappedJobs = jobs.map(job => {
      return <div className="job-box">
      <h3>{job.company}: {job.job_title}</h3>
      <p>Posted {format(job.date_added, 'Do MMM YYYY')}</p>
      <p>{job.city}, {job.state}</p>
      <p><a href={job.url}>{job.url}</a></p>
      <p>{job.description}</p>
      {/* <Button onSubmit={(e) => this.jobReelApiService.deleteJob(e.target)} type="submit">Delete</Button> */}
      <Button onClick={(e) => console.log(e.target)} type="button">Delete</Button>
      </div>
    })
    }
    return(
      <div className="saved-job-list">
        <h2>Saved Jobs</h2>
        <Button onClick={this.handleClick} type="button">Add Job</Button>
        {mappedJobs}
      </div>
    )
  }
}

export default SavedJobSummary