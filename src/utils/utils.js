import classnames from 'classnames'

export const getClassNameByProps = (type, props = {}, ...rest) => {
  const classNameObj = {}
  let middleware = ''

  if (type && typeof type === 'string') {
    middleware = `-${type}`
    classNameObj[UI_NAME + '-' + type] = true
  }

  for (const prop in props) {
    classNameObj[`${UI_NAME + middleware}-${prop}`] = props[prop]
  }

  return classnames(classNameObj, ...rest)
}
