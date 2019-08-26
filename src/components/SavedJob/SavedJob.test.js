import React from 'react'
import ReactDOM from 'react-dom'
import SavedJob from './SavedJob'
import PropTypes from 'prop-types'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

class ContextProvider extends React.Component{
  static childContextTypes = {
    myContext: PropTypes.object,
  }
  
  getChildContext = () => ({
    myContext: {
      updateJob: () => { },
      deleteJob: () => { },
    }
  })
  
  render(){
    return this.props.children
  }
  }

describe('SavedJob smoke test', () => {
  let props = {
    title: 'title', 
    company: 'company', 
    city: 'city', 
    state: 'MD', 
    url: 'http://website.com', 
    status: 'Interested', 
    desc: 'description',
    id: 1,
    date: '2019-08-26T15:03:05.646Z',
    user: 1
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SavedJob {...props}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('SavedJob snapshot test', () => {
  let props = {
    title: 'title', 
    company: 'company', 
    city: 'city', 
    state: 'MD', 
    url: 'http://website.com', 
    status: 'Interested', 
    desc: 'description',
    id: 1,
    date: '2019-08-26T15:03:05.646Z',
    user: 1
  }

  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContextProvider><SavedJob {...props}/></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})