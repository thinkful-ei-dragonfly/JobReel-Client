import React from 'react';
import ReactDOM from 'react-dom'
import AddEventForm from './AddEventForm'

describe('AddEventForm smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<AddEventForm />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})