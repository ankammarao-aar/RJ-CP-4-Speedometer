// Write your code here
import {Component} from 'react'
import './index.css'

const Button = i => {
  const {text, className, onClick} = i
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    const speed = count
    if (speed <= 190) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBreak = () => {
    const {count} = this.state
    const speed = count
    if (speed >= 10) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img"
          alt="speedometer"
        />
        <div className="card">
          <h1 className="head">
            Speed is {count}mph
          </h1>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        </div>
        <div>
          <Button
            text="Accelerate"
            className="accelerate"
            onClick={this.onAccelerate}
          />
          <Button text="Apply Brake" className="brake" onClick={this.onBreak} />
        </div>
      </div>
    )
  }
}

export default Speedometer
