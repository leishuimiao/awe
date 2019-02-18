import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyledCard,
  StyledCardHeader,
  StyledCardContent,
  StyledCardFooter
} from './Styled'

export default class Card extends Component {
  static defaultProps = {
    outline: false
  }
  static propsType = {
    outline: PropTypes.bool
  }
  render () {
    const { children, header, footer, content, ...rest } = this.props

    return (
      <StyledCard {...rest}>
        {header && <StyledCardHeader>{header}</StyledCardHeader>}
        {content && <StyledCardContent padding>{content}</StyledCardContent>}
        {children}
        {footer && <StyledCardFooter>{footer}</StyledCardFooter>}
      </StyledCard>
    )
  }
}
