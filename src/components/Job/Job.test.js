import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Job from './Job'

const props = {
  job:{},
  company: {},
  type: {},
  location: '',
  key: null,
  savedJobUrls: {}
}

describe('Job smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Job {...props} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('Job snapshot test', () => {
  const wrapper = shallow(<Job {...props} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})