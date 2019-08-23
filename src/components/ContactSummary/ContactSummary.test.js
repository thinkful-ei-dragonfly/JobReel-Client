import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ContactSummary from './ContactSummary'

class ContextProvider extends React.Component {
  getChildContext = () => ({
    myContext: {
      test: 2,
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

describe('ContactSummary snapshot test', () => {
  it('renders the UI as expected', () => {
    const context = { contacts: ['foo']}
    const wrapper = shallow(<ContextProvider><ContactSummary /></ContextProvider>, { context })
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})