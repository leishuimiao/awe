import React, { Component } from 'react'
import { render } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import Overlay from './Overlay'

const TIME_OUT = 400

class Modal extends Component {
  constructor () {
    super(...arguments)

    this.state = {
      visible: false,
      insertProps: null
    }
  }
  insert = ({ timeout = TIME_OUT, ...rest }, callback) => {
    const insertProps = {
      timeout,
      ...rest
    }
    this.setState({ insertProps })
    setTimeout(() => {
      this.setState({ visible: true }, callback)
    }, 0)
  }
  remove = (callback, props) => {
    const { timeout, ...rest } = this.state.insertProps
    const insertProps = {
      timeout,
      ...rest,
      ...props
    }
    this.setState({ visible: false, insertProps }, () => {
      setTimeout(() => {
        this.setState({ insertProps: null }, callback)
      }, timeout)
    })
  }
  render () {
    const { visible, insertProps } = this.state
    if (!insertProps) return insertProps

    const { content, timeout, overlayStyle, transitionClassName } = insertProps

    return (
      <Overlay
        timeout={timeout}
        visible={visible}
        overlayStyle={overlayStyle}
      >
        <CSSTransition
          in={visible}
          timeout={timeout}
          classNames={transitionClassName}
        >{content}</CSSTransition>
      </Overlay>
    )
  }
}

export const { insert, remove } = render(<Modal />, document.createElement('div'))
