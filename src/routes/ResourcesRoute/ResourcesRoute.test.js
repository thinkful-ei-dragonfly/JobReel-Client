import React from 'react'
import ReactDOM from 'react-dom'
import ResourcesRoute from './ResourcesRoute'
import {BrowserRouter} from 'react-router-dom'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PropTypes from 'prop-types';

class ContextProvider extends React.Component {
  static childContextTypes = {
    myContext: PropTypes.object,
  }

  getChildContext = () => ({
    myContext: {
      manualResourceAdd: true
    }
  })

  render() {
    return this.props.children;
  }
}

describe('ResourcesRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><ResourcesRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('ResourcesRoute snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(
      <ResourcesRoute />
    )
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  it('renders the resources form when manually adding resources', () => {
    const wrapper = shallow(
      <ContextProvider>
        <ResourcesRoute />
      </ContextProvider>
    )
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})