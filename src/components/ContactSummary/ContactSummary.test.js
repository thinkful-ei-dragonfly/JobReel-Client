import React from 'react';
import ReactDOM from 'react-dom'
import ContactSummary from './ContactSummary'

describe('ContactSummary smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ContactSummary />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})