import React from 'react'
import ReactDOM from 'react-dom'
import AddContactForm from './AddContactForm'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('AddContactForm smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddContactForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('AddContactForm snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<AddContactForm />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})