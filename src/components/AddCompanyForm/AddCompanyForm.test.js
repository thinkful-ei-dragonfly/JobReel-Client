import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AddCompanyForm from './AddCompanyForm'

describe('AddCompanyForm smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddCompanyForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('AddCompanyForm snapshot test', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<AddCompanyForm />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})