import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import AddCompanyForm from '../../components/AddCompanyForm/AddCompanyForm';
import jobReelApiService from '../../services/jobreel-api-service';
import JobReelContext from '../../context/JobReelContext';
import CompanySummary from '../../components/CompanySummary/CompanySummary';
import './SavedCompaniesRoute.css';

class SavedCompaniesRoute extends React.Component {
  
  static contextType = JobReelContext

  componentDidMount = () => {
    jobReelApiService.getSavedCompanies()
      .then(res => {
        console.log(res)
        this.context.setCompanies(res);
      })
  }

  render() {
    let display;
    (this.context.manualCompanyAdd === false) ? display = <CompanySummary /> : display = <AddCompanyForm /> 
    return (
      <div className="SavedCompaniesRoute">
        <SideNav />
        {display}
      </div>
    )
  }
}

export default SavedCompaniesRoute;