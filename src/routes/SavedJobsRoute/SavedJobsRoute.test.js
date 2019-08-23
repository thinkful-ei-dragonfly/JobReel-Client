import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import SavedJobsRoute from './SavedJobsRoute'

describe('SavedJobsRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><SavedJobsRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})