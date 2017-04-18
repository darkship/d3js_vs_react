import {_} from 'lodash'

const svgDefault = {width: 500, height: 500}

const arcDefault = {
  startAngle: Math.PI + 0.92,
  endAngle: 5 / 2 * Math.PI + 0.62,
  innerRadius: 0,
  outerRadius: 200,
}

const rectangleDefault = {
  width: 8,
  height: 30,
  marginArcBorder: 0,
}

/**
 * Compteur
 */
class Compteur {
  /**
   * Constructor
   * @param {String] containerSelector - css selector
   * @param {object} - config data
   */
  constructor(containerSelector, {svg, arc, rectangle}) {
    this.containerSelector = containerSelector
    this.svgOpts = _.default(svg, svgDefault)
    this.arcOps = _.default(arc, arcDefault)
    this.rectOpts = _.default(rectangle, rectangleDefault)
  }

  /**
   * Transforms -> rotates than translates
   * @param {Number} angle - rotation in radians
   * @param {Number} y - y translate
   * @param {Number} x - x translate
   * @return {[*,*,*,*,*,*]}
   */
  static matrix(angle, {y = 0, x = 0} = {}) {
    return [
      Math.cos(angle),
      Math.sin(angle),
      -Math.sin(angle),
      Math.cos(angle),
      Math.cos(angle) * x - Math.sin(angle) * y,
      Math.sin(angle) * x + Math.cos(angle) * y,
    ]
  }
}

export default Compteur
