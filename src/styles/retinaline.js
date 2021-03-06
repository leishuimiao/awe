import { css } from 'styled-components'
import { getUnitObj } from '../utils/utils'

const borderRadiusStyle = (borderRadius, ratio) => {
  if (!borderRadius) return ''
  const borderRadiusObj = getUnitObj(borderRadius)
  return css`
    border-radius: ${!ratio
    ? borderRadius
    : (borderRadiusObj.number * ratio + borderRadiusObj.unit)};
  `
}

function retinaline (position, color, borderRadius) {
  let result = ''
  switch (position) {
    case 'top':
      result = css`
       &:before {
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          bottom: auto;
          right: auto;
          z-index: 15;
          width: 100%;
          height: 1px;
          background-color: ${color};
          transform-origin: 50% 0%;
          content: '';

          html.pixel-ratio-2 & {
            transform: scaleY(0.5);
          }
          html.pixel-ratio-3 & {
            transform: scaleY(0.33);
          }
          html.pixel-ratio-4 & {
            transform: scaleY(0.25);
          }
      }
     `
      break
    case 'left':
      result = css`
        &:before {
           display: block;
           position: absolute;
           left: 0;
           top: 0;
           bottom: auto;
           right: auto;
           z-index: 15;
           width: 1px;
           height: 100%;
           background-color: ${color};
           transform-origin: 0% 50%;
           content: '';

           html.pixel-ratio-2 & {
            transform: scaleX(0.5);
           }
           html.pixel-ratio-3 & {
            transform: scaleX(0.33);
           }
           html.pixel-ratio-4 & {
            transform: scaleX(0.25);
           }
       }
      `
      break
    case 'bottom':
      result = css`
        &:after {
           display: block;
           position: absolute;
           left: 0;
           bottom: 0;
           right: auto;
           top: auto;
           z-index: 15;
           width: 100%;
           height: 1px;
           background-color: ${color};
           transform-origin: 50% 100%;
           content: '';

           html.pixel-ratio-2 & {
            transform: scaleY(0.5);
           }
           html.pixel-ratio-3 & {
            transform: scaleY(0.33);
           }
           html.pixel-ratio-4 & {
            transform: scaleY(0.25);
           }
       }
      `
      break
    case 'right':
      result = css`
        &:after {
           display: block;
           position: absolute;
           right: 0;
           top: 0;
           left: auto;
           bottom: auto;
           z-index: 15;
           width: 1px;
           height: 100%;
           background-color: ${color};
           transform-origin: 100% 50%;
           content: '';

           html.pixel-ratio-2 & {
            transform: scaleX(0.5);
           }
           html.pixel-ratio-3 & {
            transform: scaleX(0.33);
           }
           html.pixel-ratio-4 & {
            transform: scaleX(0.25);
           }
       }
      `
      break
    case 'round':
      result = css`
        &:after {
          position: absolute;
          left: 0;
          top: 0;
          width: calc(100% + 2px);
          height: calc(100% + 2px);
          box-sizing: border-box;
          border: 1px solid ${color};
          ${borderRadiusStyle(borderRadius)}
          transform-origin: 0 0;
          content: '';
          pointer-events: none;

          html.pixel-ratio-2 & {
              width: calc(100% * 2 + 2px);
              height: calc(100% * 2 + 2px);
              ${borderRadiusStyle(borderRadius, 2)}
              transform: scale(.5, .5);
          }

          html.pixel-ratio-3 & {
              width: calc(100% * 3 + 2px);
              height: calc(100% * 3 + 2px);
              ${borderRadiusStyle(borderRadius, 3)}
              transform: scale(.3333, .3333);
          }

          html.pixel-ratio-4 & {
              width: calc(100% * 4 + 2px);
              height: calc(100% * 4 + 2px);
              ${borderRadiusStyle(borderRadius, 4)}
              transform: scale(.25, .25);
          }
        }
      `
      break
  }
  return result
}

export function removeRetinaline (position) {
  let result = ''
  switch (position) {
    case 'left':
    case 'top':
      result = css`
        &:before {
           display: none;
        }
      `
      break
    case 'right':
    case 'bottom':
      result = css`
        &:after {
           display: none;
        }
      `
      break
  }
  return result
}

export default retinaline
