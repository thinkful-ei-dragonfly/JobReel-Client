import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import DashJobSummary from './DashJobSummary'

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

describe('DashJobSummary smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><DashJobSummary /></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})

describe('DashJobSummary snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContextProvider><DashJobSummary /></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})