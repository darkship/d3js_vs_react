import React from 'react'
import {requestAnimationFrame} from '../config.js'
/**
 * Compteur
 */
class Num extends React.Component {
  /**
   * constructor
   */
  constructor(props) {
    super(props)

    this.state = {
      speed: '00',
    }
  }
  componentDidMount(){
    this.update()
  }
  update(){
    this.setState({ speed: window.currentSpeed || '00'})
    requestAnimationFrame(() => {
      this.update()
    })
  }
  setState
  /**
   * Renders a "Compteur"
   * @return {XML}
   */
  render() {
    return (<text textAnchor="middle" dy="90" fontSize="72" fill="white">
      {this.state.speed}
      </text>)
  }
}

export default Num
