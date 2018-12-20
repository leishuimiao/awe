import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '@src/Core'
import './assets/css/index.scss'

import IndexPage from './pages'
import Block from './pages/Block'
import Button from './pages/Button'
import Grid from './pages/Grid'
import Icons from './pages/Icons'
import ListView from './pages/ListView'
import Toast from './pages/Toast'

const routes = [
  { path: '/', component: IndexPage },
  { path: '/block', component: Block },
  { path: '/button', component: Button },
  { path: '/grid', component: Grid },
  { path: '/icons', component: Icons },
  { path: '/listview', component: ListView },
  { path: '/toast', component: Toast }
]

ReactDOM.render(<App routes={routes} />, document.querySelector('#root'))

if (module.hot) {
  module.hot.accept()
}
