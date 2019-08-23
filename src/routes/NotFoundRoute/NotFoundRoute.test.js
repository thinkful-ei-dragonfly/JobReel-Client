import React from 'react'
import ReactDOM from 'react-dom'
import NotFoundRoute from './NotFoundRoute'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('NotFoundRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NotFoundRoute />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('NotFoundRoute snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<NotFoundRoute />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})