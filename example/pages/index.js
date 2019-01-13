import React, { Component } from 'react'
import { Page, PageContent, Link } from '@src/Core'
import { List, ListItem } from '@src/ListView'
import { BlockTitle } from '@src/Block'

const componentsArr = [
  {
    title: 'Block',
    path: '/block'
  },
  {
    title: 'Button',
    path: '/button'
  },
  {
    title: 'Dialog',
    path: '/dialog'
  },
  {
    title: 'Grid',
    path: '/grid'
  },
  {
    title: 'Icons',
    path: '/icons'
  },
  {
    title: 'Inputs',
    path: '/inputs'
  },
  {
    title: 'ListView',
    path: '/listview'
  },
  {
    title: 'Toast',
    path: '/toast'
  }
]

export default class index extends Component {
  render () {
    return (
      <Page title="首页" className="page-index">
        <PageContent>
          <BlockTitle>组件(Components)</BlockTitle>
          <List>
            {componentsArr.map(item => <ListItem title={item.title} key={item.path} arrow as={Link} to={item.path} />)}
          </List>
        </PageContent>
      </Page>
    )
  }
}
