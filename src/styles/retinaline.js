import { css } from 'styled-components'

function retinaline (position, color) {
  let result = ''
  switch (position) {
    case 'top':
      result = css`
       &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: auto;
          right: auto;
          height: 1px;
          width: 100%;
          background-color: ${color};
          display: block;
          z-index: 15;

          html.pixel-ratio-2 & {
            top: -0.5px;
            transform: scaleY(0.5);
          }
          html.pixel-ratio-3 & {
            top: -0.33px;
            transform: scaleY(0.33);
          }
          html.pixel-ratio-4 & {
            top: -0.25px;
            transform: scaleY(0.25);
          }
      }
     `
      break
    case 'left':
      result = css`
        &:before {
           content: '';
           position: absolute;
           left: 0;
           top: 0;
           bottom: auto;
           right: auto;
           width: 1px;
           height: 100%;
           background-color: ${color};
           display: block;
           z-index: 15;

           html.pixel-ratio-2 & {
            left: -0.5px;
            transform: scaleX(0.5);
           }
           html.pixel-ratio-3 & {
            left: -0.33px;
            transform: scaleX(0.33);
           }
           html.pixel-ratio-4 & {
            left: -0.25px;
            transform: scaleX(0.25);
           }
       }
      `
      break
    case 'bottom':
      result = css`
        &:after {
           content: '';
           position: absolute;
           left: 0;
           bottom: 0;
           right: auto;
           top: auto;
           height: 1px;
           width: 100%;
           background-color: ${color};
           display: block;
           z-index: 15;

           html.pixel-ratio-2 & {
            bottom: -0.5px;
            transform: scaleY(0.5);
           }
           html.pixel-ratio-3 & {
            bottom: -0.33px;
            transform: scaleY(0.33);
           }
           html.pixel-ratio-4 & {
            bottom: -0.25px;
            transform: scaleY(0.25);
           }
       }
      `
      break
    case 'right':
      result = css`
        &:after {
           content: '';
           position: absolute;
           right: 0;
           top: 0;
           left: auto;
           bottom: auto;
           width: 1px;
           height: 100%;
           background-color: ${color};
           display: block;
           z-index: 15;

           html.pixel-ratio-2 & {
            right: -0.5px;
            transform: scaleX(0.5);
           }
           html.pixel-ratio-3 & {
            right: -0.33px;
            transform: scaleX(0.33);
           }
           html.pixel-ratio-4 & {
            right: -0.25px;
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
