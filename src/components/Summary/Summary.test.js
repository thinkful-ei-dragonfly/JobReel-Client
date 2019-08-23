import React from 'react'
import ReactDOM from 'react-dom'
import Summary from './Summary'

describe('Summary smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Summary />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})