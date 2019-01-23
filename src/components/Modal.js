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

  modalLock = false;

  modalStack = [];

  addQueue = (insertProps, callback) => {
    if (this.modalLock) {
      this.modalStack.push({ insertProps, callback })
      return true
    } else {
      return false
    }
  }

  clearQueue = () => {
    this.modalLock = false
    if (this.modalStack.length) {
      const { insertProps, callback } = this.modalStack.shift()
      this.insert(insertProps, callback)
    }
  }

  insert = ({ timeout = TIME_OUT, ...rest }, callback) => {
    const insertProps = {
      timeout,
      ...rest
    }
    if (this.addQueue(insertProps, callback)) return
    this.modalLock = true
    this.setState({ insertProps })
    setTimeout(() => {
      this.setState({ visible: true }, callback)
    }, 0)
  }
  remove = (callback, props) => {
    const insertPropsState = this.state.insertProps
    const insertProps = {
      ...insertPropsState,
      ...props
    }
    let timeout = TIME_OUT
    const newState = { visible: false }

    if (insertPropsState) {
      timeout = insertProps.timeout || TIME_OUT
      newState.insertProps = insertProps
    }

    this.setState(newState, () => {
      setTimeout(() => {
        this.setState({ insertProps: null }, () => {
          this.clearQueue()
          callback && callback()
        })
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
