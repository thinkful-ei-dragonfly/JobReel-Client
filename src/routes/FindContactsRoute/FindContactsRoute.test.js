import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import FindContactsRoute from './FindContacts'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('FindContactsRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><FindContactsRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('FindContactsRoute snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<FindContactsRoute />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})