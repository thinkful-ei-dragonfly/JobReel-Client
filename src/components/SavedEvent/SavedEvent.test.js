import React from 'react'
import ReactDOM from 'react-dom'
import SavedEvent from './SavedEvent'

describe('Saved Event smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SavedEvent />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})