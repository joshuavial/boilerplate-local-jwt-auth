import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'

let store
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  store = createStore(reducers, compose(
    applyMiddleware(thunk),
     window.__REDUX_DEVTOOLS_EXTENSION__()
  ))
} else {
  store = createStore(reducers, compose(
    applyMiddleware(thunk)
  ))
}

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById('app')
  )
})
