import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import AddEventForm from '../../components/AddEventForm/AddEventForm';
import jobReelApiService from '../../services/jobreel-api-service';
import JobReelContext from '../../context/JobReelContext';
import MediaQuery from 'react-responsive'
import SavedEventsSummary from '../../components/SavedEventsSummary/SavedEventsSummary'
import TopNav from '../../components/TopNav/TopNav'
import './SavedEventsRoute.css';

class SavedEventsRoute extends React.Component {
  
  static contextType = JobReelContext

  componentDidMount = () => {
    jobReelApiService.getSavedEvents()
      .then(res => {
        this.context.setSavedEvents(res);
      })
  }

  render() {
    let display;
    (this.context.manualEventAdd === false) ? display = <SavedEventsSummary /> : display = <AddEventForm /> 
    return (
      <div className="SavedEventsRoute">
        <div className='title'>
          <h2>Events</h2>
        </div>
        <MediaQuery minDeviceWidth={961}>
          <SideNav/>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={960}>
          <TopNav/>
        </MediaQuery>
        {display}
      </div>
    )
  }
}

export default SavedEventsRoute;