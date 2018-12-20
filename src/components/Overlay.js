import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Mount from './Mount'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { Fade } from '../styles/animation'

const StyledOverlay = styled(Fade)`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10000;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
`

class Overlay extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
    timeout: PropTypes.number
  }
  static defaultProps = {
    timeout: 400
  }
  componentDidMount () {
    this.disableScroll()
  }
  componentDidUpdate () {
    this.disableScroll()
  }
  disableScroll () {
    let height, overflow
    if (this.props.visible) {
      height = '100%'
      overflow = 'hidden'
    } else {
      height = ''
      overflow = ''
    }
    document.body.style.height = height
    document.body.style.overflow = overflow
  }
  componentWillUnmount () {
    this.remove()
  }
  remove = () => {
    this.mount.unmount()
    document.body.style.height = ''
    document.body.style.overflow = ''
  }
  render () {
    const { children, visible, onCancel, overlayStyle, timeout } = this.props
    return (
      <Mount ref={mount => (this.mount = mount)}>
        <Fragment>
          <CSSTransition
            in={visible}
            timeout={timeout}
            classNames="fade"
            className={`${UI_NAME}-overlay`}
          >
            <StyledOverlay style={overlayStyle} onClick={onCancel} onTouchMove={e => e.preventDefault()} />
          </CSSTransition>
          {children}
        </Fragment>
      </Mount>
    )
  }
}

export default Overlay
