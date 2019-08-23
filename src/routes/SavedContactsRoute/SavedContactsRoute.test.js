import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import SavedContactsRoute from './SavedContactsRoute'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('SavedContactsRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><SavedContactsRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('savedContactsRoute snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(
        <savedContactsRoute />
    )
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})