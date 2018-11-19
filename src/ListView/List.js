import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledList } from './Styled'
import classnames from 'classnames'

class List extends Component {
  static propsType = {
    mediaList: PropTypes.bool,
    inset: PropTypes.bool
  }
  static defaultProps = {
    mediaList: false,
    inset: false
  }
  getChildContext () {
    return {
      mediaList: this.props.mediaList
    }
  }
  getTypeChildren (propsChildren) {
    const children = {
      ListItem: [],
      Other: []
    }

    React.Children.forEach(propsChildren, child => {
      if (child.type.componentName === 'ListItem') {
        children.ListItem.push(child)
      } else {
        children.Other.push(child)
      }
    })

    return children
  }
  render () {
    const { children, className, inset, mediaList, ...rest } = this.props
    const { ListItem, Other } = this.getTypeChildren(children)

    return (
      <StyledList
        className={classnames({ [`${UI_NAME}-list`]: true, [`${UI_NAME}-inset`]: inset, [`${UI_NAME}-media-list`]: mediaList })}
        inset={inset}
        mediaList={mediaList}
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
  mediaList: PropTypes.bool
}

export default List
