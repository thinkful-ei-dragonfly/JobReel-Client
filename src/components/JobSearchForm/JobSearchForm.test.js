import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PropTypes from 'prop-types'
import {BrowserRouter} from 'react-router-dom'
import JobSearchForm from './JobSearchForm'

class ContextProvider extends React.Component{
  static childContextTypes = {
    myContext: PropTypes.object,
  }

  getChildContext = () => ({
    myContext: {
      savedJobs: [1, 2, 3]
    }
  })

  render(){
    return this.props.children
  }
}

describe('Job Search Form smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><JobSearchForm /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('Job Search Form snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContextProvider><JobSearchForm /></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})