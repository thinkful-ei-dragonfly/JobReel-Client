import React, { Component } from 'react';
import config from '../../config'
import TokenService from '../../services/token-service'
import JobReelContext from '../../context/JobReelContext';
import EventBriteItem from '../EventBriteItem/EventBriteItem'

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
            uri={event.resource_uri}
            venue_id={event.venue_id}
            />
            )
        })
        return eventsList;
    }

    

   

    render() {
        return (
            <ul>
                {this.renderEvents()}
            </ul>
        );
    }
}