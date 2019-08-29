import React, { Component } from 'react';
import JobReelContext from '../../context/JobReelContext';
import EventBriteItem from '../EventBriteItem/EventBriteItem'
import SideNav from '../SideNav/SideNav';

export default class EventBriteList extends Component {
    state = {
        events: null,
    }

    static contextType = JobReelContext

    renderEvents() {
        const {events = []} = this.context
        const eventsList = events.map(event => {
            return (
            <EventBriteItem 
            event={event} 
            name={event.name.text} 
            description={event.description.text} 
            url={event.url}
            venue_id={event.venue_id}
            date = {event.end.local}
            />
            )
        })
        return eventsList;
    }

    //eventbrite continuation tokens currently not working
    // handleNextPage = () => {
    //     const page = this.context.eventNextPage
    //     const search =  this.context.professionalsSearch
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