import React, { Component } from 'react'
import { Page, PageContent } from '@src/Core'
import Toolbar from '@src/Toolbar'
import { Block, BlockTitle } from '@src/Block'
import Button from '@src/Button'
import { typeList } from './data'

export default class detail extends Component {
  constructor (props) {
    super(props)

    const detailIndex = props.match.params.index

    this.state = {
      detailIndex,
      title: typeList[detailIndex],
      isBottom: true
    }
  }
  render () {
    const { detailIndex, title, isBottom } = this.state
    let toolbarContent
    const position = isBottom ? 'bottom' : 'top'
    switch (Number(detailIndex)) {
      case 0:
        toolbarContent = (
          <Toolbar position={position}>
            <a>Left Link</a>
            <a>Right Link</a>
          </Toolbar>
        )
        break
      case 1:
        toolbarContent = (
          <Toolbar tabbar position={position}>
            <a>Tab 1</a>
            <a>Tab 2</a>
            <a>Tab 3</a>
          </Toolbar>
        )
        break
    }

    return (
      <Page title={title}>
        {toolbarContent}
        <PageContent>
          <BlockTitle>Toolbar Position</BlockTitle>
          <Block>
            <p>Toolbar supports both top and bottom positions. Click the following button to change its position.</p>
            <p>
              <Button fill block onClick={() => this.setState({ isBottom: !isBottom })}>Toggle Toolbar Position</Button>
            </p>
          </Block>
          <Block>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi...</p>
          </Block>
        </PageContent>
      </Page>
    )
  }
}
