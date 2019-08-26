import React from 'react';
import ReactDOM from 'react-dom'
import AddCompanyForm from './AddCompanyForm'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('AddCompanyForm smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<AddCompanyForm />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})

describe('AddCompanyForm snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<AddCompanyForm />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})