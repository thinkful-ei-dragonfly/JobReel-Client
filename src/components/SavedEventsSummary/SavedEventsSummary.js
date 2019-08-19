import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import SavedEvent from '../SavedEvent/SavedEvent';

class SavedEventsSummary extends React.Component {

  static contextType = JobReelContext;

  state = {
    filter: ''
  }

  handleClickDelete(eventId){
    jobReelApiService.deleteEvent(eventId)
    this.context.deleteEvent(eventId)
  }

  handleStatusFilter = e => {
    this.setState({ filter: e.target.value })
  }

  render(){
    let mappedEvents;
    if (this.context.savedEvents !== [] && this.state.filter !== null){
      let events = this.context.savedEvents
      mappedEvents = events
      .filter(e => e.status === this.state.filter)
      .map(event => <SavedEvent id={event.event_id} name={event.event_name} host={event.host} city={event.city} state={event.state} address={event.address} date={event.date} url={event.url} desc={event.description} status={event.status} user={event.user_id}/>)
    }
    if(this.context.savedEvents !== [] && (this.state.filter === '')){
      let events = this.context.savedEvents
      mappedEvents = events
      .map(event => <SavedEvent id={event.event_id} name={event.event_name} host={event.host} city={event.city} state={event.state} address={event.address} date={event.date} url={event.url} desc={event.description} status={event.status} user={event.user_id}/>)
    }

    return(
      <div className="saved-event-list">
        <h2>Saved Events</h2>
        <h3>Events</h3>
        <label>Filter by Event Status:</label>
        <select
              id='status-input'
              name='status'
              onChange={this.handleStatusFilter}
            >
              <option value="">N/A</option>
              <option value="Will Attend">Will Attend</option>
              <option value="Maybe">Maybe</option>
            </select>
        <Button onClick={() => this.context.setManualEventAdd(true)} type="button">Add Event</Button>
        {mappedEvents}
      </div>
    )
  }
}

export default SavedEventsSummary