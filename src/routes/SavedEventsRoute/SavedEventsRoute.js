import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import AddEventForm from '../../components/AddEventForm/AddEventForm';
import jobReelApiService from '../../services/jobreel-api-service';
import JobReelContext from '../../context/JobReelContext';

class SavedEventsRoute extends React.Component {
  
  static contextType = JobReelContext

  componentDidMount = () => {
    jobReelApiService.getSavedEvents()
      .then(res => {
        this.context.setSavedEvents(res);
      })
  }

  render() {
    console.log('Saved events:');
    console.log(this.context.savedEvents);
    return (
      <div className="SavedEventsRoute">
        <SideNav />
        <AddEventForm />
      </div>
    )
  }
}

export default SavedEventsRoute;