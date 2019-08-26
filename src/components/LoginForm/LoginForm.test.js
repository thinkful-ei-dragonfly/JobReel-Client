import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LoginForm from './LoginForm'

describe('Login Form smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LoginForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

let focusOnTargetSpy = jest.fn()

jest
  .spyOn(LoginForm.prototype, 'componentDidMount')
  .mockImplementation(focusOnTargetSpy)


describe('Login Form snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<LoginForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})