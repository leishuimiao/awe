import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '@src/Core'
import './assets/css/index.scss'

import IndexPage from './pages'
import Accordion from './pages/Accordion'
import Block from './pages/Block'
import Button from './pages/Button'
import Cards from './pages/Cards'
import Dialog from './pages/Dialog'
import Grid from './pages/Grid'
import Icons from './pages/Icons'
import Inputs from './pages/Inputs'
import ListView from './pages/ListView'
import Toast from './pages/Toast'
import Toolbar from './pages/Toolbar/index'
import ToolbarDetail from './pages/Toolbar/detail'

const routes = [
  { path: '/', component: IndexPage },
  { path: '/accordion', component: Accordion },
  { path: '/block', component: Block },
  { path: '/button', component: Button },
  { path: '/cards', component: Cards },
  { path: '/dialog', component: Dialog },
  { path: '/grid', component: Grid },
  { path: '/icons', component: Icons },
  { path: '/inputs', component: Inputs },
  { path: '/listview', component: ListView },
  { path: '/toast', component: Toast },
  { path: '/toolbar', component: Toolbar, exact: true },
  { path: '/toolbar/detail/:index', component: ToolbarDetail }
]

ReactDOM.render(<App routes={routes} type="hash" />, document.querySelector('#root'))

if (module.hot) {
  module.hot.accept()
}
