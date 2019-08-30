import React from 'react';
import jobReelApiService from '../../services/jobreel-api-service';
import jobReelContext from '../../context/JobReelContext';

class ContactNotification extends React.Component {

  static contextType = jobReelContext

  state = {
    contact_name: this.props.name,
    job_title: this.props.job_title,
    company: this.props.company,
    email: this.props.email,
    linkedin: this.props.linkedin,
    comments: this.props.comments,
    connected: this.props.connected,
    date_connected: this.props.date_connected,
    contact_id: this.props.contact_id,
    date_added: this.props.date_added,
    notification: this.props.notification,
    user_id: this.props.user_id
  }

  handleHideContact() {
    const { contact_name, job_title, company, email, linkedin, comments, connected, date_connected, contact_id, date_added, user_id } = this.state
    const editedContact = { 
      contact_name, 
      job_title, 
      company, 
      email, 
      linkedin,
      comments, 
      connected,
      date_connected,
      contact_id,
      date_added,
      notification: false,
      user_id
      }
    jobReelApiService.editContact(editedContact, contact_id)
    this.context.updateContact(editedContact)
    this.setState({ notification: false })
  }

  renderNotification(){
    let today = new Date();
    let connected = new Date(this.state.date_connected)
    let diff = Math.abs((today - connected) / (1000 * 60 * 60 * 24))
    let rounded = Math.round(diff)
    let mail=`mailto:${this.state.email}`
    if (this.state.date_connected && (this.state.notification === true) && (rounded > 7)) {
    return <p  
    className="notification"
    key={this.state.contact_id}>
      You reached out to {this.state.contact_name} {rounded} days ago.  
      <a href={mail}> Follow up </a>
       if you haven't received a response.
       <button className="notification-button" onClick={() => this.handleHideContact()}>Clear</button></p>
      }
  }
  
  render() {
    return (
      <div className="contact-notification">
        {this.renderNotification()}
      </div>
    )
  }
}

export default ContactNotification;