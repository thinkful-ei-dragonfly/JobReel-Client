import React from 'react'
import ReactDOM from 'react-dom'
import ProfessionalContact from './ProfessionalContact'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('ProfessionalContact smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ProfessionalContact />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('ProfessionalContact snapshot test', () => {
  let props = {
    professional : {
      first_name: 'first',
      department: 'department',
      position: 'position',
      type: 'type',
      value: 'email@email.com',
      phone_number: '111-111-1111',
      linkedin: 'http://linkedin.com/person'
    }
  }

  it('renders the UI as expected', () => {
    const wrapper = shallow(<ProfessionalContact {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})