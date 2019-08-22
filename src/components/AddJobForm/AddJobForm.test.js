import React from 'react';
import ReactDOM from 'react-dom'
import AddJobForm from './AddJobForm'

describe('AddJobForm smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<AddJobForm />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})