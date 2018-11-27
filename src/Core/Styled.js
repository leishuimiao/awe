import styled, { createGlobalStyle } from 'styled-components'
import theme from '../Theme'
import { TransitionGroup } from 'react-transition-group'

const GlobalStyled = createGlobalStyle`
  html, body, #root{
    position: relative;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  body {
    font-family: PingFang SC ,PingHei, DroidSansFallback, Hiragino Sans GB, STHeiti, Roboto, Noto, Helvetica Neue, Helvetica, Arial, SimSun, sans-serif;
    margin: 0;
    padding: 0;
    color: #000;
    font-size: 14px;
    line-height: 1.4;
    width: 100%;
    background: #fff;
    overflow: hidden;
    -webkit-highlight: none;
    -webkit-user-select: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
  @media all and (width:1024px) and (height:691px) and (orientation:landscape) {
    html, body, #root {
        height: 671px;
    }
  }
  @media all and (width:1024px) and (height:692px) and (orientation:landscape) {
      html, body, #root  {
          height: 672px;
      }
  }

  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout:none;
    -webkit-text-size-adjust:100%;
  }

  a, input, textarea, select {
    outline: 0;
  }

  a {
    text-decoration: none;
    color: ${theme.main};
  }

  p {
    margin: 1em 0;
  }

  img {
    vertical-align: bottom;
    max-width: 100%;
  }
`
const StyledViewsTransitionGroup = styled(TransitionGroup)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &.route-forward {
      .slide-enter {
        transform: translate3d(100%, 0, 0);
      }

      .slide-enter.slide-enter-active {
        z-index: 10;
        transform: translate3d(0, 0, 0);
        transition: transform ${props => props.timeout}ms ease;
      }

      .slide-enter-done {
        z-index: 10;
      }

      .slide-exit {
        transform: translate3d(0, 0, 0);
      }

      .slide-exit.slide-exit-active {
        z-index: 1;
        transform: translate3d(-20%, 0, 0);
        transition: transform ${props => props.timeout}ms ease;
      }

      .slide-exit-done {
        visibility: hidden;
      }
    }

    &.route-backward {
      .slide-enter {
        transform: translate3d(-20%, 0, 0);
      }
      .slide-enter.slide-enter-active {
        z-index: 1;
        transform: translate3d(0, 0, 0);
        transition: transform ${props => props.timeout}ms ease;
      }

      .slide-enter-done {
        z-index: 10;
      }

      .slide-exit {
        transform: translate3d(0, 0, 0);
      }

      .slide-exit.slide-exit-active {
        z-index: 10;
        transform: translate3d(100%, 0, 10px);
        transition: transform ${props => props.timeout}ms ease;
      }
      .slide-exit-done {
        visibility: hidden;
      }
    }
`

const StyledView = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const StyledPage = styled.div.attrs({
  className: `${UI_NAME}-page`
})`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5000;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #efeef3;
`

const StyledPageContent = styled.div.attrs({
  className: `${UI_NAME}-page-content`
})`
  position: relative;
  box-sizing: border-box;
  z-index: 1;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position;
`

export {
  GlobalStyled,
  StyledViewsTransitionGroup,
  StyledView,
  StyledPage,
  StyledPageContent
}
