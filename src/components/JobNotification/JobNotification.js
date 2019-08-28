import React from 'react';
import Button from '../../components/Button/Button';
import jobReelApiService from '../../services/jobreel-api-service';
import jobReelContext from '../../context/JobReelContext';

class JobNotification extends React.Component {

  static contextType = jobReelContext

  state = {
    job_title: this.props.title, 
    company: this.props.company, 
    city: this.props.city,  
    state: this.props.state,  
    url: this.props.url,  
    status: this.props.status,  
    description: this.props.desc, 
    job_id: this.props.job_id, 
    date_added: this.props.date_added, 
    date_applied: this.props.date_applied, 
    user_id: this.props.user_id, 
    notification: this.props.notification
  }

  handleHideJob() {
    const { job_title, company, city, state, url, status, description, date_applied, job_id, date_added, user_id } = this.state
    let editedJob = {
        job_title,
        company, 
        city, 
        state, 
        url, 
        status, 
        description,
        job_id,
        date_added,
        date_applied,
        user_id,
        notification: false
    }
    jobReelApiService.editJob(editedJob, job_id)
    this.context.updateJob(editedJob)
    this.setState({ notification: false })
  }

  renderNotification(){
    let today = new Date();
    let applied = new Date(this.state.date_applied)
    let diff = Math.abs((today - applied) / (1000 * 60 * 60 * 24))
    let rounded = Math.round(diff)
    if (this.state.date_applied && (this.state.notification === true) && (rounded > 7)) {
    return <p key={this.state.job_id}>You applied to {this.state.company} {rounded} days ago.  Have you heard back? <button onClick={() => this.handleHideJob()}>Clear</button></p>
      }
  }
  
  render() {
    return (
      <div className="job-notification">
        {this.renderNotification()}
      </div>
    )
  }
}

export default JobNotification;