import React from 'react';
import ReactDOM from 'react-dom'
import Contact from './Contact'

describe('AddEventForm smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Contact />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})