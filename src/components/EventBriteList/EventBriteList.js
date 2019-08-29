import React, { Component } from 'react';
import JobReelContext from '../../context/JobReelContext';
import EventBriteItem from '../EventBriteItem/EventBriteItem'
import SideNav from '../SideNav/SideNav';

export default class EventBriteList extends Component {
    state = {
        events: null
    }

    static contextType = JobReelContext

    componentDidMount() {
        
    }

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