import React from 'react'
import ReactDOM from 'react-dom'
import SavedJobSummary from './SavedJobSummary'

describe('Saved Job Summary smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SavedJobSummary />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})