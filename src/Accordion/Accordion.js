import React, { Component, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { StyledAccordion } from './Styled'

export default class Accordion extends Component {
  state = {
    activeIndex: null
  }
  static childContextTypes = {
    activeIndex: PropTypes.number,
    updateActive: PropTypes.func
  }
  static propTypes = {
    defaultActiveIndex: PropTypes.number
  }
  static defaultProps = {
    defaultActiveIndex: null
  }
  componentDidMount () {
    this.setState({
      activeIndex: this.props.defaultActiveIndex
    })
  }
  getChildContext = () => ({
    activeIndex: this.state.activeIndex,
    updateActive: activeIndex => this.setState({ activeIndex })
  })
  render () {
    const { children, defaultActiveIndex, ...rest } = this.props
    return (
      <StyledAccordion {...rest}>
        {Children.toArray(children).map((element, index) => cloneElement(element, { index }))}
      </StyledAccordion>
    )
  }
}
