import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import SavedEventsRoute from './SavedEventsRoute'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('SavedEventsRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><SavedEventsRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('SavedEventsRoute snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(
      <SavedEventsRoute />
    )
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})