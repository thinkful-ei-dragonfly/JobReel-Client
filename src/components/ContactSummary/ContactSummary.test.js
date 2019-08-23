import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PropTypes from 'prop-types'
import ContactSummary from './ContactSummary'

class ContextProvider extends React.Component {
  static childContextTypes = {
    myContext: PropTypes.object,
  }

  getChildContext = () => ({
    myContext: {
      contacts: [1, 2, 3]
    }
  })

  render(){
    return this.props.children
  }
}
describe('ContactSummary smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ContactSummary />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})

describe('Company snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContextProvider><ContactSummary /></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})