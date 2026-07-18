import React from 'react'
import './winner.css'
const Winner = ({winner}) => {
  return (
    <div>{winner ? `Player ${winner} wins!` : null}</div>
  )
}

export default Winner