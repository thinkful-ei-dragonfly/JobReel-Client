import React from 'react';
import { Input, Label } from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';

import TokenService from '../../services/token-service';

class AddJobForm extends React.Component {
  static contextType = JobReelContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const job_title = e.target['job-title'].value;
    const company = e.target.company.value;
    const city = e.target.city.value;
    const state = e.target.state.value;
    const url = e.target.url.value;
    const description = e.target.desc.value;
    const status = e.target.status.value;
    const userInput = { userID: this.context.user.id, job_title, company, city, state, url, description, status };
    const body = JSON.stringify(userInput);
    console.log(userInput);
    fetch('http://localhost:8000/api/savedjobs', {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: body
    })
      .then(res => {
        console.log('Saving job');
        console.log(res.json());
      })
  }

  renderStateOptions = () => {
    console.log('RENDERING STATES');
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

  componentDidMount = () => {
    fetch('http://localhost:8000/api/savedjobs', {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => {
        // (!res.ok)
        //   ? res.json().then(e => Promise.reject(e))
        //   : res.json()
        console.log(`Auth Token: ${TokenService.getAuthToken()}`)
        console.log('Fetching jobs')
        console.log(res.json())
      }
    )
  }

  render() {
    console.log(this.context.user);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
              <option value="interested">Interested</option>
              <option value="applied">Applied</option>
            </select>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default AddJobForm;