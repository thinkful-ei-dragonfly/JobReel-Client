import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Contact from './Contact'

describe('Contact smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('Contact snapshot test', () => {
  const tree = renderer
    .create(<Contact />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})