import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import DashJobSummary from './DashJobSummary'

describe('DashJobSummary smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><DashJobSummary /></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})