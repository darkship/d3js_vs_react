const keyUp = 38
const keyDown = 40

const requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame

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

const speeds = [
  {speed: 0, label: '0'},
  {speed: 10},
  {speed: 20},
  {speed: 30, label: '30'},
  {speed: 40},
  {speed: 50, label: '50'},
  {speed: 60},
  {speed: 70, label: '70'},
  {speed: 80},
  {speed: 90, label: '90'},
  {speed: 100},
  {speed: 110, label: '110'},
  {speed: 120},
  {speed: 130, label: '130'},
  {speed: 130},
  {speed: 150, label: '150'},
  {speed: 160},
  {speed: 170, label: '170'},
  {speed: 180},
  {speed: 190, label: '190'},
  {speed: 200},
  {speed: 210},
  {speed: 220, label: '220'},
  {speed: 230},
  {speed: 240},
  {speed: 250, label: '250'},
]

const maxSpeed = 250
const arcSize = (arcDefault.endAngle - arcDefault.startAngle)
const radianStep = arcSize / (speeds.length - 1)
const radianSpeedCoef = arcSize / maxSpeed

const yTranslateRect = arcDefault.outerRadius -
  rectangleDefault.height -
  rectangleDefault.marginArcBorder

const matrix = (angle, {y = 0, x = 0} = {}) => [
  Math.cos(angle),
  Math.sin(angle),
  -Math.sin(angle),
  Math.cos(angle),
  Math.cos(angle) * x - Math.sin(angle) * y,
  Math.sin(angle) * x + Math.cos(angle) * y,
]

export {
  arcDefault,
  keyDown,
  keyUp,
  matrix,
  radianSpeedCoef,
  radianStep,
  rectangleDefault,
  requestAnimationFrame,
  speeds,
  svgDefault,
  yTranslateRect,
  maxSpeed,
}
