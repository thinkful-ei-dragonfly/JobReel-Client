import React from 'react';
import ReactDOM from 'react-dom'
import SavedCompaniesRoute from './SavedCompaniesRoute'
import {BrowserRouter} from 'react-router-dom'

describe('SavedCompaniesRoute smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><SavedCompaniesRoute /></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})