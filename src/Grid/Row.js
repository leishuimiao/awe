import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledRow } from './Styled'

class Row extends Component {
  static propTypes = {
    noGap: PropTypes.bool,
    gap: PropTypes.number
  }

  static defaultProps = {
    noGap: false,
    gap: 15
  }

  getChildContext () {
    const { noGap, gap, children } = this.props
    return {
      noGap,
      gap,
      childAmt: children.length
    }
  }

  render () {
    return (
      <StyledRow {...this.props} />
    )
  }
}

Row.childContextTypes = {
  noGap: PropTypes.bool,
  gap: PropTypes.number,
  childAmt: PropTypes.number
}

export default Row
