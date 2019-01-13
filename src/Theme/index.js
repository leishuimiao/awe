import * as colors from './colors'

const theme = { ...colors }

export default {
  main: theme.blue,
  ...theme
}

export const mainPadding = '15px'
export const borderColor = '#C8C7CC'
