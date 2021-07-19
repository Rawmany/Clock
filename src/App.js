import React, { Component } from 'react';

import './App.css';
import Clock from './Clock';
import ClickLog from './Click-log'

class App extends Component {

  

   state = {   
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0,
    // timerLog: [1, 2, 3, 4]
    isVisible: false,    
  }  

  updateVisible = () => {
    this.setState({isVisible: true})      
   
    console.log(this.state.isVisible)
  }
 

 componentDidMount () {
   setInterval(() => {
     this.setClock()
   }, 1000);
 }

  
   setClock = () =>{
    
      const currentDate = new Date();
       let secondRatio = currentDate.getSeconds() / 60;
       let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
       let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
      this.setState({secondRatio: secondRatio = currentDate.getSeconds() / 60}) 
       this.setState({minuteRatio: minuteRatio = (secondRatio + currentDate.getMinutes()) / 60}) 
       // eslint-disable-next-line no-unused-vars
       this.setState({hourRatio:hourRatio = (minuteRatio + currentDate.getHours()) / 12});       
      
   }    
  
   saveTimeHandler (state) {
    // const currentDate = new Date();
    console.log(state)

    // this.setState((state) => ) 

   }

  render(){
    const {secondRatio, minuteRatio, hourRatio, isVisible} = this.state
    return (
      <>
      <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio} updateVisible={this.state.updateVisible}/>
      <div>
        <button onClick= {this.saveTimeHandler.bind(this)}>Save Time Stamp</button>
      </div>
      <ClickLog isVisible={isVisible}></ClickLog>
      </>
    );
  }
 
}



export default App;