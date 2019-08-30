import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import AddCompanyForm from '../../components/AddCompanyForm/AddCompanyForm';
import jobReelApiService from '../../services/jobreel-api-service';
import JobReelContext from '../../context/JobReelContext';
import CompanySummary from '../../components/CompanySummary/CompanySummary';
import MediaQuery from 'react-responsive';
import savedCompBack from '../../assests/savedCompBack.svg'
import TopNav from '../../components/TopNav/TopNav'
import './SavedCompaniesRoute.css';

class SavedCompaniesRoute extends React.Component {
  
  static contextType = JobReelContext

  componentDidMount = () => {
    if (this.context.companies.length === 0)
    jobReelApiService.getSavedCompanies()
      .then(res => {
        this.context.setCompanies(res);
      })
  }

  render() {
    let display;
    (this.context.manualCompanyAdd === false) ? display = <CompanySummary /> : display = <AddCompanyForm /> 
    return (
      <div className="SavedCompaniesRoute">
        <div className='title'>
          <h2>Saved Companies</h2>
        </div>
        <div className='savedCompBack'>
          <img src={savedCompBack} alt='saved-company-bakcground'/>
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

export default SavedCompaniesRoute;