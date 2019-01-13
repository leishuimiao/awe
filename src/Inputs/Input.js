import React, { Component } from 'react'
import Icon from '../Icon'
import PropTypes from 'prop-types'
import TouchFeedback from 'rmc-feedback'
import { CSSTransition } from 'react-transition-group'
import {
  StyledInputWrap,
  StyledClearButtonWrap,
  StyledClearButton,
  StyledInputInfo
} from './Styled'
import { Fade } from '../styles/animation'

const hasClearButtonTypes = [
  'text',
  'password',
  'url',
  'email',
  'number',
  'search',
  'tel'
]
const TIME_OUT = 200
let now = Date.now()
let clearButtonSTO

export default class Input extends Component {
  state = {
    visible: false,
    value: '',
    validate: false,
    isInvalid: false,
    invalidText: ''
  }
  static defaultProps = {
    type: 'text',
    clearButton: true
  }
  static propsType = {
    type: PropTypes.string,
    validate: PropTypes.bool,
    clearButton: PropTypes.bool,
    onValidateChange: PropTypes.bool
  }
  handleChange = (e) => {
    const dom = e.target
    const { value } = dom
    const { onChange, validate } = this.props
    let visible
    if (value) {
      // show
      visible = true
    } else {
      // hidden
      visible = false
    }
    this.setState({ value })
    this.debounceClearnButton(visible, 100)
    onChange && onChange(e)
    validate && this.inputValidation(dom)
  }
  debounceClearnButton = (visible, delay) => {
    const currentTime = Date.now()
    if (currentTime - now >= delay) {
      this.setState({ visible })
    } else {
      if (!visible) {
        clearButtonSTO = setTimeout(() => {
          this.setState({ visible })
        }, 50)
      } else {
        if (clearButtonSTO) {
          clearTimeout(clearButtonSTO)
          clearButtonSTO = null
        }
      }
    }
    now = currentTime
  }
  inputValidation = (dom) => {
    const { validate, errMsg, onValidateChange } = this.props
    if (!validate || !dom.checkValidity) return
    const { isInvalid: stateIsInvalid } = this.state
    let isInvalid
    if (!dom.checkValidity()) {
      // invalid input
      const validationMessage = dom.validationMessage
      isInvalid = true
      this.setState({ isInvalid, invalidText: dom.validity.valueMissing ? validationMessage : (errMsg || validationMessage) })
    } else {
      isInvalid = false
      stateIsInvalid && this.setState({ isInvalid, invalidText: '' })
    }
    onValidateChange && onValidateChange(isInvalid)
  }
  clearInputValue = () => {
    const dom = this.refs.input
    this.setState({ visible: false, value: '' }, () => {
      this.inputValidation(dom)
    })
    dom.focus()
  }
  render () {
    const { visible, value: stateValue, isInvalid, invalidText } = this.state
    const {
      type,
      className: propsClassName,
      clearButton: propsClearButton,
      value: propsValue,
      onChange,
      info,
      errMsg,
      validate,
      onValidateChange,
      ...rest
    } = this.props
    const value = !visible ? stateValue : (propsValue || stateValue)
    const clearButton = (hasClearButtonTypes.indexOf(type) !== -1) ? propsClearButton : false
    let className = propsClassName || ''
    const inputProps = {
      type,
      ...rest
    }
    if (clearButton) {
      className = className ? ' has-clean-button' : 'has-clean-button'
      inputProps.value = value
      inputProps.onChange = this.handleChange
    }
    return (
      <StyledInputWrap className={className} hasClearButton={clearButton}>
        <input {...inputProps} ref="input" />
        {
          clearButton &&
          <CSSTransition
            in={visible}
            timeout={TIME_OUT}
            classNames={Fade.className}
          >
            <StyledClearButtonWrap as={Fade}>
              <TouchFeedback activeClassName="active-state">
                <StyledClearButton onClick={this.clearInputValue}>
                  <Icon type="error-circle" color="#666" size={16} />
                </StyledClearButton>
              </TouchFeedback>
            </StyledClearButtonWrap>
          </CSSTransition>
        }
        {info && <StyledInputInfo isInvalid={isInvalid}>{isInvalid ? invalidText : info}</StyledInputInfo>}
      </StyledInputWrap>
    )
  }
}
