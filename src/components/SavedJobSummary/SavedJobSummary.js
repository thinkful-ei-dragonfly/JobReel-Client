import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import SavedJob from '../SavedJob/SavedJob';
import Select from 'react-select'
import './SavedJobSummary.css'
import { Label } from '../Form/Form';

class SavedJobSummary extends React.Component {

  static contextType = JobReelContext;

  state = {
    filter: ''
  }

  handleClickDelete(jobId){
    jobReelApiService.deleteJob(jobId)
    this.context.deleteJob(jobId)
  }

  handleStatusFilter = e => {
    this.setState({ filter: e.target.value })
  }

  render(){
    let mappedJobs;
    if (this.context.savedJobs !== [] && this.state.filter !== null){
      let jobs = this.context.savedJobs
      mappedJobs = jobs
      .filter(j => j.status === this.state.filter)
      .map(job => <SavedJob key={job.job_id} user={job.user_id} id={job.job_id} company={job.company} title={job.job_title} date={job.date_added} city={job.city} state={job.state} url={job.url} desc={job.description} status={job.status} />)
    }
    if(this.context.savedJobs !== [] && (this.state.filter === '')){
      let jobs = this.context.savedJobs
      mappedJobs = jobs
      .map(job => <SavedJob key={job.job_id} user={job.user_id} id={job.job_id} company={job.company} title={job.job_title} date={job.date_added} city={job.city} state={job.state} url={job.url} desc={job.description} status={job.status}/>)
    }

    return(
      <div className="saved-job-list">
        <div className='savedJobFilterControls'>
          <Label id='savedJobFilterTitle'>Filter by Job Status:</Label>
          <Select
            id='status-input'
            name='status'
            onChange={this.handleStatusFilter}
          >
            <option value="">N/A</option>
            <option value="Interested">Interested</option>
            <option value="Applied">Applied</option>
          </Select>
          <Button id='addButton' onClick={() => this.context.setManualJobAdd(true)} type="button">Add Job</Button>
        </div>
        {mappedJobs}
      </div>
    )
  }
}

export default SavedJobSummary