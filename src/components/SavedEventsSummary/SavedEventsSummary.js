import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import SavedEvent from '../SavedEvent/SavedEvent';
import './SavedEventsSummary.css';

class SavedEventsSummary extends React.Component {

  static contextType = JobReelContext;

  handleClickDelete(eventId){
    jobReelApiService.deleteEvent(eventId)
    this.context.deleteEvent(eventId)
  }

  render(){
    let mappedEvents;
    if(this.context.savedEvents !== []){
      let events = this.context.savedEvents
      mappedEvents = events
      .map(event => <SavedEvent key={event.event_id} id={event.event_id} name={event.event_name} host={event.host} city={event.city} state={event.state} address={event.address} date={event.date} url={event.url} desc={event.description} status={event.status} user={event.user_id}/>)
    }

    return(
      <div className="saved-event-list">
        <div className='saved-event-controls'>
        <Button onClick={() => this.context.setManualEventAdd(true)} type="button">Add Event</Button>
        </div>
        
        {mappedEvents}
      </div>
    )
  }
}

export default SavedEventsSummary