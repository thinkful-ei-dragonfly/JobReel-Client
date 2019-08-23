import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import JobSearchForm from './JobSearchForm'

describe('Job Search Form smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><JobSearchForm /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})