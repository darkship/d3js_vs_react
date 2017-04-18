import React from 'react'
import RectList from './rect_list'
import {svgDefault, arcDefault} from '../config.js'

/**
 * Compteur
 */
class Compteur extends React.Component {
  /**
   * Renders a "Compteur"
   * @return {XML}
   */
  render() {
    const transform = `translate(${arcDefault.outerRadius},
      ${arcDefault.outerRadius})`
    return (<svg width={svgDefault.width} height={svgDefault.height}>
        <RectList transform={transform}/>
    </svg>)
  }
}

export default Compteur

