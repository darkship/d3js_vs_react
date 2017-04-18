import {arcDefault, rectangleDefault, matrix} from '../config.js'

/**
 * Arrow
 */
class Arrow {
  /**
   * build
   */
  build() {
    this.points = this.getPoints()
    this.position = this.getPosition()
    this.length = this.getLength()
    this.transform = this.getTransform()
  }

  /**
   * return svg points description
   * @return {string}
   */
  getPoints() {
    const length = this.getLength()
    return `0,0 ${-length},0 ${-length + 20},10
       ${-length + 40},5 0,0`
  }

  /**
   * getStartPosition
   * @return {Number}
   */
  getStartPosition() {
    return arcDefault.startAngle + Math.PI / 2
  }

  /**
   * getPosition
   * @return {Number}
   */
  getPosition() {
    return this.position || this.getStartPosition()
  }

  /**
   * getStartTransform
   * @return {string}
   */
  getStartTransform() {
    const transformMatrix = matrix(this.getStartPosition())
      .toString()
    return `matrix(${transformMatrix})`
  }

  /**
   * getTransform
   * @return {string}
   */
  getTransform() {
    return this.transform || this.getStartTransform()
  }
  /**
   * getLength
   * @return {number}
   */
  getLength() {
    return arcDefault.outerRadius -
    rectangleDefault.height / 1.5 -
    rectangleDefault.marginArcBorder / 2
  }
}

export default Arrow
