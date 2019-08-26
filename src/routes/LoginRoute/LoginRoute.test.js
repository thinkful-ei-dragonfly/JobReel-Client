import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import LoginRoute from './LoginRoute'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('LoginRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><LoginRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('LoginRoute snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<LoginRoute />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})