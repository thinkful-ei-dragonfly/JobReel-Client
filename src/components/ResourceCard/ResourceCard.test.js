import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ResourceCard from './ResourceCard'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

class ContextProvider extends React.Component{
static childContextTypes = {
  myContext: PropTypes.object,
}

getChildContext = () => ({
  myContext: {
    updateResource: () => { },
    deleteResource: () => { },
  }
})

render(){
  return this.props.children
}
}

describe('ResourceCard smoke test', () => {
  let props = {
    title: 'title',
    type: 'book',
    desc: 'description',
    id: 1,
    date: '2019-08-26T15:03:05.646Z',
    user: 1
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ResourceCard {...props}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('ResourceCard snapshot test', () => {
  let props = {
    title: 'title',
    type: 'book',
    desc: 'description',
    id: 1,
    date: '2019-08-26T15:03:05.646Z',
    user: 1
  }

  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContextProvider><ResourceCard {...props}/></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})