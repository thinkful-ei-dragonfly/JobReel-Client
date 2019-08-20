import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import AddCompanyForm from '../../components/AddCompanyForm/AddCompanyForm';
import jobReelApiService from '../../services/jobreel-api-service';
import JobReelContext from '../../context/JobReelContext';
import './SavedCompaniesRoute.css';

class SavedEventsRoute extends React.Component {
  
  static contextType = JobReelContext

  componentDidMount = () => {
    if (this.context.companies.length === 0)
    jobReelApiService.getSavedCompanies()
      .then(res => {
        this.context.setCompanies(res);
      })
  }

  render() {
    return (
      <div className="SavedCompaniesRoute">
        <SideNav />
        <AddCompanyForm />
      </div>
    )
  }
}

export default SavedEventsRoute;