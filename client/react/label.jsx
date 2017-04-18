import React from 'react'

export default ({transform, speed}) => {
  return(
    <g>
      <text textAnchor="middle" fill="white"
        transform={transform}>{speed.label}
      </text>
    </g>
  )
}
