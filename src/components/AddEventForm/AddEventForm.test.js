import React from 'react';
import ReactDOM from 'react-dom'
import AddEventForm from './AddEventForm'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('AddEventForm smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddEventForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
describe('AddEventForm snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<AddEventForm />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})