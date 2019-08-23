import React from 'react';
import ReactDOM from 'react-dom'
import AddContactForm from './AddContactForm'

describe('AddContactForm smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<AddContactForm />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})