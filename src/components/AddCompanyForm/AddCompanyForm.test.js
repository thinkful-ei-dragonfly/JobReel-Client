import React from 'react';
import ReactDOM from 'react-dom'
import AddCompanyForm from './AddCompanyForm'

describe('AddCompanyForm smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<AddCompanyForm />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})