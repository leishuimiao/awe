import React, { Component } from 'react'
import { Page, PageContent, Link } from '@src/Core'
import { List, ListItem } from '@src/ListView'
import { typeList } from './data'

export default class index extends Component {
  render () {
    return (
      <Page title="Toolbar & Tabbar">
        <PageContent>
          <List>
            {typeList.map((item, index) => <ListItem key={index} as={Link} arrow to={`toolbar/detail/${index}`} title={item} />)}
          </List>
        </PageContent>
      </Page>
    )
  }
}
