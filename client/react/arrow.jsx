import React from 'react'
import {requestAnimationFrame,} from '../config.js'
import {arrow} from '../data.js'
/**
 * Compteur
 */
class Arrow extends React.Component {
  /**
   * constructor
   * @param {pobject}props - props
   */
  constructor(props) {
    super(props)
    this.state = {
      points: arrow.points,
      transform: arrow.transform,
    }
    requestAnimationFrame(() => (this.update()))
  }

  /**
   * update - update the arrow transform
   */
  update() {
    this.setState((prevState, props) => ({
      ...prevState,
      transform: arrow.updateTransform(window.currentSpeed),
    }))
    requestAnimationFrame(() => (this.update()))
  }
  /**
   * shouldComponentUpdate
   * @param {object} nextProps
   * @param {object} nextState
   * @return {boolean} - true if transform changed
   */
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.transform !== nextState.transform
  }
  /**
   * Renders a "Compteur"
   * @return {XML}
   */
  render() {
    return (<polyline points={this.state.points}
                      transform={this.state.transform}
                      fill="red">
    </polyline>)
  }
}

export default Arrow
