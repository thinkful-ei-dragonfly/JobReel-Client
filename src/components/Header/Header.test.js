import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import PropTypes from 'prop-types'
import toJson from 'enzyme-to-json' 
import {BrowserRouter} from 'react-router-dom'
import Header from './Header'

class ContextProvider extends React.Component {
  static childContextTypes = {
    myContext: PropTypes.object,
  }

  getChildContext = () => ({
    myContext: {
      user: {
        username: 'testName'
      }
    }
  })

  render () {
    return this.props.children
  }
}

describe('Header smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('Header snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContextProvider><Header /></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})