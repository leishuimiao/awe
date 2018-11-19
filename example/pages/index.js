import React, { Component } from 'react'
import { Page, PageContent, Link } from '../../src/Core'
import { List, ListItem } from '../../src/ListView'
import { BlockTitle } from '../../src/Block'

export default class index extends Component {
  render () {
    return (
      <Page title="首页" className="page-index">
        <PageContent>
          <BlockTitle>组件(Components)</BlockTitle>
          <List>
            <ListItem title="List View" arrow as={Link} to="/listview" />
          </List>
        </PageContent>
      </Page>
    )
  }
}
