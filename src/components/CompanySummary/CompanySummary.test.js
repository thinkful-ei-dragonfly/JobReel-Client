import React from 'react';
import ReactDOM from 'react-dom'
import CompanySummary from './CompanySummary'

describe('CompanySummary smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<CompanySummary />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})