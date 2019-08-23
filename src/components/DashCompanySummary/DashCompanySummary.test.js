import React from 'react';
import ReactDOM from 'react-dom'
import {shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { BrowserRouter } from 'react-router-dom'
import DashCompanySummary from './DashCompanySummary'

class ContextProvider extends React.Component {
  getChildContext = () => ({
    myContext: {
      test: 2,
      companies: [1, 2, 3]
    }
  })

  render(){
    return this.props.children
  }
}
describe('DashCompanySummary smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><DashCompanySummary /></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})

describe('DashCompanySummary snapshot test', () => {
  it('renders the UI as expected', () => {
    const context = { companies: ['foo']}
    const wrapper = shallow(<ContextProvider><DashCompanySummary /></ContextProvider>, { context })
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})