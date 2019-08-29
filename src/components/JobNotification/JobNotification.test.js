import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import JobNotification from './JobNotification'

const props = {
  job_id: 2,
  user_id: 1,
  job_title: 'UI Designer',
  company: 'Company B',
  city: 'Austin',
  state: 'TX',
  date_added: '2019-08-14T17:18:19.306Z',
  url: 'http://www.google.com',
  description: 'UI job',
  status: 'Interested',
  date_applied: '2019-08-16T17:18:19.306Z',
  notification: true
  }

describe('JobNotification smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<JobNotification {...props}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('JobNotification snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<JobNotification {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})