import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Description from './Description'

describe('Description smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Description />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('Description snapshot test', () => {
  it('render the UI as expected', () => {
    const wrapper = shallow(<Description />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})