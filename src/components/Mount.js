import { Component } from 'react'
import ReactDOM from 'react-dom'

class Mounter extends Component {
  componentDidMount () {
    this.mounter = document.createElement('div')
    document.body.appendChild(this.mounter)

    this.renderComponent()
  }
  componentDidUpdate () {
    this.renderComponent(this.mounter)
  }
  componentWillUnmount () {
    // 在组件卸载的时候，保证弹层也被卸载掉
    this.unmount()
  }
  unmount () {
    ReactDOM.unmountComponentAtNode(this.mounter)
    document.body.removeChild(this.mounter)
  }
  renderComponent () {
    ReactDOM.render(this.props.children, this.mounter)
  }
  render () {
    return null
  }
}

export default Mounter
