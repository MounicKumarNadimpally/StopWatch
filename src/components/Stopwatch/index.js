// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    totalSeconds: 0,
  }

  timeFormat = () => {
    const {totalSeconds} = this.state
    const timeInSeconds = totalSeconds % 60
    const timeInMinutes = Math.floor(totalSeconds / 60)

    const timeInSecondsString =
      `${timeInSeconds}`.length < 2 ? `0${timeInSeconds}` : `${timeInSeconds}`

    const timeInMinutesString =
      `${timeInMinutes}`.length < 2 ? `0${timeInMinutes}` : `${timeInMinutes}`
    return `${timeInMinutesString}:${timeInSecondsString}`
  }

  onStart = () => {
    this.timerId = setInterval(() => {
      const {totalSeconds} = this.state
      this.setState({
        totalSeconds: totalSeconds + 1,
      })
    }, 1000)
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({totalSeconds: 0})
  }

  render() {
    const time = this.timeFormat()
    return (
      <div className="main-container">
        <div className="timer-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="stopwatch-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <h1 className="time">{time}</h1>
            </div>
            <div className="buttons-container">
              <button
                type="button"
                className="button button-start"
                onClick={this.onStart}
              >
                Start
              </button>
              <button
                type="button"
                className="button button-stop"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button button-reset"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
