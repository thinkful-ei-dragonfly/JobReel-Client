import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AddEventForm from './AddEventForm'

describe('AddEventForm smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddEventForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('AddEventForm snapshot test', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<AddEventForm />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})