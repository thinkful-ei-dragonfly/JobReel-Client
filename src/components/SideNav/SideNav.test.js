import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import SideNav from './SideNav'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('SideNav smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter> <SideNav /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('SideNav snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<BrowserRouter><SideNav/></BrowserRouter>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})