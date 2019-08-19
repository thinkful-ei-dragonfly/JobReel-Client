import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import AddContactForm from '../../components/AddContactForm/AddContactForm';
import jobReelApiService from '../../services/jobreel-api-service';
import JobReelContext from '../../context/JobReelContext';

class SavedContactsRoute extends React.Component {
  
  static contextType = JobReelContext

  componentDidMount = () => {
    jobReelApiService.getSavedContacts()
      .then(res => {
        console.log(res);
        this.context.setContacts(res.contacts);
      })
  }

  render() {
    console.log(this.context.contacts);
    return (
      <div className="SavedContactsRoute">
        <SideNav />
        <AddContactForm />
      </div>
    )
  }
}

export default SavedContactsRoute;