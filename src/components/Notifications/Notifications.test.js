import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Notifications from './Notifications'
import PropTypes from 'prop-types'

class ContextProvider extends React.Component{
  static childContextTypes = {
    myContext: PropTypes.object,
  }

  getChildContext = () => ({
    myContext: {
      contacts: [{
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
      }],
      savedJobs: [{
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
      }]
    }
  })

  render(){
    return this.props.children
  }
}

describe('Notifications smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Notifications />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('Notifications snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContextProvider><Notifications /></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})