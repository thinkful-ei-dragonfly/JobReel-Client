import React from 'react'
import ReactDOM from 'react-dom'
import Job from './Job'

describe('Job smoke test', () => {
  const props = {
    job:{},
    company: {},
    type: {},
    location: '',
    key: null,
    savedJobUrls: {}
  }
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Job {...props} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})