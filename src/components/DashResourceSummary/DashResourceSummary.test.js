import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import DashResourceSummary from './DashResourceSummary'

class ContextProvider extends React.Component{
  static childContextTypes = {
    myContext: PropTypes.object,
  }

  getChildContext = () => ({
    myContext: {
      resources: [1, 2, 3]
    }
  })

  render(){
    return this.props.children
  }
}

describe('DashResourceSummary smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><DashResourceSummary /></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})

describe('DashResourceSummary snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContextProvider><DashResourceSummary /></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})