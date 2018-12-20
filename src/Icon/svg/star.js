import React from 'react'

export function Star ({ size, color }) {
  return (
    <svg className="icon" width={size} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M1055.706 393.064H639.674L512 6.887 384.326 393.064H-31.706l340.302 237.629-132.529 386.177L512 777.542l335.933 239.328-132.771-386.177 340.544-237.629z" />
    </svg>
  )
}

export function StarO ({ size, color }) {
  return (
    <svg className="icon" width={size} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M1055.706 393.064H639.674L512 6.887 384.326 393.064H-31.706l340.302 237.629-132.529 386.177L512 777.542l335.933 239.328-132.771-386.177 340.544-237.629zm-284.96 519.92L512 728.511 253.254 912.983l103.401-297.339L94.511 434.328h317.971L512 135.047l99.518 299.28h317.97L667.346 615.402l103.4 297.582z" />
    </svg>
  )
}
