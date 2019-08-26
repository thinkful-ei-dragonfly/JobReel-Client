import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import SavedCompaniesRoute from './SavedCompaniesRoute'
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

describe('SavedCompaniesRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><SavedCompaniesRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('SavedCompaniesRoute snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(
      <ContextProvider>
        <SavedCompaniesRoute />
      </ContextProvider>
    )
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})