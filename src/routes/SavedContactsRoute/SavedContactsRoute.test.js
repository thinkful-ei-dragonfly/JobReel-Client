import React from 'react';
import ReactDOM from 'react-dom'
import SavedContactsRoute from './SavedContactsRoute'
import {BrowserRouter} from 'react-router-dom'

describe('SavedContactsRoute smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><SavedContactsRoute /></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})