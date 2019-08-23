import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import SavedJobsRoute from './SavedJobsRoute'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('SavedJobsRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><SavedJobsRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})

describe('SavedJobsRoute snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(
      <SavedJobsRoute />
    )
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})