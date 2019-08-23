import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import JobsRoute from './JobsRoute'

describe('JobsRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><JobsRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})