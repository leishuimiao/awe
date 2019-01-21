import { Component } from 'react'
import { createPortal } from 'react-dom'

class Mounter extends Component {
  constructor () {
    super(...arguments)

    const doc = window.document
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)
  }
  unmount () {
    window.document.body.removeChild(this.node)
  }
  componentWillUnmount () {
    this.unmount()
  }
  render () {
    return createPortal(this.props.children, this.node)
  }
}

export default Mounter
