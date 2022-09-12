import Client from '../services/api'
import { useState, useEffect } from 'react'

const Icon = (props) => {
  let [position, setposition] = useState({
    positionx: '',
    positiony: ''
  })

  return (
    <div className="iconImage">
      <img src="https://en.wikipedia.org/wiki/Smiley"></img>
    </div>
  )
}

export default Icon
