import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import AddJobForm from '../../components/AddJobForm/AddJobForm';
import jobReelApiService from '../../services/jobreel-api-service';
import JobReelContext from '../../context/JobReelContext';
import './SavedJobsRoute.css';

class SavedJobsRoute extends React.Component {
  
  static contextType = JobReelContext

  componentWillMount = () => {
    jobReelApiService.getSavedJobs()
      .then(res => {
        this.context.setSavedJobs(res.jobs)
      })
  }

  render() {
    return (
      <div className="saved-jobs-page">
        <SideNav />
        <AddJobForm />
      </div>
    )
  }
}

export default SavedJobsRoute;