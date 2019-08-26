import React from 'react'
import ReactDOM from 'react-dom'
import ResourcesList from './ResourcesList'
import PropTypes from 'prop-types'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

class ContextProvider extends React.Component{
  static childContextTypes = {
    myContext: PropTypes.object,
  }
  
  getChildContext = () => ({
    myContext: {
      resources: [
        {
          title: 'title',
          type: 'type',
          description: 'description',
          resource_id: 1,
          date_added: '2019-08-26T15:03:05.646Z',
          user_id: 1
        }
      ],
      setManualResourceAdd: () => { }
    }
  })
  
  render(){
    return this.props.children
    }
  }

describe('ResourcesList smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ResourcesList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('ResourcesList snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContextProvider><ResourcesList /></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})