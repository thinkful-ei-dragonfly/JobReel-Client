import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AddJobForm from './AddJobForm'

describe('AddJobForm smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddJobForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('AddJobForm snapshot test', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<AddJobForm />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})