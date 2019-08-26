import React from 'react'
import ReactDOM from 'react-dom'
import Company from './Company'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const props = {
  key: 1,
  id: 1,
  name: 'name',
  city: 'city',
  state: 'IL',
  date: new Date(),
  industry: 'industry',
  desc: 'desc',
  website: 'http://www.site.com',
  contact: 'contact',
  user: 2
}

describe('Company smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Company {...props} />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})

describe('Company snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<Company {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  it('opens the edit company form', () => {
    const wrapper = shallow(<Company {...props} />)
    wrapper.find('.edit-button').at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})