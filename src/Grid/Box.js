import React, { Component } from 'react'
import Row from './Row'

export default class Box extends Component {
  render () {
    return (
      <Row {...this.props} noGap isBox />
    )
  }
}
