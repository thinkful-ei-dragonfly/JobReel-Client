import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import DashboardRoute from './DashboardRoute'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('DashboardRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><DashboardRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('DashboardRoute snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<DashboardRoute />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})