import React from 'react'
import ReactDOM from 'react-dom'
import Company from './Company'
import PropTypes from 'prop-types'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';

class ContextProvider extends React.Component{
  static childContextTypes = {
    myContext: PropTypes.object,
  }
  
  getChildContext = () => ({
    myContext: {
      updateCompany: () => { },
      deleteCompany: () => { },
    }
  })
  
  render(){
    return this.props.children
  }
  }

const props = {
  key: 1,
  id: 1,
  name: 'name',
  city: 'city',
  state: 'IL',
  date: '2019-08-26T15:03:05.646Z',
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
    const wrapper = shallow(<ContextProvider><Company {...props} /></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  it('opens the edit company form', () => {
    const wrapper = shallow(<Company {...props} />)
    wrapper.find('.edit-button').at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})