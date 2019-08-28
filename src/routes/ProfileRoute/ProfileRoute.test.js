import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import ProfileRoute from './ProfileRoute'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PropTypes from 'prop-types';

class ContextProvider extends React.Component {
  static childContextTypes = {
    myContext: PropTypes.object,
  }

  getChildContext = () => ({
    myContext: {
      user: {
        id: 1
      }
    }
  })

  render() {
    return this.props.children;
  }
}

describe('ProfileRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><ProfileRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('ProfileRoute snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(
      <ContextProvider>
        <ProfileRoute />
      </ContextProvider>
    )
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})