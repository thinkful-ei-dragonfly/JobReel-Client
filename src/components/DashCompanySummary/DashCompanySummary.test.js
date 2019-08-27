import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PropTypes from 'prop-types'
import DashCompanySummary from './DashCompanySummary'

class ContextProvider extends React.Component{
  static childContextTypes = {
    myContext: PropTypes.object,
  }

  getChildContext = () => ({
    myContext: {
      companies: [1, 2, 3]
    }
  })

  render(){
    return this.props.children
  }
}

describe('DashCompanySummary smoke test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<BrowserRouter><DashCompanySummary /></BrowserRouter>, div)
      ReactDOM.unmountComponentAtNode(div)
  })
})

describe('DashCompanySummary snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContextProvider><DashCompanySummary /></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})