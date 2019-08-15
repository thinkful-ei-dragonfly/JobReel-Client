import React from 'react';
import './DashboardRoute.css';
import JobReelContext from '../../context/JobReelContext';
import SideNav from '../../components/SideNav/SideNav';
import SummaryContainer from '../../components/SummaryContainer/SummaryContainer';

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
        <SideNav />
        <SummaryContainer />
      </div>
    )
  }
}

export default DashboardRoute