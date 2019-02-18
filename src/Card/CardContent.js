import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledCardContent } from './Styled'

export default class CardContent extends Component {
  static defaultProps = {
    padding: true,
    childRadius: false
  }
  static propsType = {
    padding: PropTypes.bool,
    childRadius: PropTypes.bool
  }
  render () {
    return (
      <StyledCardContent {...this.props} />
    )
  }
}
