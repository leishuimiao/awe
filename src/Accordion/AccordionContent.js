import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { StyledAccordionContent } from './Styled'

export default class AccordionContent extends Component {
  constructor () {
    super(...arguments)

    this.content = createRef()
  }
  static contextTypes = {
    activeIndex: PropTypes.number,
    itemIndex: PropTypes.number
  }
  componentDidMount () {
    this.toggle(this.context)
  }
  componentWillReceiveProps (nextProps, nextContext) {
    this.toggle(nextContext)
  }
  open = () => {
    const { current } = this.content
    current.style.height = current.scrollHeight + 'px'
  }
  close = () => {
    this.content.current.style.height = 0
  }
  toggle = (context) => {
    const { activeIndex, itemIndex } = context
    if (activeIndex === itemIndex) {
      this.open()
    } else {
      this.close()
    }
  }
  render () {
    return (
      <StyledAccordionContent {...this.props} ref={this.content} />
    )
  }
}
