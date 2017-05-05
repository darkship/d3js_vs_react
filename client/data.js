import {arcDefault, speeds, radianStep} from './config'

import Rect from './models/rect'
import Label from './models/label'
import Arrow from './models/arrow'

const data = speeds.map((speed, idx) => {
  const radian = radianStep * idx + arcDefault.startAngle + Math.PI
  const rect = new Rect({radian, speed})
  rect.build()

  const label = new Label({radian, speed})
  label.build()
  return {radian, speed, rect, label}
})

const arrow = new Arrow()
arrow.build()

export {
  arrow,
  data,
}
