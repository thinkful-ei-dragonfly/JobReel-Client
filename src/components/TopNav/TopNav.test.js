import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import TopNav from './TopNav'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('TopNav smoke test', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><TopNav/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  });
});

describe('TopNav snapshot test', () => {
  it('should render the UI as expected', () => {
    const wrapper = shallow(<BrowserRouter><TopNav/></BrowserRouter>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})



