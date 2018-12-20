import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Overlay from '../components/Overlay'
import { CSSTransition } from 'react-transition-group'
import { StyledToast, StyledToastIcon } from './Styled'
import { Fade, SlideToTop, SlideToBottom } from '../styles/animation'
import Icon from '../Icon'

const TIME_OUT = 400
const effects = {
  top: SlideToTop,
  center: Fade,
  bottom: SlideToBottom
}
const toastPreference = {
  success: 'success-circle-o',
  info: 'info-circle-o',
  warning: 'warning-o',
  error: 'error-circle-o',
  failure: 'emotion-sad',
  loading: 'loading'
}

class Toast extends Component {
  state = {
    visible: false,
    text: '',
    position: 'center',
    duration: 2000,
    type: null,
    closeButton: false,
    iconProps: null
  }
  create = (type, text, { visible, duration = 2000, callback, closeButton = false, ...rest }) => {
    this.setState({ visible: true, text, type, closeButton, callback, ...rest })

    if (typeof duration !== 'number') throw new Error('duration must be a Number')

    if (duration !== 0 && !closeButton) {
      setTimeout(() => {
        this.destroy(callback)
      }, duration)
    }
  }
  destroy = (callback) => {
    this.setState({ visible: false }, () => {
      setTimeout(() => {
        callback && callback.call(this)
        this.overlay.remove()
      }, TIME_OUT)
    })
  }
  render () {
    let { visible, text, position, type, iconProps, closeButton, callback, closeButtonText = 'OK', ...rest } = this.state
    if (closeButton) {
      position = 'bottom'
      text = <Fragment>
        {text && <div>{text}</div>}
        <div onClick={() => this.destroy(callback)}>{closeButtonText}</div>
      </Fragment>
    }

    if (type || iconProps) {
      const IconType = type ? toastPreference[type] : iconProps.type
      position = 'center'
      text = <Fragment>
        <StyledToastIcon><Icon type={IconType} size={36} color="#fff" {...iconProps} /></StyledToastIcon>
        {text && <div>{text}</div>}
      </Fragment>
    }

    const effect = effects[position]

    return (
      <Overlay
        timeout={0}
        visible={visible}
        overlayStyle={{ background: 'transparent' }}
        ref={overlay => (this.overlay = overlay)}
      >
        <CSSTransition
          in={visible}
          timeout={TIME_OUT}
          classNames={effect.className}
        >
          <StyledToast as={effect} position={position} {...rest}>{text}</StyledToast>
        </CSSTransition>
      </Overlay>
    )
  }
}

const toastElement = (type, text, props = {}) => {
  const ToastDOM = ReactDOM.render(<Toast />, document.createElement('div'))
  ToastDOM.create(type, text, props)
  return ToastDOM
}

const toast = toastElement.bind(this, null)
Object.keys(toastPreference).forEach(item => {
  toast[item] = toastElement.bind(this, item)
})

export default toast
