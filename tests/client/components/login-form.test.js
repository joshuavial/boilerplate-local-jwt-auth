import test from 'ava'
import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import '../setup-dom'
import LoginForm from '../../../client/components/LoginForm'

const store = createStore((state = {auth: {}}, action) => state)

test('start', t => {
  const wrapper = mount(<Provider store={store}><LoginForm /></Provider>)
  t.pass()
})
