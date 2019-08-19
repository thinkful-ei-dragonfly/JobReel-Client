import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import './SavedJobs.css'
import { format } from 'date-fns'

class SavedJob extends React.Component {

  static contextType = JobReelContext;

  state = {
    editing: false,
    company: this.props.company || '',
    title: this.props.title || '',
    city: this.props.city || '',
    state: this.props.state || '',
    url: this.props.url || '',
    status: this.props.status || '',
    description: this.props.desc || ''
  };

  handleToggle = () => {
    this.setState({ editing: !this.state.editing })
  }

  handleChangeCompany = e => {
    this.setState({ company: e.target.value })
  };

  handleChangeTitle = e => {
    this.setState({ title: e.target.value })
  };

  handleChangeCity = e => {
    this.setState({ city: e.target.value })
  };

  handleChangeState = e => {
    this.setState({ state: e.target.value })
  };

  handleChangeUrl = e => {
    this.setState({ url: e.target.value })
  };

  handleChangeStatus = e => {
    this.setState({ status: e.target.value })
  };

  handleChangeDesc = e => {
    this.setState({ desc: e.target.value })
  };

  handleClickDelete(jobId){
    jobReelApiService.deleteJob(jobId)
    this.context.deleteJob(jobId)
  }

  handleClickEdit = (jobId) => {
    const { title, company, city, state, url, status, description } = this.state
    const editedJob = { 
      job_title: title, 
      company, 
      city, 
      state, 
      url, 
      status, 
      description,
     }
    jobReelApiService.editJob(editedJob, jobId)
  }

  render(){
    let status;
    (this.props.status === 'Interested')
      ? status = <div className="job-status yellow">{this.props.status}</div>
      : status = <div className="job-status green">{this.props.status}</div> 
    let job = 
      <div className="job-box">
        {status}
        <h3>{this.props.company}: {this.props.title}</h3>
        <p>Posted {format(this.props.date, 'Do MMM YYYY')}</p>
        <p>{this.props.city}, {this.props.state}</p>
        <p><a href={this.props.url}>{this.props.url}</a></p>
        <p>{this.props.desc}</p>
        <Button onClick={() => this.handleClickDelete(this.props.id)} type="button">Delete</Button>
        <Button onClick={this.handleToggle} type="button">Edit</Button>
      </div>
    let editJob = 
      <form
      className='edit-job-form'
      onSubmit={this.handleClickEdit(this.props.id)}>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder={this.state.title}
            required
            value={this.state.title}
            onChange={this.handleChangeTitle}
          />
        </div>
        <Button type="submit">Save Changes</Button>
        <Button type="button" onClick={this.handleToggle}>Back</Button>
      </form>

    let display;
    (this.state.editing === false) ? display = job : display = editJob
    
    return(
      <div className="saved-job">
        {display}
      </div>
    )
  }
}

export default SavedJob