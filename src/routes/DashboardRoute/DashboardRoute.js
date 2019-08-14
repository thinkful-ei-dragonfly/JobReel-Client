import React from 'react';
import './DashboardRoute.css';
import JobReelContext from '../../context/JobReelContext';
import NavBar from '../../components/NavBar/NavBar';
import JobsList from '../../components/JobsList/JobsList';

class DashboardRoute extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  state = { error: null };

  static contextType = JobReelContext;

  render() {
    return(
      <div className='dashboard-page'>
        <div className='title'>
          <h2>Dashboard</h2>
        </div>
        <NavBar />
        <JobsList/>
      </div>
    )
  }
}

export default DashboardRoute