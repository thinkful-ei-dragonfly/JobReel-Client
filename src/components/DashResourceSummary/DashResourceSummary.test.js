import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import DashResourceSummary from './DashResourceSummary'

describe('DashResourceSummary smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><DashResourceSummary /></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})