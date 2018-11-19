import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Router from 'react-router-dom/BrowserRouter'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import { CSSTransition } from 'react-transition-group'
import { GlobalStyled, StyledViewsTransitionGroup, StyledView } from './Styled'

export default class App extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    timeout: PropTypes.number
  }
  static defaultProps = {
    routes: [],
    timeout: 400
  }
  componentDidMount () {
  }
  render () {
    const { routes, timeout } = this.props

    return (
      <Router>
        <Route render={({ location, history }) => (
          <StyledViewsTransitionGroup
            className={`${UI_NAME}-views ${(history.action === 'POP') ? 'route-backward' : 'route-forward'}`}
            timeout={timeout}
          >
            <CSSTransition
              key={location.key}
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
        )} />
      </Router>
    )
  }
}
