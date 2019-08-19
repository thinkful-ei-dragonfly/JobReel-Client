import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { JobReelProvider } from '../../context/JobReelContext'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobReelProvider><BrowserRouter><App /></BrowserRouter></JobReelProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
