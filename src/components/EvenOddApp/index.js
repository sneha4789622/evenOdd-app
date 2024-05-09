// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container d-flex flex-column justify-content-center">
        <h1 className="count">Count 0</h1>
        <p className="paragraph">Count is Even</p>
        <button type="button" onClick={this.onIncrement} className="button">
          Increment
        </button>
        <p className="description">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}
export default EvenOddApp
