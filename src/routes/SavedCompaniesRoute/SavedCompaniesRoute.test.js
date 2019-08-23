import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import SavedCompaniesRoute from './SavedCompaniesRoute'

describe('SavedCompaniesRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><SavedCompaniesRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})