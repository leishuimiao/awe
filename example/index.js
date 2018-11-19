import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '../src/Core'
import './assets/css/index.scss'

import IndexPage from './pages'
import ListView from './pages/ListView'

const routes = [
  { path: '/', component: IndexPage },
  { path: '/listview', component: ListView }
]

ReactDOM.render(<App routes={routes} />, document.querySelector('#root'))
