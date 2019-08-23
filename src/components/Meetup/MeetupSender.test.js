import React from 'react'
import ReactDOM from 'react-dom'
import SendToMeetup from './MeetupSender'

describe('Send to Meetup smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SendToMeetup />, div)
    ReactDOM.unmountComponentAtNode(div)
  }) 
})