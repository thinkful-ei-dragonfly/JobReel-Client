import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import AddJobForm from '../../components/AddJobForm/AddJobForm';

class SavedJobsRoute extends React.Component {
  render() {
    return (
      <div className="SavedJobsRoute">
        <SideNav />
        <AddJobForm />
      </div>
    )
  }
}

export default SavedJobsRoute;