import React from 'react'
import ReactDOM from 'react-dom'
import EditProfileForm from './EditProfileForm'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const dummyData = {
  first_name: 'test',
  last_name: 'test',
  username: 'test',
  email: 'test',
  city: 'test',
  industry: 'test',
  job_title: 'test'
}

describe('EditProfileForm smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<EditProfileForm user={dummyData} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('EditProfileForm snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(
        <EditProfileForm user={dummyData}/>
    )
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})