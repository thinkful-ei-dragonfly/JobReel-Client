import React from 'react';
import Button from '../../components/Button/Button';
import { Input, Label } from '../../components/Form/Form';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';

class Contact extends React.Component {

  static contextType = JobReelContext;

  state = {
    error: null,
    editing: false,
    contact_name: this.props.name,
    job_title: this.props.job_title,
    company: this.props.company,
    email: this.props.email,
    linkedin: this.props.linkedin,
    comments: this.props.comments
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

  handleToggle = () => {
    this.setState({ editing: !this.state.editing })
  }

  validateUrl(url) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(url)
  }

  handleError = (error) => {
    this.setState({ error })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { contact_name, job_title, company, email, linkedin, comments } = this.state
    if (!this.validateUrl(linkedin)) {
      this.handleError('Please provide a valid Linkedin address starting with http:// or https://')
    } else {
      const editedContact = { 
        contact_name, 
        job_title, 
        company, 
        email, 
        linkedin,
        comments, 
        contact_id: this.props.id,
        date_added: this.props.date,
        user_id: this.props.user
       }
      jobReelApiService.editContact(editedContact, this.props.id)
      this.context.updateContact(editedContact)
      this.handleToggle()
      this.handleError(null)
    }
  }

  render(){
    const { contact_name, job_title, company, email, linkedin, comments, error, editing } = this.state
    let mail=`mailto:${email}`
    let contact = 
      <div className="contact-box">
        <h3>{contact_name}</h3>
        <h4>{job_title} at {company}</h4>
        <p>Email: <a href={mail}>{email}</a></p>
        <p>Linkedin: <a href={linkedin}>{linkedin}</a></p>
        <p>{comments}</p>
        <Button onClick={() => this.handleClickDelete(this.props.id)} type="button">Delete</Button>
        <Button onClick={this.handleToggle} type="button">Edit</Button>
      </div>
    let editContact = 
      <form
      className='edit-contact-form'
      onSubmit={this.handleSubmit}>
        <div>
          <div role='alert' className="error-message">
            {error && <p>{error}</p>}
          </div>
          <Label htmlFor='name'>Contact Name</Label>
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
          <textarea 
            name='comments'
            id='comments'
            placeholder={comments}
            rows='3'
            value={comments}
            onChange={this.handleChangeComments}
          />
        </div>
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