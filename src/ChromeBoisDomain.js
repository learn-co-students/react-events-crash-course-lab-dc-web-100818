import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    /* This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    let x = event.clientX
    let y = event.clientY
    drawChromeBoiAtCoords(x, y)
  }

  handleKeyPress = (event) => {
  //   if (event.key === 'a'){
  //     resize('+')
  //   } else if (event.key === 's'){
  //     resize('-')
  //   }
  event.key === 'a' ? resize('+') : resize('-')
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
