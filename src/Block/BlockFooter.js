import React, { Component } from 'react'
import { StyledBlockFooter } from './Styled'

export default class BlockFooter extends Component {
  render () {
    const { children, ...rest } = this.props
    return (
      <StyledBlockFooter {...rest}>{children}</StyledBlockFooter>
    )
  }
}
