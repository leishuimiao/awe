import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledAccordionItem } from './Styled'
import classnames from 'classnames'

export default class AccordionItem extends Component {
  static propsType = {
    onToggle: PropTypes.func
  }
  static childContextTypes = {
    itemIndex: PropTypes.number
  }
  static contextTypes = {
    activeIndex: PropTypes.number
  }
  getChildContext = () => ({
    itemIndex: this.props.index
  })
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return nextContext.activeIndex !== this.context.activeIndex
  }
  componentWillUpdate (nextProps, nextState, nextContext) {
    const { onToggle, index } = this.props
    if (!onToggle) return
    if (nextContext.activeIndex === index) {
      onToggle(true)
    } else if (this.context.activeIndex === index && nextContext.activeIndex !== index) {
      onToggle(false)
    }
  }
  render () {
    const { className, onToggle, index, ...rest } = this.props
    return (
      <StyledAccordionItem className={classnames({
        [`${UI_NAME}-accordion-item-opened`]: (index === this.context.activeIndex)
      }, className)} {...rest} />
    )
  }
}
