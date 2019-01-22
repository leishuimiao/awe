import React, { isValidElement } from 'react'
import { insert, remove } from '../components/Modal'
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

let id = 0

function Dialog (type, textOptional, optional = {}) {
  // 判断第一个参数是否是字符串或者React元素，
  // 如果不是，第一个参数则为选项参数
  let text = textOptional
  let optSource = optional
  if (textOptional && (typeof textOptional !== 'string') && !isValidElement(textOptional)) {
    optSource = textOptional
    text = textOptional.text
  }
  let { title = 'Awesome UI', buttons, callback, ...rest } = optSource

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

  const content = (animationStyle) => {
    return (
      <StyledDialog as={animationStyle} center {...rest}>
        <StyledDialogInner hasButton={btnList}>
          <StyledDialogTitle>{title}</StyledDialogTitle>
          <StyledDialogText onTouchMove={e => e.stopPropagation()}>{text}</StyledDialogText>
          {inputs && <StyledDialogInputs id={`input_${id}`}>
            {inputs.map((item, index) => <StyledDialogInput key={index}><input type={item.type} placeholder={item.placeholder} /></StyledDialogInput>)}
          </StyledDialogInputs>}
        </StyledDialogInner>
        {btnList && <StyledDialogButtons btnAmt={btnList.length}>
          {btnList.map((item, index) => <TouchFeedback key={index} activeClassName="active-state"><span onClick={() => handleClick(item, (index === btnList.length - 1))}>{item.text}</span></TouchFeedback>)}
        </StyledDialogButtons>}
      </StyledDialog>
    )
  }

  let close = (cb, ...rest) => {
    const closeCb = cb && cb.bind(null, ...rest)
    remove(closeCb, {
      content: content(Fade),
      transitionClassName: Fade.className
    })
    close = null // release memory
  }

  const handleClick = (item, isPrimary) => {
    const clickCallback = (item.callback || (isPrimary && callback)) || undefined
    const inputsElement = document.getElementById(`input_${id}`)
    let arg1, arg2

    if (inputsElement) {
      const inputList = inputsElement.querySelectorAll('input')
      arg1 = inputList[0].value
      arg2 = inputList[1] && inputList[1].value
    }

    close(clickCallback, arg1, arg2)
  }

  const create = () => {
    id++
    insert({
      content: content(ZoomIn),
      transitionClassName: ZoomIn.className
    })
  }

  create()

  return {
    close
  }
}

const dialog = {}

Object.keys(dialogPreference).forEach(item => {
  dialog[item] = Dialog.bind(null, item)
})

export default dialog
