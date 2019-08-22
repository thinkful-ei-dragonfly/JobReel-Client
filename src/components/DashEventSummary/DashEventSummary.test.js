import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import DashEventSummary from './DashEventSummary'

describe('DashEventSummary smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><DashEventSummary /></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})