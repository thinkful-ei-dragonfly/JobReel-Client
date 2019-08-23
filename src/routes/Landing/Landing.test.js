import React from 'react'
import ReactDOM from 'react-dom'
import Landing from './Landing'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Landing smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Landing />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('Landing snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<Landing />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})