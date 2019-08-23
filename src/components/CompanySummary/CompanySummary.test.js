import React from 'react'
import ReactDOM from 'react-dom'
import CompanySummary from './CompanySummary'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PropTypes from 'prop-types';

class ContextProvider extends React.Component {
  static childContextTypes = {
    myContext: PropTypes.object,
  }

  getChildContext = () => ({
    myContext: {
      companies: [1, 2, 3]
    }
  })

  render() {
    return this.props.children;
  }
}

describe('CompanySummary smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CompanySummary />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('CompanySummary snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(
      <ContextProvider>
        <CompanySummary />
      </ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})