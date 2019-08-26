import React from 'react';
import ReactDOM from 'react-dom'
import ResourcesForm from './ResourcesForm'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('ResourcesForm smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ResourcesForm />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})

describe('ResourcesForm snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<ResourcesForm />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})