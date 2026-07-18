import React, {useState} from 'react'
import './Tile.css'
const Tile = ({value, onClick, className = ''}) => {


  return (
    <div className={`tile ${className} ${value === 'X' ? 'x' : value === 'O' ? 'o' : 'empty'}`}
    onClick={onClick}>
      {value}
    </div>
  )
}

export default Tile