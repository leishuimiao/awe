import React, { Component } from 'react'
import { StyledPageContent } from './Styled'

export default class PageContent extends Component {
  render () {
    return (
      <StyledPageContent {...this.props} />
    )
  }
}
