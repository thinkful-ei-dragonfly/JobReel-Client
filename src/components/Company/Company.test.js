import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Company from './Company'

describe('Company smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Company />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('Company snapshot test', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Company />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})