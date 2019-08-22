import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import Company from '../Company/Company';
import './CompanySummary.css';

class CompanySummary extends React.Component {

  static contextType = JobReelContext;

  handleClickDelete(companyId){
    jobReelApiService.deleteCompany(companyId)
    this.context.deleteCompany(companyId)
  }

  render(){
    let mappedCompanies;
    if(this.context.savedCompanies !== []){
      let companies = this.context.companies
      mappedCompanies = companies
      .map(company => <Company id={company.company_id} name={company.company_name} city={company.city} state={company.state} date={company.date_added} industry={company.industry} desc={company.description} website={company.website} contact={company.contact} user={company.user_id}/>)
    }

    return(
      <div className="saved-company-list">
        <div className='saved-company-controls'>
          <Button onClick={() => this.context.setManualCompanyAdd(true)} type="button">Add Company</Button>
        </div>
        
        {mappedCompanies}
      </div>
    )
  }
}

export default CompanySummary