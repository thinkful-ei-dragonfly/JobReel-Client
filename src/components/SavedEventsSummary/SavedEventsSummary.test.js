import React from 'react'
import ReactDOM from 'react-dom'
import SavedEventsSummary from './SavedEventsSummary'
import PropTypes from 'prop-types'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


class ContextProvider extends React.Component{
  static childContextTypes = {
    myContext: PropTypes.object,
  }
  
  getChildContext = () => ({
    myContext: {
      savedEvents: [
        {
          event_name: 'name',
          host: 'host',
          city: 'city',
          state: 'MD',
          address: '111 St',
          url: 'http://website.com',
          status: 'Will Attend',
          description: 'description',
          event_id: 1,
          date_added: '2019-08-26T15:03:05.646Z',
          user_id: 1
        }
      ],
      setManualEventAdd: () => { }
    }
  })

  render(){
    return this.props.children
  }
}

describe('SavedEventsSummary smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SavedEventsSummary />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('SavedEventsSummary snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContextProvider><SavedEventsSummary/></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})