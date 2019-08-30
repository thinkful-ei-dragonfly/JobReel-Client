import React, { Component } from 'react';
import JobReelContext from '../../context/JobReelContext';
import EventBriteItem from '../EventBriteItem/EventBriteItem'
import SideNav from '../SideNav/SideNav';

export default class EventBriteList extends Component {
    state = {
        events: null,
        savedEventUrls: {},
    }

    static contextType = JobReelContext

    componentDidMount() {
        if (Object.keys(this.context.eventsSearch).length === 0) {
            this.props.history.push(`/eventbritesearch`)
          }
        const savedEventUrls = this.context.savedEvents.map(event => event.url);
        let savedEventUrlsObj = {};
        savedEventUrls.forEach(url => {
        savedEventUrlsObj[url] = url;
        });
        this.setState({ savedEventUrls: savedEventUrlsObj });
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
            key={i}
            savedEventUrls={this.state.savedEventUrls}
            />
            )
        })
        return eventsList;
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
            <>
            <SideNav/>
            <ul>
                {this.renderEvents()}
            </ul>
            </>
        );
    }
}