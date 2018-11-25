import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledPage } from './Styled'

export default class Page extends Component {
  static propsType = {
    title: PropTypes.string
  }
  componentWillMount () {
    document.title = this.props.title
  }
  render () {
    return (
      <StyledPage {...this.props} />
    )
  }
}
