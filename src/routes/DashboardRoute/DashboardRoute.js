import React from 'react';
import './DashboardRoute.css';
import JobReelContext from '../../context/JobReelContext';
import SideNav from '../../components/SideNav/SideNav';
import SummaryContainer from '../../components/SummaryContainer/SummaryContainer';
import summary from './summary.svg';
import jobReelApiService from '../../services/jobreel-api-service';

class DashboardRoute extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  state = { error: null };

  static contextType = JobReelContext;

  componentWillMount = () => {
    jobReelApiService.getJobs()
      .then(res => {
        this.context.setJobs(res.jobs)
      })
  }

  render() {
    return(
      <div className='dashboard-page'>
        <div className='title'>
          <h2>Dashboard</h2>
        </div>
        <div className='dashboard-image'>
          <img src={summary} alt='summary-background'/>
        </div>
        <SideNav />
        <SummaryContainer />
      </div>
    )
  }
}

export default DashboardRoute