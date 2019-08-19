import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
// import jobReelApiService from '../../services/jobreel-api-service';
import { format } from 'date-fns'

class SavedEvent extends React.Component {

  static contextType = JobReelContext;

  state = {
    event_name: this.props.event_name || '',
    host: this.props.host || '',
    city: this.props.city || '',
    state: this.props.state || '',
    address: this.props.address || '',
    date: this.props.date || '',
    url: this.props.url || '',
    description: this.props.desc || '',
    status: this.props.status || '',
  }

  render(){
    const { event_name, host, city, state, address, date, url, description, status } = this.state
    let eventStatus;
    (status === 'Maybe')
      ? eventStatus = <div className="job-status yellow">{status}</div>
      : eventStatus = <div className="job-status green">{status}</div> 
    let event = 
      <div className="event-box">
        {eventStatus}
        <h3>{event_name}</h3>
        <h4>Hosted By: {host} on {format(date, 'Do MMM YYYY')}</h4>
        <p>{address}</p>
        <p>{city}, {state}</p>
        <p><a href={url}>{url}</a></p>
        <p>{description}</p>
        <Button onClick={() => this.handleClickDelete(this.props.id)} type="button">Delete</Button>
        <Button onClick={this.handleToggle} type="button">Edit</Button>
      </div>

    return(
      <div className="saved-event">
        {event}
      </div>
    )
  }
}

export default SavedEvent