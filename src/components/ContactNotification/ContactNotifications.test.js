import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ContactNotification from './ContactNotification'

const props = {
  contact_id: 1,
  contact_name: 'Contact 1',
  job_title: 'Engineer',
  company: 'Company1',
  email: 'email@email.com',
  linkedin: 'http://www.linkedin.com/person1',
  comments: 'Contact 1 comments',
  date_added: '2019-07-03T19:26:38.918Z',
  connected: false,
  user_id: 1,
  date_connected: '2019-08-03T19:26:38.918Z',
  notification: true
  }

describe('ContactNotification smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ContactNotification {...props}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('ContactNotification snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContactNotification {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})