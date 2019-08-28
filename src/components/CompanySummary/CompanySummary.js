import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import { Label, Input } from '../Form/Form';
import Company from '../Company/Company';
import './CompanySummary.css';

class CompanySummary extends React.Component {

  static contextType = JobReelContext;

  state = {
    search: ''
  }

  handleChangeSearchTerm = e => {
    this.setState({ search: e.target.value })
  }

  renderCompanies = () => {
    let search = this.state.search
    let companies = Array.from(this.context.companies)
    if(search !== ''){
      companies = companies.filter(company => company.company_name.toLowerCase().includes(search.toLowerCase()) || 
      company.city.toLowerCase().includes(search.toLowerCase()) || 
      company.industry.toLowerCase().includes(search.toLowerCase()) || 
      company.description.toLowerCase().includes(search.toLowerCase()) ||
      company.contact.toLowerCase().includes(search.toLowerCase())
    )}
    companies = companies.map(company => <Company key={company.company_id} id={company.company_id} name={company.company_name} city={company.city} state={company.state} date={company.date_added} industry={company.industry} desc={company.description} website={company.website} contact={company.contact} user={company.user_id}/>)
    
    return (
      <div>
        {companies}
      </div>
    )
  }

  render(){
    return(
      <div className="saved-company-list">
        <div className='savedCompanyFilterControls'>
          <Label id='savedCompanyFilterSearch'>Search:</Label>
          <Input
            type='text'
            name='saved-company-search'
            id='saved-company-search'
            value={this.state.search}
            onChange={this.handleChangeSearchTerm}
          />
          <br/>
          <Button onClick={() => this.context.setManualCompanyAdd(true)} type="button">Add Company</Button>
        </div>
        
        {this.renderCompanies()}
      </div>
    )
  }
}

export default CompanySummary