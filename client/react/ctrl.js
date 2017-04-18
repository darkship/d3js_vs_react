import {Template} from 'meteor/templating'
import './tmpl.html'
import Compteur from './compteur'
import React from 'react'
import ReactDOM from 'react-dom'

Template.react.onRendered(() => {
  ReactDOM.render(React.createElement(Compteur), this.$('#react')[0])
})
