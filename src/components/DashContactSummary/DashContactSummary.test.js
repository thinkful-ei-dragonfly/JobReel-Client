import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import DashContactSummary from './DashContactSummary'

describe('DashContactSummary smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><DashContactSummary /></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})