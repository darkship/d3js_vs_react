import {matrix, yTranslateRect, rectangleDefault} from '../config'

/**
 * Rect
 */
class Rect {
  /**
   * constructor
   * @param {number} radian - radian
   * @param {object} speed - speed data
   */
  constructor({radian, speed}) {
    this.radian = radian
    this.speed = speed
  }

  /**
   * build
   */
  build() {
    this.transform = this.getTransform()
    this.width = this.getWidth()
    this.height = this.getHeight()
  }

  /**
   * getTransform
   * @return {string} - matrix transformation
   */
  getTransform() {
    const transformMatrix = matrix(this.radian,
      {
        y: yTranslateRect,
        x: -rectangleDefault.width / 2,
      }
    )
      .toString()
    return `matrix(${transformMatrix})`
  }

  /**
   * getWidth
   * @return {number}
   */
  getWidth() {
    return this.speed.label ? rectangleDefault.width
      : rectangleDefault.width / 2
  }

  /**
   * getHeight
   * @return {number}
   */
  getHeight() {
    return this.speed.label ? rectangleDefault.height
      : rectangleDefault.height / 2
  }
}

export default Rect
