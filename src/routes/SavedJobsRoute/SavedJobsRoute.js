import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import AddJobForm from '../../components/AddJobForm/AddJobForm';
import SavedJobSummary from '../../components/SavedJobSummary/SavedJobSummary'
import jobReelApiService from '../../services/jobreel-api-service';
import JobReelContext from '../../context/JobReelContext';

class SavedJobsRoute extends React.Component {
  
  static contextType = JobReelContext

  componentDidMount = () => {
    jobReelApiService.getSavedJobs()
      .then(res => {
        this.context.setSavedJobs(res)
      })
  }

  render() {
    let display;
    (this.context.manualJobAdd === false) ? display = <SavedJobSummary /> : display = <AddJobForm /> 
    return (
      <div className="SavedJobsRoute">
        <SideNav />
        {display}
      </div>
    )
  }
}

export default SavedJobsRoute;