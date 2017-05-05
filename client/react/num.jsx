import React from 'react'
import {requestAnimationFrame} from '../config.js'
/**
 * Compteur
 */
class Num extends React.Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props)

    this.state = {
      speed: '00',
    }
  }

  /**
   * componentDidMount
   */
  componentDidMount() {
    this.update()
  }

  /**
   * updates numeric speed
   */
  update() {
    this.setState({speed: window.currentSpeed || '00'})
    requestAnimationFrame(() => {
      this.update()
    })
  }
  /**
   * shouldComponentUpdate
   * @param {object} nextProps
   * @param {object} nextState
   * @return {boolean} - true if transform changed
   */
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.speed !== nextState.speed
  }
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
