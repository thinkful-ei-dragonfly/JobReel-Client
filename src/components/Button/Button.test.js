import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Button from './Button'

describe('Button smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('Button snapshot test', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Button />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})