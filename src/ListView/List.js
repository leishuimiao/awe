import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledList } from './Styled'
import { Accordion } from '../Accordion'
import classnames from 'classnames'

class List extends Component {
  static propsType = {
    mediaList: PropTypes.bool,
    accordionList: PropTypes.bool,
    inset: PropTypes.bool,
    inlineLabels: PropTypes.bool
  }
  static defaultProps = {
    mediaList: false,
    accordionList: false,
    inset: false,
    inlineLabels: false
  }
  static childContextTypes = {
    mediaList: PropTypes.bool,
    accordionList: PropTypes.bool,
    inlineLabels: PropTypes.bool
  }
  // 向子组件传递参数
  getChildContext () {
    const { mediaList, accordionList, inlineLabels } = this.props
    return {
      mediaList,
      accordionList,
      inlineLabels
    }
  }
  getTypeChildren (propsChildren) {
    const children = {
      ListItem: [],
      Other: []
    }

    React.Children.forEach(propsChildren, (child, index) => {
      if (['ListItem', 'ListInput'].indexOf(child.type.componentName) !== -1) {
        children.ListItem.push(child)
      } else {
        children.Other.push(child)
      }
    })

    return children
  }
  render () {
    const { children, className, inset, mediaList, accordionList, inlineLabels, ...rest } = this.props
    const { ListItem, Other } = this.getTypeChildren(children)

    return (
      <StyledList
        className={classnames({
          [`${UI_NAME}-list`]: true,
          [`${UI_NAME}-inset`]: inset,
          [`${UI_NAME}-media-list`]: mediaList,
          [`${UI_NAME}-accordion-list`]: accordionList,
          [`${UI_NAME}-inline-labels`]: inlineLabels
        })}
        inset={inset}
        mediaList={mediaList}
        inlineLabels={inlineLabels}
        {...rest}
      >
        {accordionList && <Accordion>{children}</Accordion>}
        {(ListItem.length > 0) && !accordionList && <ul>{ListItem}</ul>}
        {(Other.length > 0) && !accordionList && Other}
      </StyledList>
    )
  }
}

export default List
