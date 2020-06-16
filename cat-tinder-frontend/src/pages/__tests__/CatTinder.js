import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from '../CatIndex'

Enzyme.configure({ adapter: new Adapter() })

it('CatIndex renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CatIndex />, div)
})

it('CatIndex renders content', () => {
  const catIndex = mount(<CatIndex />)
  expect(catIndex.find('p').text()).toEqual('All the cats.')
})
