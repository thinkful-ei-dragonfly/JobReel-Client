import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import Contact from '../Contact/Contact';

class SavedContactsSummary extends React.Component {

  static contextType = JobReelContext;

  render(){
    let mappedContacts;
    if(this.context.contacts !== []){
      let contacts = this.context.contacts
      mappedContacts = contacts
      .map(contact => <Contact key={contact.contact_id} id={contact.contact_id} name={contact.contact_name} job_title={contact.job_title} company={contact.company} email={contact.email} linkedin={contact.linkedin} comments={contact.comments} date={contact.date_added} connected={contact.connected} user={contact.user_id}/>)
    }

    return(
      <div className="saved-contact-list">
        <h2>Saved Contacts</h2>
        <Button onClick={() => this.context.setManualContactAdd(true)} type="button">Add Contact</Button>
        {mappedContacts}
      </div>
    )
  }
}

export default SavedContactsSummary