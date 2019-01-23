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
    activeIndex: PropTypes.number
  }
  static defaultProps = {
    activeIndex: null
  }
  componentDidMount () {
    this.setState({
      activeIndex: this.props.activeIndex
    })
  }
  componentDidUpdate (prevProps) {
    const { activeIndex } = this.props
    if (prevProps.activeIndex !== activeIndex) {
      this.setState({
        activeIndex: activeIndex
      })
    }
  }
  getChildContext = () => ({
    activeIndex: this.state.activeIndex,
    updateActive: activeIndex => this.setState({ activeIndex })
  })
  render () {
    const { children, activeIndex, ...rest } = this.props
    return (
      <StyledAccordion {...rest}>
        {Children.toArray(children).map((element, index) => cloneElement(element, { index }))}
      </StyledAccordion>
    )
  }
}
