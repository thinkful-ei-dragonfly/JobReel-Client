import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AddContactForm from './AddContactForm'

describe('AddContactForm smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddContactForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('AddContactForm snapshot test', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<AddContactForm />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})