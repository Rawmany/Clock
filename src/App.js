import React, { Component } from 'react';

import './App.css';
import Clock from './Clock';
import ClickLog from './Click-log'
import ClockBtns from "./Clock-btns";

class App extends Component {

  state = {
    isVisible: false,
    timeClick: [],
    isRealTime: true,
    isRightDirection: true,
    seconds: 0,
    minutes: 0,
    hours: 0,
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0,
  }

  componentDidMount() {
    setInterval(() => {
      this.setClock()
    }, 1000);
  }

  setClock = () => {
      const directionSecond = this.state.isRightDirection ? +1 : -1;
      let directionMinutes = 0;
      let directionHours = 0;
      const data = new Date();
      const seconds = data.getSeconds(!this.state.isRealTime ? data.setSeconds(this.state.seconds + directionSecond) : '');

      if(seconds === 0) {
        if (!this.state.isRightDirection) {
          directionMinutes = -1;
        }
        if (this.state.isRightDirection) {
          directionMinutes = +1;
        }
      } else {
        directionMinutes = 0;
      }

      const minutes = !this.state.isRealTime ? this.state.minutes + directionMinutes : data.getMinutes();

    if(minutes === 0) {
      if (!this.state.isRightDirection) {
        directionHours = -1;
      }
      if (this.state.isRightDirection) {
        directionHours = +1;
      }
    } else {
      directionHours = 0;
    }
      const hours = !this.state.isRealTime ? this.state.hours + directionHours : data.getHours()
      this.setState(state => ({
        seconds: seconds,
        minutes: minutes,
        hours: hours,
      }))

    let secondRatio = seconds / 60;
    let minuteRatio = minutes / 60;
    let hourRatio = hours / 12;
    this.setState({secondRatio: secondRatio})
    this.setState({minuteRatio: minuteRatio})
    this.setState({hourRatio: hourRatio});

    }

  showClickTime = () => {
    let result = `${this.state.hours}:${this.state.minutes}:${this.state.seconds}`;
    let arr = this.state.timeClick;
    arr.push(result);
    this.setState(state => ({
      timeClick: arr,
      isVisible: true
    }));

  }

  changeDirection = () => {
    this.setState(state => ({
      isRealTime: false,
      isRightDirection: !this.state.isRightDirection,
    }));
  }

  render() {
    const {secondRatio, minuteRatio, hourRatio, isVisible} = this.state
    return (
        <>
          <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio} />
          <ClockBtns showClickTime={this.showClickTime} changeDirection={this.changeDirection} />
          {isVisible ? <ClickLog timeClick={this.state.timeClick} /> : ''}
        </>
    );
  }
}

export default App;