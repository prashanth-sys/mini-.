import {Component} from 'react'

import './index.css'

class MemoryMatrix extends Component {
  state = {highlightedIndices: []}

  componentDidMount() {
    this.getGridButtons()
  }

  getGridButtons = () => {
    const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(myArray)
    const sortedArray = myArray.sort(() => Math.random() - 0.5)
    const slicedArray = sortedArray.slice(0, 3)
    this.setState({highlightedIndices: slicedArray})
  }

  render() {
    const {highlightedIndices} = this.state
    return (
      <div className="memory-matrix-container">
        <h1 className="game-heading">Memory Matrix</h1>
        <div className="level-container">
          <p className="level">Level-1</p>
          <p className="level">Max Level-00</p>
        </div>
        <div className="game-container">
          {Array.from({length: 9}, index => (
            <button
              key={index}
              type="button"
              className={`button ${
                highlightedIndices.includes(index + 1) ? 'highlight' : ''
              }`}
            >
              .
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default MemoryMatrix
