import {yTranslateRect} from '../config'
/**
 * Label
 */
class Label {
  /**
   * constructor
   * @param {Number} radian
   * @param {object} speed
   */
  constructor({radian, speed}) {
    this.speed = speed
    this.radian = radian
  }

  /**
   * build
   */
  build() {
    this.transform = this.getGTransform()
  }

  /**
   * get g transform
   * @return {string}
   */
  getGTransform() {
    const y = yTranslateRect - 20
    const y1 = Math.cos(this.radian + Math.PI / 2) * y
    const x1 = Math.sin(this.radian + Math.PI / 2) * y
    return `translate(${y1},${x1})`
  }
}

export default Label
