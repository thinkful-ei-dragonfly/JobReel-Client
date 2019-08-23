import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import CompanySummary from './CompanySummary'

describe('CompanySummary smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CompanySummary />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('CompanySummary snapshot test', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<CompanySummary />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})