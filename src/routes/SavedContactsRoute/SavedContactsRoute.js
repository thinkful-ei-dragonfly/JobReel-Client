import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import AddContactForm from '../../components/AddContactForm/AddContactForm';
import jobReelApiService from '../../services/jobreel-api-service';
import JobReelContext from '../../context/JobReelContext';
import './SavedContactsRoute.css';

class SavedContactsRoute extends React.Component {
  
  static contextType = JobReelContext

  componentDidMount = () => {
    jobReelApiService.getSavedContacts()
      .then(res => {
        this.context.setContacts(res.contacts);
      })
  }

  render() {
    return (
      <div className="SavedContactsRoute">
        <div className='title'>
          <h2>Contacts</h2>
        </div>
        <SideNav />
        <AddContactForm />
      </div>
    )
  }
}

export default SavedContactsRoute;