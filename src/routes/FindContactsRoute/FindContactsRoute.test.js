import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import FindContactsRoute from './FindContacts'

describe('FindContactsRoute smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><FindContactsRoute /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})