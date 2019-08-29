import React from 'react';
import './Notifications.css';
import JobNotification from '../JobNotification/JobNotification';
import ContactNotification from '../ContactNotification/ContactNotification';
import jobReelContext from '../../context/JobReelContext';

class Notifications extends React.Component {

  static contextType = jobReelContext

  renderDatesApplied(){
    let jobs = Array.from(this.context.savedJobs)
    if(this.context.savedJobs === []){
      return ''
    } else {
      let applied = jobs.map((job, i) => {
        return <JobNotification 
        key={i} 
        user_id={job.user_id} 
        job_id={job.job_id} 
        city={job.city} 
        state={job.state} 
        url={job.url} 
        status={job.status} 
        desc={job.description} 
        date_added={job.date_added} 
        company={job.company} 
        title={job.job_title} 
        date_applied={job.date_applied} 
        notification={job.notification}/>
      })
      return <div>{applied}</div>
    }
  }

  renderContactsConnected(){
    let contacts = Array.from(this.context.contacts)
    if(this.context.contacts === []){
      return ''
    } else {
      let contacted = contacts.map((contact, i) => {
        return <ContactNotification 
        key={i} 
        contact_id={contact.contact_id} 
        name={contact.contact_name} 
        job_title={contact.job_title}
        company={contact.company}
        linkedin={contact.linkedin}
        comments={contact.comments}
        email={contact.email} 
        connected={contact.connected} 
        date_added={contact.date_added}
        date_connected={contact.date_connected} 
        user_id={contact.user_id} 
        notification={contact.notification} />
      })
      return <div>{contacted}</div>
    }
  }

  render() {
    return (
      <div className="notifications-box">
        <div className='notification-header'>
          <h3>Notifications</h3>
        </div>
        <div className="notifications">
            {this.renderDatesApplied()}
            {this.renderContactsConnected()}
        </div>
      </div>
    )
  }
}

export default Notifications;