import React from 'react';
import ReactDOM from 'react-dom'
import Button from './Button'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Button smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('Button snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<Button />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})