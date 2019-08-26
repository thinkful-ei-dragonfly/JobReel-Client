import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import SummaryContainer from './SummaryContainer'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Summary Container smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><SummaryContainer /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('SummaryContainer snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<BrowserRouter><SummaryContainer/></BrowserRouter>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

