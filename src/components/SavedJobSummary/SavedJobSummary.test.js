import React from 'react'
import ReactDOM from 'react-dom'
import SavedJobSummary from './SavedJobSummary'
import PropTypes from 'prop-types'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

class ContextProvider extends React.Component{
  static childContextTypes = {
    myContext: PropTypes.object,
  }
  
  getChildContext = () => ({
    myContext: {
      savedJobs: [
        {
          job_title: 'title', 
          company: 'company', 
          city: 'city', 
          state: 'MD', 
          url: 'http://website.com', 
          status: 'Interested', 
          description: 'description',
          job_id: 1,
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

describe('SavedJobSummary smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SavedJobSummary />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('SavedJobSummary snapshot test', () => {
  it('renders the UI as expected', () => {
    const wrapper = shallow(<ContextProvider><SavedJobSummary/></ContextProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})