import React from 'react';
import { Link } from 'react-router-dom';
import './DashEventSummary.css';
import jobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';

class DashEventSummary extends React.Component {

  static contextType = jobReelContext

  componentDidMount() {
    if (this.context.savedEvents.length === 0) {
      jobReelApiService.getSavedEvents()
        .then(res => {
          this.context.setSavedEvents(res);
        })
    }
  }

  renderEventSummaries = () => {
    let events = Array.from(this.context.savedEvents);
    events = events.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    events = events.slice(0, 3).map(event => {
      const date = new Date(event.date.slice(0, -1)).toDateString()
      return (
        <li key={event.event_id}>{event.event_name}, {date} - <a href={event.url}>{event.url}</a></li>
        )
      })
      return (
        <ul>
          {events}
        </ul>
    )
  }
  
  render() {
    return (
      <>
        <div className="DashEventSummary">
          <h4>{this.props.section}</h4>
        </div>
        <div className='options'>
            {this.renderEventSummaries()}
        </div>
        <Link to="/saved-events">View all</Link>
      </>
    )
  }
}

export default DashEventSummary;