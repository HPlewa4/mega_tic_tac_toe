import React from 'react'
import './ResetButton.css'
const ResetButton = ({resetGame}) => {
  return (
    <button className="reset-button" onClick={resetGame}>
      Reset Game
    </button>
  )
}

export default ResetButton