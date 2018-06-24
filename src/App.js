import React, { Component } from 'react';
import './App.css';
import Requests from 'superagent';

import Ocupacion from './components/Ocupacion';
import Buses from './components/Buses';
import Informacion from './components/Informacion';

class App extends Component {
  constructor(){
      super();
      this.state = {
        OcupacionchartData:{}
      }
      this.state = {
        BusesData:{}
      }
      this.state = {
        InformacionchartData:{}
      }
    }

    componentWillMount(){
      this.getChartData();
    }

    getChartData(){
      // Ajax calls here
      var url = "endpoints";

      this.setState({
        OcupacionchartData:{
          labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00'],
          datasets:[
            {
              label:'Personas',
              data:[
                45,
                40,
                3,
                15,
                22,
                54,
                45,
                40,
                3,
                15,
                22,
                54
              ],
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ]
            }
          ]
        }
      });

      this.setState({
        BusesData:{
          patente: ['aa11', 'bb22', 'cc33'],
          detencion: ['Se detuvo', 'Se detuvo', 'No se detuvo'],
          hora: ['8:30', '9:00', '9:30'],
          recorrido: ['c01', 'c02', 'c09']
        }
      });

      this.setState({
        InformacionchartData:{
          labels: ['C01', 'C02', 'C09', 'C01', 'C02', 'C09'],
          datasets:[
            {
              label:'Oprimidas',
              data:[
                65,
                99,
                34,
                65,
                99,
                34
              ],
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)'
              ]
            }
          ]
        }
      });
    }




  render() {
    return (
      <div className="App-pagina">
        <div className="App-cabecera">
          <header className="App-header" align="left">
            <img src={require('./logo.jpg')} />
          </header>
        </div>
        <div className="App-contenido">
          <h1 className="Paradero" align="center">Paradero PC164</h1>
          <Ocupacion chartData={this.state.OcupacionchartData} legendPosition="bottom"/>
          <Buses tableData={this.state.BusesData}/>
          <Informacion chartData={this.state.InformacionchartData} legendPosition="bottom"/>
          <h1 className="Paradero" align="center">Paradero PC200</h1>
          <Ocupacion chartData={this.state.OcupacionchartData} legendPosition="bottom"/>
          <Buses tableData={this.state.BusesData}/>
          <Informacion chartData={this.state.InformacionchartData} legendPosition="bottom"/>
        </div>
      </div>
    );
  }
}

export default App;
