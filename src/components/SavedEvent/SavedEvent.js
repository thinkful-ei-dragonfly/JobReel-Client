import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import { format } from 'date-fns'

class SavedEvent extends React.Component {

  static contextType = JobReelContext;

  state = {
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

  handleSubmit = async e => {
    e.preventDefault()
    const { event_name, host, city, state, address, date, url, description, status } = this.state
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
    await jobReelApiService.editEvent(editedEvent, this.props.id)
    await this.context.updateEvent(editedEvent)
    await this.handleToggle()
  }

  render(){
    const { event_name, host, city, state, address, date, url, description, status } = this.state
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
          <label htmlFor='name'>Event Name</label>
          <input
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
          <label htmlFor='host'>Host</label>
          <input
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
          <label htmlFor='address'>Address</label>
          <input
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
          <label htmlFor='date'>Date</label>
          <input
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
          <label htmlFor='url'>URL</label>
          <input
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
          <label htmlFor='status'>Status</label>
          <select
              id='status-input'
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
      (this.state.editing === false) ? display = event : display = editEvent

    return(
      <div className="saved-event">
        {display}
      </div>
    )
  }
}

export default SavedEvent