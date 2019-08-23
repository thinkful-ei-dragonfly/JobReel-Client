import React from 'react';
import Button from '../../components/Button/Button';
import { Input, Label } from '../../components/Form/Form';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import { format } from 'date-fns'

class SavedEvent extends React.Component {

  static contextType = JobReelContext;

  state = {
    error: null,
    editing: false,
    event_name: this.props.name || '',
    host: this.props.host || '',
    city: this.props.city || '',
    state: this.props.state || '',
    address: this.props.address || '',
    date: this.props.date || '',
    url: this.props.url || '',
    description: this.props.desc || '',
    status: this.props.status || '',
  }

  handleChangeDate = e => {
    this.setState({ date: e.target.value })
  };

  handleChangeDesc = e => {
    this.setState({ description: e.target.value })
  };

  handleChangeEventName = e => {
    this.setState({ event_name: e.target.value })
  };

  handleChangeCity = e => {
    this.setState({ city: e.target.value })
  };

  handleChangeState = e => {
    this.setState({ state: e.target.value })
  };

  handleChangeUrl = e => {
    this.setState({ url: e.target.value })
  };

  handleChangeAddress = e => {
    this.setState({ address: e.target.value })
  };

  handleChangeHost = e => {
    this.setState({ host: e.target.value })
  };

  handleChangeStatus = e => {
    this.setState({ status: e.target.value })
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

  handleClickDelete(eventId){
    jobReelApiService.deleteEvent(eventId)
    this.context.deleteEvent(eventId)
  }

  handleToggle = () => {
    this.setState({ editing: !this.state.editing })
  }

  convertDate = (date) => {
    let offset = new Date(date)
    offset.setMinutes(offset.getMinutes() + offset.getTimezoneOffset())
    return format(offset, 'YYYY-MM-DD')
  }

  validateUrl(url) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(url)
  }

  handleError = (error) => {
    this.setState({ error })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { event_name, host, city, state, address, date, url, description, status } = this.state
    if (!this.validateUrl(url)) {
      this.handleError('Please provide a valid URL starting with http:// or https://')
    } else {
      const editedEvent = { 
        event_name, 
        host, 
        city, 
        state, 
        address,
        url, 
        status, 
        description,
        event_id: this.props.id,
        date,
        user_id: this.props.user
       }
      jobReelApiService.editEvent(editedEvent, this.props.id)
      this.context.updateEvent(editedEvent)
      this.handleToggle()
      this.handleError(null)
    }
  }

  render(){
    const { event_name, host, city, state, address, date, url, description, status, error, editing } = this.state
    let eventStatus;
    if(status === 'Maybe' || status === 'Will Attend'){
      eventStatus = <div className="job-status yellow">{status}</div>
    } else if(status === 'Attended') {
      eventStatus = <div className="job-status green">{status}</div>
    } else {
    eventStatus = <div className="job-status red">{status}</div> 
    }
    let event = 
      <div className="event-box">
        {eventStatus}
        <h3>{event_name}</h3>
        <h4>Hosted By: {host} on {this.convertDate(date)}</h4>
        <p>{address}</p>
        <p>{city}, {state}</p>
        <p><a href={url}>{url}</a></p>
        <p>{description}</p>
        <Button onClick={() => this.handleClickDelete(this.props.id)} type="button">Delete</Button>
        <Button onClick={this.handleToggle} type="button">Edit</Button>
      </div>
    let editEvent = 
      <form
      className='edit-event-form'
      onSubmit={this.handleSubmit}>
        <div>
          <div className="error-message">{error}</div>
          <Label htmlFor='name'>Event Name</Label>
          <Input
            type='text'
            name='name'
            id='name'
            placeholder={event_name}
            required
            value={event_name}
            onChange={this.handleChangeEventName}
          />
        </div>
        <div>
          <Label htmlFor='host'>Host</Label>
          <Input
            type='text'
            name='host'
            id='host'
            placeholder={host}
            required
            value={host}
            onChange={this.handleChangeHost}
          />
        </div>
        <div>
          <Label htmlFor='city'>City</Label>
          <Input
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
          <Label htmlFor='state'>State</Label>
          <select onChange={this.handleChangeState} name="state" id="state-Input" value={state}>
              {this.renderStateOptions()}
            </select>
        </div>
        <div>
          <Label htmlFor='address'>Address</Label>
          <Input
            type='text'
            name='address'
            id='address'
            placeholder={address}
            required
            value={address}
            onChange={this.handleChangeAddress}
          />
        </div>
        <div>
          <Label htmlFor='date'>Date</Label>
          <Input
            type='date'
            name='date'
            id='date'
            placeholder={this.convertDate(date)}
            required
            value={this.convertDate(date)}
            onChange={this.handleChangeDate}
          />
        </div>
        <div>
          <Label htmlFor='url'>URL</Label>
          <Input
            type='text'
            name='url'
            id='url'
            placeholder={url}
            required
            value={url}
            onChange={this.handleChangeUrl}
          />
        </div>
        <div>
          <Label htmlFor='description'>Description</Label>
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
          <Label htmlFor='status'>Status</Label>
          <select
              id='status-Input'
              name='status'
              onChange={this.handleChangeStatus}
              value={status}
            >
              <option value="Will Attend">Will Attend</option>
              <option value="Maybe">Maybe</option>
              <option value="Attended">Attended</option>
              <option value="Did Not Attend">Did Not Attend</option>
            </select>
        </div>
        <Button type="submit">Save Changes</Button>
        <Button type="button" onClick={this.handleToggle}>Back</Button>
      </form>
      let display;
      (editing === false) ? display = event : display = editEvent

    return(
      <div className="saved-event">
        {display}
      </div>
    )
  }
}

export default SavedEvent