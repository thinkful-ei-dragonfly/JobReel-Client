import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import { Label, Input } from '../Form/Form';
import Contact from '../Contact/Contact';
import './ContactSummary.css';

class ContactSummary extends React.Component {

  static contextType = JobReelContext;

  state = {
    filter: '',
    search: ''
  }

  handleStatusFilter = e => {
    if(e.target.value === 'false'){
      this.setState({ filter: false })
    } else if(e.target.value === 'true'){
      this.setState({ filter: true })
    } else {
      this.setState({ filter: '' })
    }
  }

  handleChangeSearchTerm = e => {
    this.setState({ search: e.target.value })
  }

  renderContacts = () => {
    let search = this.state.search
    let filter = this.state.filter
    let contacts = Array.from(this.context.contacts)
    if(search !== ''){
      contacts = contacts.filter(contact => contact.contact_name.toLowerCase().includes(search.toLowerCase()) || 
      contact.job_title.toLowerCase().includes(search.toLowerCase()) || 
      contact.company.toLowerCase().includes(search.toLowerCase())
    )}
    if(filter !== ''){
      contacts = contacts.filter(contact => contact.connected === filter)
    }
    contacts = contacts.map(contact => <Contact key={contact.contact_id} id={contact.contact_id} name={contact.contact_name} job_title={contact.job_title} company={contact.company} email={contact.email} linkedin={contact.linkedin} comments={contact.comments} date={contact.date_added} connected={contact.connected} date_connected={contact.date_connected} user={contact.user_id} notification={contact.notification}/>)
    
    return (
      <div>
        {contacts}
      </div>
    )
  }

  render(){
    return(
      <div className="saved-contact-list">
        <div className='savedContactFilterControls'>
          <Label id='savedContactFilterTitle'>Filter by Job Status:</Label>
          <select
            id='status-input'
            name='status'
            onChange={this.handleStatusFilter}
          >
            <option value="">N/A</option>
            <option value="false">Not Connected</option>
            <option value="true">Connected</option>
          </select>
          <br/>
          <Label id='savedContactFilterSearch'>Search:</Label>
          <Input
            type='text'
            name='saved-contact-search'
            id='saved-contact-search'
            value={this.state.search}
            onChange={this.handleChangeSearchTerm}
          />
          <br/>
          <Button onClick={() => this.context.setManualContactAdd(true)} type="button">Add Contact</Button>
        </div>
        {this.renderContacts()}
      </div>
    )
  }
}

export default ContactSummary