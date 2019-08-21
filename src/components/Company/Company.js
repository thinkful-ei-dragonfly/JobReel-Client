import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import { format } from 'date-fns'

class Company extends React.Component {

  static contextType = JobReelContext;

  state = {
    editing: false,
    company_name: this.props.name || '',
    city: this.props.city || '',
    state: this.props.state || '',
    industry: this.props.industry || '',
    website: this.props.website || '',
    description: this.props.desc || '',
    contact: this.props.contact || '',
  }

  handleChangeDesc = e => {
    this.setState({ description: e.target.value })
  };

  handleChangeCompanyName = e => {
    this.setState({ company_name: e.target.value })
  };

  handleChangeCity = e => {
    this.setState({ city: e.target.value })
  };

  handleChangeState = e => {
    this.setState({ state: e.target.value })
  };

  handleChangeWebsite = e => {
    this.setState({ website: e.target.value })
  };

  handleChangeContact = e => {
    this.setState({ contact: e.target.value })
  };

  handleChangeIndustry = e => {
    this.setState({ industry: e.target.value })
  };

  renderStateOptions = () => {
    const states = [
      ['Arizona', 'AZ'],
      ['Alabama', 'AL'],
      ['Alaska', 'AK'],
      ['Arkansas', 'AR'],
      ['California', 'CA'],
      ['Colorado', 'CO'],
      ['Connecticut', 'CT'],
      ['Delaware', 'DE'],
      ['Florida', 'FL'],
      ['Georgia', 'GA'],
      ['Hawaii', 'HI'],
      ['Idaho', 'ID'],
      ['Illinois', 'IL'],
      ['Indiana', 'IN'],
      ['Iowa', 'IA'],
      ['Kansas', 'KS'],
      ['Kentucky', 'KY'],
      ['Louisiana', 'LA'],
      ['Maine', 'ME'],
      ['Maryland', 'MD'],
      ['Massachusetts', 'MA'],
      ['Michigan', 'MI'],
      ['Minnesota', 'MN'],
      ['Mississippi', 'MS'],
      ['Missouri', 'MO'],
      ['Montana', 'MT'],
      ['Nebraska', 'NE'],
      ['Nevada', 'NV'],
      ['New Hampshire', 'NH'],
      ['New Jersey', 'NJ'],
      ['New Mexico', 'NM'],
      ['New York', 'NY'],
      ['North Carolina', 'NC'],
      ['North Dakota', 'ND'],
      ['Ohio', 'OH'],
      ['Oklahoma', 'OK'],
      ['Oregon', 'OR'],
      ['Pennsylvania', 'PA'],
      ['Rhode Island', 'RI'],
      ['South Carolina', 'SC'],
      ['South Dakota', 'SD'],
      ['Tennessee', 'TN'],
      ['Texas', 'TX'],
      ['Utah', 'UT'],
      ['Vermont', 'VT'],
      ['Virginia', 'VA'],
      ['Washington', 'WA'],
      ['West Virginia', 'WV'],
      ['Wisconsin', 'WI'],
      ['Wyoming', 'WY'],
    ];
    return states.map(state => {
      return <option key={state[1]} value={state[1]}>{state[0]}</option>
    })
  }

  handleClickDelete(companyId){
    jobReelApiService.deleteCompany(companyId)
    this.context.deleteCompany(companyId)
  }

  handleToggle = () => {
    this.setState({ editing: !this.state.editing })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { company_name, city, state, website, description, industry, contact } = this.state
    const editedCompany = { 
      company_name,
      city, 
      state, 
      website, 
      industry,
      contact,
      description,
      company_id: this.props.id,
      date_added: this.props.date,
      user_id: this.props.user
     }
    await jobReelApiService.editCompany(editedCompany, this.props.id)
    await this.context.updateCompany(editedCompany)
    await this.handleToggle()
  }

  render(){
    const { company_name, city, state, website, description, industry, contact } = this.state
    let event = 
      <div className="company-box">
        <h3>{company_name}</h3>
        <h4>Added on {format(this.props.date, 'YYYY-MM-DD')}</h4>
        <p>Industry: {industry}</p>
        <p>{city}, {state}</p>
        <p><a href={website}>{website}</a></p>
        <p>{description}</p>
        <p>Contact(s): {contact}</p>
        <Button onClick={() => this.handleClickDelete(this.props.id)} type="button">Delete</Button>
        <Button onClick={this.handleToggle} type="button">Edit</Button>
      </div>
    let editCompany = 
      <form
      className='edit-company-form'
      onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='name'>Company Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder={company_name}
            required
            value={company_name}
            onChange={this.handleChangeCompanyName}
          />
        </div>
        <div>
          <label htmlFor='industry'>Industry</label>
          <input
            type='text'
            name='industry'
            id='industry'
            placeholder={industry}
            value={industry}
            onChange={this.handleChangeIndustry}
          />
        </div>
        <div>
          <label htmlFor='city'>City</label>
          <input
            type='text'
            name='city'
            id='city'
            placeholder={city}
            required
            value={city}
            onChange={this.handleChangeCity}
          />
        </div>
        <div>
          <label htmlFor='state'>State</label>
          <select onChange={this.handleChangeState} name="state" id="state-input" value={state}>
              {this.renderStateOptions()}
            </select>
        </div>
        <div>
          <label htmlFor='website'>Website</label>
          <input
            type='text'
            name='website'
            id='website'
            placeholder={website}
            value={website}
            onChange={this.handleChangeWebsite}
          />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea 
            name='description'
            id='description'
            placeholder={description}
            rows='3'
            value={description}
            onChange={this.handleChangeDesc}
          />
        </div>
        <div>
          <label htmlFor='contact'>Contact(s)</label>
          <input
            type='text'
            name='contact'
            id='contact'
            placeholder={contact}
            value={contact}
            onChange={this.handleChangeContact}
          />
        </div>
        <Button type="submit">Save Changes</Button>
        <Button type="button" onClick={this.handleToggle}>Back</Button>
      </form>
      let display;
      (this.state.editing === false) ? display = event : display = editCompany

    return(
      <div className="saved-event">
        {display}
      </div>
    )
  }
}

export default Company