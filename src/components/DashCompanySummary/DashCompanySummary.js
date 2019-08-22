import React from 'react';
import { Link } from 'react-router-dom';
import './DashCompanySummary.css';
import jobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';

class DashCompanySummary extends React.Component {

  static contextType = jobReelContext

  componentDidMount() {
    if (this.context.companies.length === 0) {
      jobReelApiService.getSavedCompanies()
        .then(res => {
          this.context.setCompanies(res);
        })
    }
  }

  renderCompanySummaries = () => {
    let companies = Array.from(this.context.companies);
    companies = companies.sort((a, b) => {
      return new Date(b.date_added) - new Date(a.date_added);
    });
    companies = companies.slice(0, 3).map(company => {
      return (
        <li key={company.company_id}>{company.company_name} - <a href={company.website}>{company.website}</a>- Contact: {company.contact}</li>
      )
    })
    return (
      <ul>
        {companies}
      </ul>
    )
  }
  
  render() {
    return (
      <>
        <div className="DashCompanySummary">
          <h4>{this.props.section}</h4>
        </div>
        <div className='options'>
            {this.renderCompanySummaries()}
        </div>
        <Link to="/companies">View all</Link>
      </>
    )
  }
}

export default DashCompanySummary;