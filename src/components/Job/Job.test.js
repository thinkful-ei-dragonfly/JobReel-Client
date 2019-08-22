import React from 'react'
import ReactDOM from 'react-dom'
import Job from './Job'

describe.skip('Job smoke test', () => {
  const props = {
    job:{
      company: 'Company'
    }
  }
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Job {...props} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})