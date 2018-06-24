import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

import './Ocupacion.css';

class Ocupacion extends Component {

  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: false
  }


  render() {
    return (
      <div className="Ocupacion-contenido" align="center">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Ocupación',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default Ocupacion
