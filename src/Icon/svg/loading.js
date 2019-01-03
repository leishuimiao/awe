import React from 'react'

export function Loading ({ size, color }) {
  const lineId = 'line_' + Date.now()
  return (
    <svg width={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <line id={lineId} x1="60" x2="60" y1="7" y2="27" stroke={color} strokeWidth="11" strokeLinecap="round" />
      </defs>
      <g>
        <use xlinkHref={`#${lineId}`} opacity=".27" />
        <use xlinkHref={`#${lineId}`} opacity=".27" transform="rotate(30 60,60)" />
        <use xlinkHref={`#${lineId}`} opacity=".27" transform="rotate(60 60,60)" />
        <use xlinkHref={`#${lineId}`} opacity=".27" transform="rotate(90 60,60)" />
        <use xlinkHref={`#${lineId}`} opacity=".27" transform="rotate(120 60,60)" />
        <use xlinkHref={`#${lineId}`} opacity=".27" transform="rotate(150 60,60)" />
        <use xlinkHref={`#${lineId}`} opacity=".37" transform="rotate(180 60,60)" />
        <use xlinkHref={`#${lineId}`} opacity=".46" transform="rotate(210 60,60)" />
        <use xlinkHref={`#${lineId}`} opacity=".56" transform="rotate(240 60,60)" />
        <use xlinkHref={`#${lineId}`} opacity=".66" transform="rotate(270 60,60)" />
        <use xlinkHref={`#${lineId}`} opacity=".75" transform="rotate(300 60,60)" />
        <use xlinkHref={`#${lineId}`} opacity=".85" transform="rotate(330 60,60)" />
      </g>
    </svg>
  )
}
