import {Template} from 'meteor/templating'
import './main.html'
import {_} from 'lodash'
import {
  keyUp,
  keyDown, maxSpeed} from './config.js'

Template.body.onRendered(() => {
  const move = _.debounce((e) => {
    switch (e.keyCode) {
    case keyUp:
      if(window.currentSpeed < maxSpeed) {
        window.currentSpeed += 1
      }
      break
    case keyDown:
      if(window.currentSpeed > 0) {
        window.currentSpeed -= 1
      }
      break
    default:
      break
    }
  }, 0)
  this.$('body').on('keydown', move)
})

