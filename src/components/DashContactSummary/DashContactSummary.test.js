import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { BrowserRouter } from 'react-router-dom'
import DashContactSummary from './DashContactSummary'

class ContextProvider extends React.Component {
  getChildContext = () => ({
    myContext: {
      test: 2,
      contacts: [1, 2, 3]
    }
  })

  render() {
    return this.props.children
  }
}

describe('DashContactSummary smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><DashContactSummary /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('DashContactSummary snapshot test', () => {
  it('renders the UI as expected', () => {
    const context = { contacts: ['foo'] }
    const wrapper = shallow(<ContextProvider><DashContactSummary /></ContextProvider>, { context })
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})