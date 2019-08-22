import React from 'react';
import { Input, Label } from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import './AddCompany.css';

class AddCompanyForm extends React.Component {

  static contextType = JobReelContext

  state = {
    error: null
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.persist();
    this.setState({ error: null });
    const company_name = e.target.company.value;
    const city = e.target.city.value;
    const state = e.target.state.value;
    const industry = e.target.industry.value;
    const website = e.target.website.value;
    const description = e.target.desc.value;
    const contact = e.target.contact.value;
    const userInput = { user_id: this.context.user.id, company_name, city, state, industry, website, description, contact };
    jobReelApiService.submitCompany(userInput)
      .then(res => {
        e.target.company.value = '';
        e.target.city.value = '';
        e.target.state.value = '';
        e.target.industry.value = '';
        e.target.website.value = '';
        e.target.desc.value = '';
        e.target.contact.value = '';
        this.context.setCompanies([...this.context.companies, res]);
        this.context.setManualCompanyAdd(false)
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

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

  render() {
    const { error } = this.state;
    return (
      <div className="AddCompanyForm">
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Label htmlFor='company-name-input'>
              Company
            </Label>
            <br/>
            <Input
              id='company-name-input'
              name='company'
            />
          </div>
          <div>
            <Label htmlFor='city-input'>
              City
            </Label>
            <br/>
            <Input
              id='city-input'
              name='city'
            />
          </div>
          <div>
            <Label htmlFor='state-input'>
              State
            </Label>
            <br/>
            <select name="state" id="state-input">
              {this.renderStateOptions()}
            </select>
          </div>
          <div>
            <Label htmlFor='industry-input'>
              Industry
            </Label>
            <br/>
            <Input
              id='industry-input'
              name='industry'
            />
          </div>
          <div>
            <Label htmlFor='website-input'>
              Website
            </Label>
            <br/>
            <Input
              id='website-input'
              name='website'
            />
          </div>
          <div>
            <Label htmlFor='desc-input'>
              Description
            </Label>
            <br/>
            <Input
              id='desc-input'
              name='desc'
            />
          </div>
          <div>
            <Label htmlFor='contact-input'>
              Contact
            </Label>
            <br/>
            <Input
              id='contact-input'
              name='contact'
            />
          </div>
          <Button onClick={() => this.context.setManualCompanyAdd(false)} type="button">Back</Button>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default AddCompanyForm;