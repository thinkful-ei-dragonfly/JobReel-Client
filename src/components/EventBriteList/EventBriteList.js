import React, { Component } from 'react';
import JobReelContext from '../../context/JobReelContext';
import EventBriteItem from '../EventBriteItem/EventBriteItem'
import SideNav from '../SideNav/SideNav';
import TopNav from '../../components/TopNav/TopNav'
import MediaQuery from 'react-responsive';
import './EventBriteList.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class EventBriteList extends Component {

    static contextType = JobReelContext

    state = {
        events: null,
        savedEventUrls: {},
        noResults: false,
    }

    componentDidMount() {
        if (Object.keys(this.context.eventsSearch).length === 0) {
            this.props.history.push(`/eventbritesearch`)
          }
        // const savedEventUrls = this.context.savedEvents.map(event => event.url);
        // let savedEventUrlsObj = {};
        // savedEventUrls.forEach(url => {
        // savedEventUrlsObj[url] = url;
        // });
        // this.setState({ savedEventUrls: savedEventUrlsObj });
    } 

  renderNoResultsMessage() {
    return (
        <h2>
            Sorry no results were found from that search.
      </h2>
    )
  }

  renderEvents() {
    const {events = []} = this.context
    const eventsList = events.map((event, i) => {
      return (
      <EventBriteItem 
      event={event} 
      name={event.name.text} 
      description={event.description.text} 
      url={event.url}
      venue_id={event.venue_id}
      date = {event.end.local}
      savedEventUrls={this.state.savedEventUrls}
      key={i}
      />)
    })
    return (
        <div className='results'>
            {eventsList}
        </div>
    )
  }

  //eventbrite continuation tokens currently not working
  // handleNextPage = () => {
  //     const page = this.context.eventNextPage
  //     const search =  this.context.eventsSearch
  //     JobReelService.getEventBriteEventsPaginated(search, page)
  //         .then(data => {
  //             if (data.pagination.page_count - data.pagination.page_number > 0) {
  //                 this.context.setEventNextPage(data.pagination.page_number+1)
  //             }
  //             this.context.setEventPageNumber(data.pagination.page_number)
  //             this.context.setEvents(data.events)
  //             console.log(data)
  //             console.log(this.context)
  //             this.props.history.push(`/eventbriteevents`)
  //         })
  // }

   

  render() {
    return (
      <div className='events-search-results'>
        <div className='title'>
            <h2>Events Results</h2>
        </div>
        <MediaQuery minDeviceWidth={961}>
          <SideNav/>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={960}>
          <TopNav/>
        </MediaQuery>
        <div className='results-container'>
          <Link  to={`/`} alt="goBack">
            <FontAwesomeIcon id='job-go-back' icon='times-circle' size='2x'/>
          </Link>
            {this.renderEvents()}
            {this.state.noResults && this.renderNoResultsMessage()}
        </div>
      </div>
    );
  }
}