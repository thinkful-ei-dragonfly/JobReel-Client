import React from 'react';
import { Link } from 'react-router-dom';
import './DashContactSummary.css';
import jobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';

class DashContactSummary extends React.Component {

  static contextType = jobReelContext

  componentDidMount() {
    if (this.context.contacts.length === 0) {
      jobReelApiService.getSavedContacts()
        .then(res => {
          this.context.setContacts(res.contacts);
        })
    }
  }

  renderContactSummaries = () => {
    let contacts = Array.from(this.context.contacts);
    contacts = contacts.sort((a, b) => {
      return new Date(b.date_added) - new Date(a.date_added);
    });
    contacts = contacts.slice(0, 3).map(contact => {
      return (
        <li key={contact.contact_id}>{contact.contact_name} - {contact.company} - {contact.email} - <a href={contact.linkedin}>LinkedIn</a></li>
      )
    })
    return (
      <ul>
        {contacts}
      </ul>
    )
  }
  
  render() {
    return (
      <>
        <div className="DashContactSummary">
          <h4>{this.props.section}</h4>
        </div>
        <div className='options'>
            {this.renderContactSummaries()}
        </div>
        <Link to="/contacts">View all</Link>
      </>
    )
  }
}

export default DashContactSummary;