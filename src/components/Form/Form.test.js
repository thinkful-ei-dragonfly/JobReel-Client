import React from 'react'
import ReactDOM from 'react-dom'
import { Input, Label, Required, Textarea } from './Form'

describe('Form smoke tests', () => {
  describe('Input smoke test', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Input />, div)
      ReactDOM.unmountComponentAtNode(div)
    })
  })

  describe('Label smoke test', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Label />, div)
      ReactDOM.unmountComponentAtNode(div)
    })
  })

  describe('Required smoke test', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Required />, div)
      ReactDOM.unmountComponentAtNode(div)
    })
  })

  describe('Textarea smoke test', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Textarea />, div)
      ReactDOM.unmountComponentAtNode(div)
    })
  })
})
