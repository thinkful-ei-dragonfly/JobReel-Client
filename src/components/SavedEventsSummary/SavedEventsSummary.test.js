import React from 'react'
import ReactDOM from 'react-dom'
import SavedEventsSummary from './SavedEventsSummary'

describe('Saved Events Summary smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SavedEventsSummary />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})