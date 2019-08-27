import React from 'react'
import ReactDOM from 'react-dom'
import SavedEvent from './SavedEvent'
import PropTypes from 'prop-types'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

class ContextProvider extends React.Component{
  static childContextTypes = {
    myContext: PropTypes.object,
  }
  
  getChildContext = () => ({
    myContext: {
      updateEvent: () => { },
      deleteEvent: () => { },
    }
  })
  
  render(){
    return this.props.children
  }
  }

describe('SavedEvent smoke test', () => {
  let props = {
    name: 'name',
    host: 'host',
    city: 'city',
    state: 'MD',
    address: '111 St',
    url: 'http://website.com',
    status: 'Will Attend',
    desc: 'description',
    id: 1,
    date: '2019-08-26T15:03:05.646Z',
    user: 1
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SavedEvent {...props}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('SavedEvent snapshot test', () => {
  let props = {
    name: 'name',
    host: 'host',
    city: 'city',
    state: 'MD',
    address: '111 St',
    url: 'http://website.com',
    status: 'Will Attend',
    desc: 'description',
    id: 1,
    date: '2019-08-26T15:03:05.646Z',
    user: 1
  }

  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContextProvider><SavedEvent {...props}/></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})