import React from 'react';
import ReactDOM from 'react-dom'
import AddJobForm from './AddJobForm'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('AddJobForm smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<AddJobForm />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})

describe('AddJobForm snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<AddJobForm />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})