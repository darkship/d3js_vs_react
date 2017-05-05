import React from 'react'
import {svgDefault, arcDefault} from '../config.js'
import Rect from './rect'
import Label from './label'
import {data} from '../data'
import NumSpeed from './num'
import AnaSpeed from './arrow'

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
      <g transform={transform}>
        {data.map((d, id) => (<Rect key={id} {...d.rect}/>))}
        {data.map((d, id) => (<Label key={id} {...d.label}/>))}
        <NumSpeed/>
        <AnaSpeed/>
      </g>
    </svg>)
  }
}

export default Compteur

