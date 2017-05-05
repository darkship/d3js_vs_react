import {Template} from 'meteor/templating'
import './tmpl.html'
import d3 from 'd3'
import {
  arcDefault,
  requestAnimationFrame,
  svgDefault} from '../config.js'
import {data, arrow} from '../data'
Template.d3.onRendered(() => {
  try {
    const face = d3.select('#d3')
      .append('svg')
      .attr('width', svgDefault.width)
      .attr('height', svgDefault.height)
      .append('g')
      .attr('transform', `translate(${arcDefault.outerRadius}
      ,${arcDefault.outerRadius})`)

    face.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('transform', (d) => (d.rect.transform))
      .attr('fill', 'white')
      .attr('width', (d) => (d.rect.width))
      .attr('height', (d) => (d.rect.height))

    const g = face.selectAll('g')
      .data(data)
      .enter()
      .append('g')

    g.append('text')
      .attr('text-anchor', 'middle')
      .text((d) => (d.label.speed.label))
      .attr('fill', 'white')
      .attr('transform', (d) => d.label.transform)

    face.append('polyline')
      .attr('id', 'ana-speed')
      .attr('points', arrow.points)
      .attr('fill', 'red')
      .attr('transform', arrow.transform)

    face
      .append('text')
      .attr('id', 'num-speed')
      .text('00')
      .attr('text-anchor', 'middle')
      .attr('dy', 90)
      .attr('font-size', 72)
      .attr('fill', 'white')

    let lastSpeed = -1
    const update = () => {
      if(lastSpeed !== window.currentSpeed) {
        d3.select('#num-speed')
          .transition()
          .text(() => {
            return window.currentSpeed || '00'
          })

        d3.select('#ana-speed')
          // .transition()
          .attr('transform', () => {
            return arrow.updateTransform(window.currentSpeed)
          })
        lastSpeed = window.currentSpeed
      }
      requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  } catch (e) {
    console.error(e)
  }
})
