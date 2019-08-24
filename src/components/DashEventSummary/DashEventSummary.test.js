import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import DashEventSummary from './DashEventSummary'

class ContextProvider extends React.Component{
  static childContextTypes = {
    myContext: PropTypes.object,
  }

  getChildContext = () => ({
    myContext: {
      events: [1, 2, 3]
    }
  })

  render(){
    return this.props.children
  }
}

describe('DashEventSummary smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><DashEventSummary /></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})

describe('DashEventSummary snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContextProvider><DashEventSummary /></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})