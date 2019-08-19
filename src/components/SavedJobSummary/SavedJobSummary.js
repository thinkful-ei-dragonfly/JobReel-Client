import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import SavedJob from '../SavedJob/SavedJob';
import { format } from 'date-fns'
import './SavedJobSummary.css'

class SavedJobSummary extends React.Component {

  static contextType = JobReelContext;


  handleClickDelete(jobId){
    jobReelApiService.deleteJob(jobId)
    this.context.deleteJob(jobId)
  }

  render(){
    let mappedJobs;
    if(this.context.savedJobs !== []){
      let jobs = this.context.savedJobs
      mappedJobs = jobs.map(job => <SavedJob user={job.user_id} id={job.job_id} company={job.company} title={job.job_title} date={job.date_added} city={job.city} state={job.state} url={job.url} desc={job.description} status={job.status}/>)
    }

    return(
      <div className="saved-job-list">
        <h2>Saved Jobs</h2>
        <Button onClick={() => this.context.setManualJobAdd(true)} type="button">Add Job</Button>
        {mappedJobs}
      </div>
    )
  }
}

export default SavedJobSummary