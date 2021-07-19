import React, { Component } from 'react';

import './App.css';
import Clock from './Clock';
import ClickLog from './Click-log'

class App extends Component {

  state = {
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0,
    isVisible: false,
    timeClick: [],
  }

  componentDidMount() {
    setInterval(() => {
      this.setClock()
    }, 1000);
  }



  setClock = () => {
    const currentDate = new Date();
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    this.setState({secondRatio: secondRatio = currentDate.getSeconds() / 60})
    this.setState({minuteRatio: minuteRatio = (secondRatio + currentDate.getMinutes()) / 60})
    // eslint-disable-next-line no-unused-vars
    this.setState({hourRatio: hourRatio = (minuteRatio + currentDate.getHours()) / 12});

  }

  showClickTime = (state) => {

    const currentDate = new Date();
    let clickHour = currentDate.getHours();
    let clickMinute = currentDate.getMinutes();
    let clickSecond = currentDate.getSeconds();
    let result = `${clickHour}:${clickMinute}:${clickSecond}`;
    let arr = this.state.timeClick;
    arr.push(result);
    this.setState(state => ({
      timeClick: arr,
      isVisible: true
    }));

  }

  render() {
    const {secondRatio, minuteRatio, hourRatio, isVisible} = this.state
    return (
        <>
          <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}
                 showClickTime={this.showClickTime}  />
          {isVisible ? <ClickLog timeClick={this.state.timeClick} /> : ''}
        </>
    );
  }
}



export default App;