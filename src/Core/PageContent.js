import React, { Component } from 'react'
import { StyledPageContent } from './Styled'

export default class PageContent extends Component {
  render () {
    const { children, ...rest } = this.props

    return (
      <StyledPageContent {...rest}>{children}</StyledPageContent>
    )
  }
}
