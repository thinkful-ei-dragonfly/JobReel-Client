import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import DashCompanySummary from './DashCompanySummary'

describe('DashCompanySummary smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><DashCompanySummary /></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})

describe('DashCompanySummary snapshot test', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
    .create(<BrowserRouter><DashCompanySummary /></BrowserRouter>)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })
})