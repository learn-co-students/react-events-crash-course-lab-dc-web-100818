import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    let x = event.clientX
    let y = event.clientY
    
    drawChromeBoiAtCoords(x,y)

  }

  handleOnClick = () => {
    toggleCycling()
  }

  handleOnKeyPress = (e) => {
    if(e.key === 'a') {
      resize('+')
    } else if(e.key === 's') {
      resize('-')
    }
    console.log(e.key)
  }
  
 
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleOnClick}
        onKeyPress={this.handleOnKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
