import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { Provider } from 'react-redux'
import store from './store'

const root = document.getElementById('root')
const render = ReactDOM.render

// eslint-disable-next-line fp/no-unused-expression
render(<Provider store={store}><App /></Provider>, root)
