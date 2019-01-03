import { css } from 'styled-components'

function retinaline (position, color) {
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
