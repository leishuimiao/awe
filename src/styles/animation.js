import styled, { css, keyframes } from 'styled-components'

const CssOpacity = css`
  opacity: ${props => props.opacity || 1};
`
const CssCenterTransform = (value) => {
  return css`
    transform:${props => props.center ? ' translate3d(-50%, -50%, 0) ' : ' '}${value};
  `
}

const Fade = styled.div`
  visibility: hidden;
  opacity: 0;
  will-change: opacity;

  &.fade-enter {
    visibility: visible;
    opacity: 0.01;
  }

  &.fade-enter.fade-enter-active {
    ${CssOpacity}
    transition: opacity .4s;
  }

  &.fade-enter-done {
    visibility: visible;
    ${CssOpacity}
  }

  &.fade-exit {
    ${CssOpacity}
    visibility: visible;
  }

  &.fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity .4s;
  }

  &.fade-exit-done {
    visibility: hidden;
    opacity: 0.01;
  }
`
Fade.className = 'fade'

const SlideToTop = styled.div`
  transform: translate(0, -100%);
  opacity: 0;
  will-change: transform, opacity;

  &.slide-to-top-enter {
    transform: translate(0, -100%);
    opacity: 0.01;
  }

  &.slide-to-top-enter-active {
    transform: translate(0, 0);
    opacity: 1;
    transition: all .4s;
  }

  &.slide-to-top-enter-done {
    transform: translate(0, 0);
    opacity: 1;
  }

  &.slide-to-top-exit {
    opacity: 1;
    transform: translate(0, 0);
  }

  &.slide-to-top-exit-active {
    transition: all .4s;
    opacity: 0.01;
    transform: translate(0, -100%);
  }

  &.slide-to-top-exit-done {
    transform: translate(0, -100%);
    opacity: 0;
  }
`
SlideToTop.className = 'slide-to-top'

const SlideToBottom = styled.div`
  transform: translate(0, 100%);
  opacity: 0;
  will-change: transform, opacity;

  &.slide-to-bottom-enter {
    transform: translate(0, 100%);
    opacity: 0.01;
  }

  &.slide-to-bottom-enter-active {
    transform: translate(0, 0);
    opacity: 1;
    transition: all .4s;
  }

  &.slide-to-bottom-enter-done {
    transform: translate(0, 0);
    opacity: 1;
  }

  &.slide-to-bottom-exit {
    opacity: 1;
    transform: translate(0, 0);
  }

  &.slide-to-bottom-exit-active {
    transition: all .4s;
    opacity: 0.01;
    transform: translate(0, 100%);
  }

  &.slide-to-bottom-exit-done {
    transform: translate(0, 100%);
    opacity: 0;
  }
`
SlideToBottom.className = 'slide-to-bottom'

const ZoomIn = styled.div`
  ${CssCenterTransform('scale(1.185)')}
  opacity: 0;
  will-change: transform, opacity;

  &.zoom-in-enter {
    ${CssCenterTransform('scale(1.185)')}
    opacity: 0.01;
  }

  &.zoom-in-enter-active {
    ${CssCenterTransform('scale(1)')}
    opacity: 1;
    transition: all .4s;
  }

  &.zoom-in-enter-done {
    ${CssCenterTransform('scale(1)')}
    opacity: 1;
  }

  &.zoom-in-exit {
    ${CssCenterTransform('scale(1)')}
    opacity: 1;
  }

  &.zoom-in-exit-active {
    ${CssCenterTransform('scale(1.185)')}
    opacity: 0.01;
    transition: all .4s;
  }

  &.zoom-in-exit-done {
    ${CssCenterTransform('scale(1.185)')}
    opacity: 0;
  }
`
ZoomIn.className = 'zoom-in'

export {
  Fade,
  SlideToTop,
  SlideToBottom,
  ZoomIn
}

export const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`
export const loadingAnimate = css`
  animation: ${rotate360} 1s steps(12, end) infinite;
`
