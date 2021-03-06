import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from '../CatIndex'


Enzyme.configure({ adapter: new Adapter() })


it('Renders the cats', ()=>{
  const component = mount(<CatIndex cats={ cats }/>)
  const headings = component.find('ListGroupItemHeading')
  expect(headings.length).toBe(4)
})
