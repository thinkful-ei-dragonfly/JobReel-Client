import React from 'react';
import { Input, Label } from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import './AddEventForm.css';

class AddEventForm extends React.Component {

  static contextType = JobReelContext

  state = {
    error: null
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.persist();
    this.setState({ error: null }); 
    const event_name = e.target.event.value;
    const host = e.target.host.value;
    const city = e.target.city.value;
    const state = e.target.state.value;
    const address = e.target.address.value;
    const date = e.target.date.value;
    const url = e.target.url.value;
    const description = e.target.desc.value;
    const status = e.target.status.value;
    const userInput = { user_id: this.context.user.id, event_name, host, city, state, address, date, url, description, status };
    jobReelApiService.submitEvent(userInput)
      .then(res => {
        e.target.event.value = '';
        e.target.host.value = '';
        e.target.city.value = '';
        e.target.state.value = '';
        e.target.address.value = '';
        e.target.date.value = '';
        e.target.url.value = '';
        e.target.desc.value = '';
        e.target.status.value = '';
        this.context.setSavedEvents([...this.context.savedEvents, res]);
        this.context.setManualEventAdd(false)
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
      <div className="AddEventForm">
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Label htmlFor='event-name-input'>
              Event
            </Label>
            <br/>
            <Input
              id='event-name-input'
              name='event'
            />
          </div>
          <div>
            <Label htmlFor='host-input'>
              Host
            </Label>
            <br/>
            <Input
              id='host-input'
              name='host'
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
            <Label htmlFor='address-input'>
              Address
            </Label>
            <br/>
            <Input
              id='address-input'
              name='address'
            />
          </div>
          <div>
            <Label htmlFor='date-input'>
              Date
            </Label>
            <br/>
            <Input
              type="date"
              id='date-input'
              name='date'
            />
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
              <option value="Will Attend">Will attend</option>
              <option value="Maybe">Maybe</option>
              <option value="Attended">Attended</option>
              <option value="Did Not Attend">Did Not Attend</option>
            </select>
          </div>
          <Button onClick={() => this.context.setManualEventAdd(false)} type="button">Back</Button>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default AddEventForm;