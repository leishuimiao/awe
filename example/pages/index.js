import React, { Component } from 'react'
import { Page, PageContent, Link } from '@src/Core'
import { List, ListItem } from '@src/ListView'
import { BlockTitle } from '@src/Block'

export default class index extends Component {
  render () {
    return (
      <Page title="首页" className="page-index">
        <PageContent>
          <BlockTitle>组件(Components)</BlockTitle>
          <List>
            <ListItem title="Block" arrow as={Link} to="/block" />
            <ListItem title="Button" arrow as={Link} to="/button" />
            <ListItem title="Dialog" arrow as={Link} to="/dialog" />
            <ListItem title="Grid" arrow as={Link} to="/grid" />
            <ListItem title="Icons" arrow as={Link} to="/icons" />
            <ListItem title="List View" arrow as={Link} to="/listview" />
            <ListItem title="Toast" arrow as={Link} to="/toast" />
          </List>
        </PageContent>
      </Page>
    )
  }
}
