import React from 'react';
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import SavedEvent from '../SavedEvent/SavedEvent';
import { Label, Input } from '../Form/Form';

class SavedEventsSummary extends React.Component {

  static contextType = JobReelContext;

  state = {
    filter: '',
    search: ''
  }

  handleStatusFilter = e => {
    this.setState({ filter: e.target.value })
  }

  handleChangeSearchTerm = e => {
    this.setState({ search: e.target.value })
  }

  renderEvents = () => {
    let search = this.state.search
    let filter = this.state.filter
    let events = Array.from(this.context.savedEvents)
    if(search !== ''){
      events = events.filter(event => event.event_name.toLowerCase().includes(search.toLowerCase()) || 
      event.host.toLowerCase().includes(search.toLowerCase()) || 
      event.city.toLowerCase().includes(search.toLowerCase()) || 
      event.description.toLowerCase().includes(search.toLowerCase())
    )}
    if(filter !== ''){
      events = events.filter(event => event.status === filter)
    }
    events = events.map(event => <SavedEvent key={event.event_id} id={event.event_id} name={event.event_name} host={event.host} city={event.city} state={event.state} address={event.address} date={event.date} url={event.url} desc={event.description} status={event.status} user={event.user_id}/>)
    
    return (
      <div>
        {events}
      </div>
    )
  }

  render(){
    return(
      <div className="saved-event-list">
        <h2>Saved Events</h2>
        <div className='savedEventFilterControls'>
          <Label id='savedEventFilterTitle'>Filter by Job Status:</Label>
          <select
            id='status-input'
            name='status'
            onChange={this.handleStatusFilter}
          >
            <option value="">N/A</option>
            <option value="Will Attend">Will Attend</option>
            <option value="Maybe">Maybe</option>
            <option value="Attended">Attended</option>
            <option value="Did Not Attend">Did Not Attend</option>
          </select>
          <Label id='savedEventFilterSearch'>Search:</Label>
          <Input
            type='text'
            name='saved-event-search'
            id='saved-event-search'
            value={this.state.search}
            onChange={this.handleChangeSearchTerm}
          />
        </div>
        <Button onClick={() => this.context.setManualEventAdd(true)} type="button">Add Event</Button>
        {this.renderEvents()}
      </div>
    )
  }
}

export default SavedEventsSummary