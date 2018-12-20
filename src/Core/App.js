import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import HashRouter from 'react-router-dom/HashRouter'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import { CSSTransition } from 'react-transition-group'
import { GlobalStyled, StyledViewsTransitionGroup, StyledView } from './Styled'

let Router = BrowserRouter

export default class App extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    timeout: PropTypes.number,
    type: PropTypes.oneOf(['browser', 'hash']),
    onInit: PropTypes.func,
    onChange: PropTypes.func
  }
  static defaultProps = {
    routes: [],
    timeout: 400,
    type: 'browser'
  }
  componentWillMount () {
    const { onInit } = this.props
    onInit && onInit()
  }
  routerChange = (location, history, match) => {
    const { onChange } = this.props
    onChange && onChange(location, history, match)
  }
  render () {
    const { routes, timeout, type } = this.props

    if (type === 'hash') Router = HashRouter

    return (
      <Router>
        <Route render={({ location, history, match }) => {
          this.routerChange(location, history, match)
          return (
            <StyledViewsTransitionGroup
              className={`${UI_NAME}-views ${(history.action === 'POP') ? 'route-backward' : 'route-forward'}`}
              timeout={timeout}
            >
              <CSSTransition
                key={location.pathname}
                classNames="slide"
                timeout={timeout}
              >
                <StyledView className={`${UI_NAME}-view`}>
                  <Switch location={location}>
                    {
                      routes.map((conf, index) => {
                        if (conf.path === '/') {
                          conf.exact = true
                        }
                        return <Route key={`router_${index}`} {...conf} />
                      })
                    }
                  </Switch>
                </StyledView>
              </CSSTransition>
              <GlobalStyled />
            </StyledViewsTransitionGroup>
          )
        }} />
      </Router>
    )
  }
}
