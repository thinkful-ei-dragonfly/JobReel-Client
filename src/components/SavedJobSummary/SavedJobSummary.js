import React from 'react';
import JobReelContext from '../../context/JobReelContext';
import SavedJob from '../SavedJob/SavedJob';
import './SavedJobSummary.css'
import { Label, Input } from '../Form/Form';

class SavedJobSummary extends React.Component {

  static contextType = JobReelContext;

  state = {
    filter: '',
    search: ''
  }

  handleStatusFilter = e => {
    this.setState({ filter: e.target.value })
  }

  handleChangeSearchTerm = e => {
    this.setState({ search: e.target.value })
  }

  renderJobs = () => {
    let search = this.state.search
    let filter = this.state.filter
    let jobs = Array.from(this.context.savedJobs)
    if(search !== ''){
      jobs = jobs.filter(job => job.job_title.toLowerCase().includes(search.toLowerCase()) || 
      job.company.toLowerCase().includes(search.toLowerCase()) || 
      job.city.toLowerCase().includes(search.toLowerCase()) || 
      job.description.toLowerCase().includes(search.toLowerCase())
    )}
    if(filter !== ''){
      jobs = jobs.filter(job => job.status === filter)
    }
    jobs = jobs.map(job => <SavedJob key={job.job_id} user={job.user_id} id={job.job_id} company={job.company} title={job.job_title} date={job.date_added} city={job.city} state={job.state} url={job.url} desc={job.description} status={job.status} date_applied={job.date_applied} notification={job.notification}/>)
    
    return (
      <div>
        {jobs}
      </div>
    )
  }

  render(){
    return(
      <div className="saved-job-list">
        <div className='savedJobFilterControls'>
          <Label id='savedJobFilterTitle'>Filter by Job Status:</Label>
          <select
            id='statusInput'
            name='status'
            onChange={this.handleStatusFilter}
          >
            <option value="">N/A</option>
            <option value="Interested">Interested</option>
            <option value="Applied">Applied</option>
          </select>
          <Label id='savedJobFilterSearch'>Search:</Label>
          <Input
            type='text'
            name='saved-job-search'
            id='saved-job-search'
            value={this.state.search}
            onChange={this.handleChangeSearchTerm}
          />
        </div>
        {this.renderJobs()}
      </div>
    )
  }
}

export default SavedJobSummary