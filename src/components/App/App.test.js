import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { JobReelProvider } from '../../context/JobReelContext'
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';


describe('App smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<JobReelProvider><BrowserRouter><App /></BrowserRouter></JobReelProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('App snapshot test', () => {
  var focusOnTargetSpy = jest.fn()

  jest
    .spyOn(RegistrationRoute.prototype, 'componentDidMount')
    .mockImplementation(focusOnTargetSpy)

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<JobReelProvider><BrowserRouter><App /></BrowserRouter></JobReelProvider>)
      .toJSON()
    expect(tree).toMatchSnapshot()
    expect(focusOnTargetSpy).toHaveBeenCalled()
  })
})