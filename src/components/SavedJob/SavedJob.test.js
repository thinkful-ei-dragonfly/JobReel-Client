import React from 'react'
import ReactDOM from 'react-dom'
import SavedJob from './SavedJob'

describe('Saved Job smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SavedJob />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})