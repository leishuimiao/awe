import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledAccordionToggle } from './Styled'

export default class AccordionToggle extends Component {
  static contextTypes = {
    activeIndex: PropTypes.number,
    itemIndex: PropTypes.number,
    updateActive: PropTypes.func
  }
  handleClick = (e) => {
    const { onClick } = this.props
    const { activeIndex, itemIndex, updateActive } = this.context
    if (activeIndex !== itemIndex) {
      updateActive(itemIndex)
    } else {
      updateActive(null)
    }
    onClick && onClick(e)
  }
  render () {
    return (
      <StyledAccordionToggle {...this.props} onClick={this.handleClick} />
    )
  }
}
