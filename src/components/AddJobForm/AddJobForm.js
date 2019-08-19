import React from 'react';
import { Input, Label } from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';

class AddJobForm extends React.Component {

  static contextType = JobReelContext;

  state = {
    error: null
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.persist();
    this.setState({ error: null });
    const job_title = e.target['job-title'].value;
    const company = e.target.company.value;
    const city = e.target.city.value;
    const state = e.target.state.value;
    const url = e.target.url.value;
    const description = e.target.desc.value;
    const status = e.target.status.value;
    console.log(status)
    const userInput = { userID: this.context.user.id, job_title, company, city, state, url, description, status };
    jobReelApiService.submitJob(userInput)
      .then(res => {
        console.log(res)
        e.target['job-title'].value = '';
        e.target.company.value = '';
        e.target.city.value = '';
        e.target.state.value = '';
        e.target.url.value = '';
        e.target.desc.value = '';
        e.target.status.value = '';
        this.context.setSavedJobs([...this.context.savedJobs, res]);
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
      this.context.setManualJobAdd(false)
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div role='alert'>
            {error && <p>{error}</p>}
          </div>
          <div>
            <Label htmlFor='job-title-input'>
              Job Title
            </Label>
            <br/>
            <Input
              ref={this.firstInput}
              id='job-title-input'
              name='job-title'
            />
          </div>
          <div>
            <Label htmlFor='company-input'>
              Company
            </Label>
            <br/>
            <Input
              id='company-input'
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
            <Label htmlFor='url-input'>
              URL
            </Label>
            <br/>
            <Input
              id='url-input'
              name='url'
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
            <Label htmlFor='status-input'>
              Status
            </Label>
            <br/>
            <select
              id='status-input'
              name='status'
            >
              <option value="Interested">Interested</option>
              <option value="Applied">Applied</option>
            </select>
          </div>
          <Button onClick={() => this.context.setManualJobAdd(false)} type="button">Back</Button>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default AddJobForm;