import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ContactSummary from './ContactSummary'

describe('ContactSummary smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ContactSummary />, div);
      ReactDOM.unmountComponentAtNode(div);
  })
})

describe('ContactSummary snapshot test', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
    .create(<ContactSummary />)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })
})