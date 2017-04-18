import React from 'react'

export default ({transform, width, height}) => {
  return(
    <rect transform={transform} fill="white"
          width={width} height={height}></rect>
  )
}
