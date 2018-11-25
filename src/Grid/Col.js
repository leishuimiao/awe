import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledCol } from './Styled'

class Col extends Component {
  static propTypes = {
    width: PropTypes.number,
    tabletWidth: PropTypes.number,
    square: PropTypes.bool
  }
  render () {
    return (
      <StyledCol {...this.props} {...this.context} />
    )
  }
}

Col.contextTypes = {
  noGap: PropTypes.bool,
  gap: PropTypes.number,
  childAmt: PropTypes.number
}

export default Col
