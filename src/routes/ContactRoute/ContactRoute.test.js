import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import ContactRoute from './ContactRoute'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('NotFoundRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><ContactRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('NotFoundRoute snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContactRoute />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})