import React, { Fragment } from 'react'
import { insert, remove } from '../components/Modal'
import { StyledToast, StyledToastIcon } from './Styled'
import { Fade, SlideToTop, SlideToBottom } from '../styles/animation'
import Icon from '../Icon'

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

function Toast (type, text, {
  duration: propsDuration,
  position = 'center',
  closeButtonText = 'OK',
  iconProps,
  callback,
  closeButton = false,
  ...rest
} = {}) {
  const duration = (propsDuration !== undefined) ? propsDuration : ((type === 'loading') ? 0 : 2000)

  if (closeButton) {
    position = 'bottom'
    text = <Fragment>
      {text && <div>{text}</div>}
      <div onClick={() => close(callback)}>{closeButtonText}</div>
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

  let close = (cb) => {
    remove(cb)
    close = null // release memory
  }

  const create = () => {
    if (typeof duration !== 'number') throw new Error('duration must be a Number')

    insert({
      content: <StyledToast as={effect} position={position} {...rest}>{text}</StyledToast>,
      transitionClassName: effect.className,
      overlayStyle: { background: 'transparent' }
    })

    if (duration !== 0 && !closeButton) {
      setTimeout(() => {
        close(callback)
      }, duration)
    }
  }

  create()

  return {
    close
  }
}

const toast = Toast.bind(this, null)
Object.keys(toastPreference).forEach(item => {
  toast[item] = Toast.bind(this, item)
})

export default toast
