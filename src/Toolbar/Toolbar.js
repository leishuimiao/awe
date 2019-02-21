import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledToolbar, StyledToolbarInner } from './Styled'
import { getClassNameByProps } from '../utils/utils'

export default class Toolbar extends Component {
  static defaultProps = {
    position: 'bottom',
    tabbar: false
  }
  static propsType = {
    position: PropTypes.oneOf(['top', 'bottom']),
    tabbar: PropTypes.bool
  }
  render () {
    const { children, tabbar, className, ...rest } = this.props
    const position = this.props.position

    return (
      <StyledToolbar className={getClassNameByProps('toolbar', {
        top: (position === 'top'),
        bottom: (position === 'bottom')
      }, className)} {...rest}>
        <StyledToolbarInner>{children}</StyledToolbarInner>
      </StyledToolbar>
    )
  }
}
