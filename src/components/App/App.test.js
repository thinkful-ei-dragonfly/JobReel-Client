import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { JobReelProvider } from '../../context/JobReelContext'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('App smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<JobReelProvider><BrowserRouter><App /></BrowserRouter></JobReelProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('App snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<JobReelProvider><BrowserRouter><App /></BrowserRouter></JobReelProvider>)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})