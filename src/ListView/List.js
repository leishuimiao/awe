import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledList } from './Styled'
import classnames from 'classnames'

class List extends Component {
  static propsType = {
    mediaList: PropTypes.bool,
    inset: PropTypes.bool,
    inlineLabels: PropTypes.bool
  }
  static defaultProps = {
    mediaList: false,
    inset: false,
    inlineLabels: false
  }
  getChildContext () {
    return {
      mediaList: this.props.mediaList,
      inlineLabels: this.props.inlineLabels
    }
  }
  getTypeChildren (propsChildren) {
    const children = {
      ListItem: [],
      Other: []
    }

    React.Children.forEach(propsChildren, child => {
      if (['ListItem', 'ListInput'].indexOf(child.type.componentName) !== -1) {
        children.ListItem.push(child)
      } else {
        children.Other.push(child)
      }
    })

    return children
  }
  render () {
    const { children, className, inset, mediaList, inlineLabels, ...rest } = this.props
    const { ListItem, Other } = this.getTypeChildren(children)

    return (
      <StyledList
        className={classnames({
          [`${UI_NAME}-list`]: true,
          [`${UI_NAME}-inset`]: inset,
          [`${UI_NAME}-media-list`]: mediaList,
          [`${UI_NAME}-inline-labels`]: inlineLabels
        })}
        inset={inset}
        mediaList={mediaList}
        inlineLabels={inlineLabels}
        {...rest}
      >
        {(ListItem.length > 0) && <ul>{ListItem}</ul>}
        {(Other.length > 0) && Other}
      </StyledList>
    )
  }
}

// 向子组件传递参数
List.childContextTypes = {
  mediaList: PropTypes.bool,
  inlineLabels: PropTypes.bool
}

export default List
