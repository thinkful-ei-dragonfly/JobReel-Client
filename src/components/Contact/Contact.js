import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import { format } from 'date-fns'

class Contact extends React.Component {

  static contextType = JobReelContext;

  state = {
    contact_name: this.props.name,
    job_title: this.props.job_title,
    company: this.props.company,
    email: this.props.email,
    linkedin: this.props.linkedin,
    comments: this.props.comments
  }

  
  handleClickDelete(eventId){
    jobReelApiService.deleteEvent(eventId)
    this.context.deleteEvent(eventId)
  }

  // handleToggle = () => {
  //   this.setState({ editing: !this.state.editing })
  // }

  // handleSubmit = async e => {
  //   e.preventDefault()
  //   const { event_name, host, city, state, address, date, url, description, status } = this.state
  //   const editedEvent = { 
  //     event_name, 
  //     host, 
  //     city, 
  //     state, 
  //     address,
  //     url, 
  //     status, 
  //     description,
  //     event_id: this.props.id,
  //     date,
  //     user_id: this.props.user
  //    }
  //   await jobReelApiService.editEvent(editedEvent, this.props.id)
  //   await this.context.updateEvent(editedEvent)
  //   await this.handleToggle()
  // }

  render(){
    const { contact_name, job_title, company, email, linkedin, comments } = this.state
    let mail=`mailto:${email}`
    let contact = 
      <div className="contact-box">
        <h3>{contact_name}</h3>
        <h4>{job_title} at {company}</h4>
        <p>Email: <a href={mail}>{email}</a></p>
        <p>Linkedin: <a href={linkedin}>{linkedin}</a></p>
        <p>{comments}</p>
        <Button onClick={() => this.handleClickDelete(this.props.id)} type="button">Delete</Button>
        {/* <Button onClick={this.handleToggle} type="button">Edit</Button> */}
      </div>
    // let editCompany = 
    //   <form
    //   className='edit-contact-form'
    //   onSubmit={this.handleSubmit}>
    //     <div>
    //       <label htmlFor='name'>Contact Name</label>
    //       <input
    //         type='text'
    //         name='name'
    //         id='name'
    //         placeholder={contact_name}
    //         required
    //         value={contact_name}
    //         onChange={this.handleChangeEventName}
    //       />
    //     </div>
    //     <Button type="submit">Save Changes</Button>
    //     <Button type="button" onClick={this.handleToggle}>Back</Button>
    //   </form>
      // let display;
      // (this.state.editing === false) ? display = company : display = editCompany

    return(
      <div className="saved-contact">
        {contact}
      </div>
    )
  }
}

export default Contact