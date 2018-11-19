import React, { Component } from 'react'
import { StyledBlockTitle } from './Styled'

export default class BlockTitle extends Component {
  render () {
    const { children, ...rest } = this.props
    return (
      <StyledBlockTitle {...rest}>{children}</StyledBlockTitle>
    )
  }
}
