import React, { Component, isValidElement } from 'react'
import ReactDOM from 'react-dom'
import Overlay from '../components/Overlay'
import { CSSTransition } from 'react-transition-group'
import {
  StyledDialog,
  StyledDialogInner,
  StyledDialogTitle,
  StyledDialogText,
  StyledDialogButtons,
  StyledDialogInputs,
  StyledDialogInput
} from './Styled'
import { Fade, ZoomIn } from '../styles/animation'
import TouchFeedback from 'rmc-feedback'
import Icon from '../Icon'

const TIME_OUT = 400
const dialogPreference = {
  alert: {
    buttons: [{ text: 'OK' }]
  },
  confirm: {
    buttons: [{ text: 'Cancel' }, { text: 'OK' }]
  },
  create: {
    buttons: null
  },
  login: {
    inputs: [{ type: 'text', placeholder: 'Username' }, { type: 'password', placeholder: 'Password' }],
    buttons: [{ text: 'Cancel' }, { text: 'OK' }]
  },
  password: {
    inputs: [{ type: 'password', placeholder: 'Password' }],
    buttons: [{ text: 'Cancel' }, { text: 'OK' }]
  },
  preloader: {
    buttons: null
  },
  prompt: {
    inputs: [{ type: 'text' }],
    buttons: [{ text: 'Cancel' }, { text: 'OK' }]
  }
}

class Dialog extends Component {
  state = {
    visible: false,
    text: '',
    type: null
  }
  create = (type, textOptional, optional = {}) => {
    // 判断第一个参数是否是字符串或者React元素，
    // 如果不是，第一个参数则为选项参数
    let text = textOptional
    let optSource = optional
    if (textOptional && (typeof textOptional !== 'string') && !isValidElement(textOptional)) {
      optSource = textOptional
      text = textOptional.text
    }
    const { visible, callback, ...rest } = optSource
    this.setState({ visible: true, text, type, callback, ...rest })
  }
  close = (callback, arg1, arg2) => {
    this.setState({ visible: false }, () => {
      setTimeout(() => {
        (typeof callback === 'function') && callback.call(this, arg1, arg2)
        this.overlay.remove()
      }, TIME_OUT)
    })
  }
  handleClick (item, isPrimary) {
    const { callback } = this.state
    const clickCallback = item.callback || (isPrimary && callback)
    const inputsElement = this.refs.inputs
    let arg1, arg2

    if (inputsElement) {
      const inputList = inputsElement.querySelectorAll('input')
      arg1 = inputList[0].value
      arg2 = inputList[1] && inputList[1].value
    }

    this.close(clickCallback, arg1, arg2)
  }
  render () {
    let { visible, text, title = 'Awesome UI', type, buttons, callback, ...rest } = this.state
    const animationStyle = visible ? ZoomIn : Fade
    const { buttons: preferenceBtns, inputs } = dialogPreference[type] || {}
    let btnList
    if (type) {
      btnList = preferenceBtns ? Object.assign([], preferenceBtns, buttons) : buttons
    }
    if (type === 'preloader') {
      title = text || 'Loading...'
      text = <Icon type="loading" size={32} />
      btnList = null
    }

    return (
      <Overlay
        timeout={TIME_OUT}
        visible={visible}
        ref={overlay => (this.overlay = overlay)}
      >
        <CSSTransition
          in={visible}
          timeout={TIME_OUT}
          classNames={animationStyle.className}
        >
          <StyledDialog as={animationStyle} center {...rest}>
            <StyledDialogInner hasButton={btnList}>
              <StyledDialogTitle>{title}</StyledDialogTitle>
              <StyledDialogText>{text}</StyledDialogText>
              {inputs && <StyledDialogInputs ref="inputs">
                {inputs.map((item, index) => <StyledDialogInput key={index}><input type={item.type} placeholder={item.placeholder} /></StyledDialogInput>)}
              </StyledDialogInputs>}
            </StyledDialogInner>
            {btnList && <StyledDialogButtons btnAmt={btnList.length}>
              {btnList.map((item, index) => <TouchFeedback key={index} activeClassName="active-state"><span onClick={() => this.handleClick(item, (index === btnList.length - 1))}>{item.text}</span></TouchFeedback>)}
            </StyledDialogButtons>}
          </StyledDialog>
        </CSSTransition>
      </Overlay>
    )
  }
}

const dialogElement = (type, text, props = {}) => {
  const DialogDom = ReactDOM.render(<Dialog />, document.createElement('div'))
  DialogDom.create(type, text, props)
  return DialogDom
}

const dialog = {}

Object.keys(dialogPreference).forEach(item => {
  dialog[item] = dialogElement.bind(null, item)
})

export default dialog
