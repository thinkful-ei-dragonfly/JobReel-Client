import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { BrowserRouter } from 'react-router-dom'
import FindProfessionalForm from './FindProfessionalsForm'

describe('FindProfessionalForm smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><FindProfessionalForm /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('FindProfessionalForm snapshot test', () => {
  it('renders the UI as expected', () =>{
    const wrapper = shallow((<FindProfessionalForm />))
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})