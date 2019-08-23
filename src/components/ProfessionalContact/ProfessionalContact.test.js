import React from 'react'
import ReactDOM from 'react-dom'
import ProfessionalContact from './ProfessionalContact'

describe('Professional Contact smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ProfessionalContact />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})