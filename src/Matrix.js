import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    
    this.state = {
      selectedColor: "#508"
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} colorSelected = {this.colorSelected} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  selectTheColor = (color) => {
    this.setState({
      selectedColor: color
    })
  }

  colorSelected = () => (this.state.selectedColor)
  
  render() {

    return (
      <div id="app">
        <ColorSelector selectTheColor={this.selectTheColor}/>
        <Cell />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
