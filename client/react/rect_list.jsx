import React from 'react'
import Rect from './rect'
import Label from './label'
import data from '../data'

/**
 * Compteur
 */
class RectList extends React.Component {
  /**
   * Renders a "Compteur"
   * @return {XML}
   */
  render() {
    return (
     <g transform={this.props.transform}>
      {data.map((d, id) => (<Rect key={id} {...d.rect}/>))}
       {data.map((d, id) => (<Label key={id} {...d.label}/>))}
     </g>
    )
  }
}

export default RectList
