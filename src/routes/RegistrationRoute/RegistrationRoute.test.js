import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import RegistrationRoute from './RegistrationRoute'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('RegistrationRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><RegistrationRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

let focusOnTargetSpy = jest.fn();

jest
  .spyOn(RegistrationRoute.prototype, 'focusOnTarget')
  .mockImplementation(focusOnTargetSpy);


describe('RegistrationRoute snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<RegistrationRoute />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})