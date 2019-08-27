import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json' 
import {BrowserRouter} from 'react-router-dom'
import Header from './Header'

describe('Header smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Header /> </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('Header snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})