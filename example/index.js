import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '@src/Core'
import './assets/css/index.scss'

import IndexPage from './pages'
import Block from './pages/Block'
import Button from './pages/Button'
import Grid from './pages/Grid'
import ListView from './pages/ListView'

const routes = [
  { path: '/', component: IndexPage },
  { path: '/block', component: Block },
  { path: '/button', component: Button },
  { path: '/grid', component: Grid },
  { path: '/listview', component: ListView }
]

ReactDOM.render(<App routes={routes} />, document.querySelector('#root'))

if (module.hot) {
  module.hot.accept()
}
