import React, { Component } from 'react'
import { StyledListGroup } from './Styled'

export default class ListGroup extends Component {
  static componentName = 'ListGroup'
  render () {
    const { children, ...rest } = this.props
    return (
      <StyledListGroup {...rest}>
        <ul>{children}</ul>
      </StyledListGroup>
    )
  }
}
