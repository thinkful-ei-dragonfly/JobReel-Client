import React from 'react';
import Button from '../../components/Button/Button';
import { Label, Input } from '../Form/Form';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import { format } from 'date-fns'
import './Contact.css'

class Contact extends React.Component {

  static contextType = JobReelContext;

  state = {
    error: null,
    editing: false,
    contact_name: this.props.name || '',
    job_title: this.props.job_title || '',
    company: this.props.company || '',
    email: this.props.email || '',
    linkedin: this.props.linkedin || '',
    comments: this.props.comments || '',
    connected: this.props.connected,
    date_connected: this.props.date_connected || '',
    showDateConnected: false
  }

  
  handleClickDelete(contactId){
    jobReelApiService.deleteContact(contactId)
    this.context.deleteContact(contactId)
  }

  handleChangeContactName = e => {
    this.setState({ contact_name: e.target.value })
  };

  handleChangeJobTitle = e => {
    this.setState({ job_title: e.target.value })
  };

  handleChangeCompany = e => {
    this.setState({ company: e.target.value })
  };

  handleChangeEmail = e => {
    this.setState({ email: e.target.value })
  };

  handleChangeLinkedin = e => {
    this.setState({ linkedin: e.target.value })
  };

  handleChangeComments = e => {
    this.setState({ comments: e.target.value })
  };

  handleChangeConnected = e => {
    if(e.target.value === 'false'){
      this.setState({ connected: false })
      this.setState({ date_connected: null })
      this.setState({ showDateConnected: false })
    } else {
      this.setState({ connected: true })
      this.setState({ showDateConnected: true })
    }
  }

  handleToggle = () => {
    this.setState({ editing: !this.state.editing })
  }

  handleDateConnected = e => {
    this.setState({ date_connected: e.target.value })
    this.setState({ showDateConnected: false })
  };

  validateUrl(url) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(url)
  }

  handleError = (error) => {
    this.setState({ error })
  }

  convertDate = (date) => {
    if (date) {
      let offset = new Date(date)
      offset.setMinutes(offset.getMinutes() + offset.getTimezoneOffset())
      return format(offset, 'YYYY-MM-DD')
    } else {
      return '';
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { contact_name, job_title, company, email, linkedin, comments, connected, date_connected } = this.state
    if (linkedin && !this.validateUrl(linkedin)) {
      this.handleError('Please provide a valid Linkedin address starting with http:// or https://')
    } else {
      const editedContact = { 
        contact_name, 
        job_title, 
        company, 
        email, 
        linkedin,
        comments, 
        connected,
        date_connected,
        contact_id: this.props.id,
        date_added: this.props.date,
        notification: this.props.notification,
        user_id: this.props.user
       }
      jobReelApiService.editContact(editedContact, this.props.id)
      this.context.updateContact(editedContact)
      this.handleToggle()
      this.handleError(null)
    }
  }

  renderDateSelector(){
    const { showDateConnected, date_connected} = this.state
    let dateSelector;
    (date_connected || showDateConnected)
      ? dateSelector = 
      <div>
        <Label htmlFor='date-input'>Date Applied</Label>
        <br/>
        <Input type="date" id='date-input' name='date' value={this.convertDate(date_connected)} onChange={this.handleDateConnected}/>
      </div>
      : dateSelector = ''

      return dateSelector;
  }

  render(){
    const { contact_name, job_title, company, email, linkedin, comments, error, editing, connected, date_connected } = this.state
    let mail=`mailto:${email}`
    let connectionStatus
    (connected === false ) ? connectionStatus = "Not Connected" : connectionStatus = "Connected"
    let contact = 
      <div className="contact-box">
        {date_connected ? <div className="connection-status green">{connectionStatus} on {format(date_connected, 'MM-DD-YYYY')}</div> : <div className="connection-status yellow">{connectionStatus}</div>}
        <h3>{contact_name}</h3>
        <h4>{job_title} at {company}</h4>
        {email ? <p>Email: <a href={mail}>{email}</a></p> : ''}
        {linkedin ? <p>Linkedin: <a href={linkedin}>{linkedin}</a></p> : ''}
        {comments ? <p>{comments}</p> : ''}
        <Button onClick={() => this.handleClickDelete(this.props.id)} type="button">Delete</Button>
        <Button className="edit-button" onClick={this.handleToggle} type="button">Edit</Button>
      </div>
    let editContact = 
      <form
      className='edit-contact-form'
      onSubmit={this.handleSubmit}>
        <div>
          <div className="error-message">{error}</div>
          <Label htmlFor='name'>Contact Name</Label>
          <br/>
          <Input
            type='text'
            name='name'
            id='name'
            placeholder={contact_name}
            required
            value={contact_name}
            onChange={this.handleChangeContactName}
          />
        </div>
        <div>
          <Label htmlFor='title'>Job Title</Label>
          <br/>
          <Input
            type='text'
            name='title'
            id='title'
            placeholder={job_title}
            required
            value={job_title}
            onChange={this.handleChangeJobTitle}
          />
        </div>
        <div>
          <Label htmlFor='company'>Company</Label>
          <br/>
          <Input
            type='text'
            name='company'
            id='company'
            placeholder={company}
            required
            value={company}
            onChange={this.handleChangeCompany}
          />
        </div>
        <div>
          <Label htmlFor='email'>Email</Label>
          <br/>
          <Input
            type='text'
            name='email'
            id='email'
            placeholder={email}
            value={email}
            onChange={this.handleChangeEmail}
          />
        </div>
        <div>
          <Label htmlFor='linkedin'>Linkedin</Label>
          <br/>
          <Input
            type='text'
            name='linkedin'
            id='linkedin'
            placeholder={linkedin}
            value={linkedin}
            onChange={this.handleChangeLinkedin}
          />
        </div>
        <div>
          <Label htmlFor='comments'>Comments</Label>
          <br/>
          <textarea 
            name='comments'
            id='comments'
            placeholder={comments}
            rows='3'
            value={comments}
            onChange={this.handleChangeComments}
          />
        </div>
        <div>
          <Label htmlFor='connected'>Connection Status</Label>
          <br/>
          <select
              id='connected-Input'
              name='connected'
              onChange={this.handleChangeConnected}
              value={connected}
            >
              <option value="false">Not Connected</option>
              <option value="true">Connected</option>
            </select>
        </div>
        {this.renderDateSelector()}
        <br/>
        <Button type="submit">Save Changes</Button>
        <Button type="button" onClick={this.handleToggle}>Back</Button>
      </form>
      let display;
      (editing === false) ? display = contact : display = editContact

    return(
      <div className="saved-contact">
        {display}
      </div>
    )
  }
}

export default Contact