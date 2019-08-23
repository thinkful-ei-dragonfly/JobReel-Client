import React from 'react';
import ReactDOM from 'react-dom'
import SavedEventsRoute from './SavedEventsRoute'
import {BrowserRouter} from 'react-router-dom'

describe('SavedEventsRoute smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><SavedEventsRoute /></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})