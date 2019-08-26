import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Input, Label, Required, Textarea } from './Form'

describe('Form smoke tests', () => {
  describe('Input smoke test', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Input />, div)
      ReactDOM.unmountComponentAtNode(div)
    })
  })

  describe('Input snapshot test', () => {
    it('renders the UI as expected', () => {
      const wrapper = shallow(<Input />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe('Label smoke test', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Label />, div)
      ReactDOM.unmountComponentAtNode(div)
    })
  })

  describe('Label snapshot test', () => {
    it('renders the UI as expected', () => {
      const wrapper = shallow(<Label />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe('Required smoke test', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Required />, div)
      ReactDOM.unmountComponentAtNode(div)
    })
  })

  describe('Required snapshot test', () => {
    it('renders the UI as expected', () => {
      const wrapper = shallow(<Required />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe('Textarea smoke test', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Textarea />, div)
      ReactDOM.unmountComponentAtNode(div)
    })
  })

  describe('Textarea snapshot test', () => {
    it('renders the UI as expected', () => {
      const wrapper = shallow(<Textarea />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
})
