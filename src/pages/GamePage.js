import { useParams } from 'react-router-dom'
import Client from '../services/api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const GamePage = ({ user, authenticated }) => {
  let { id } = useParams()
  const [locationDetails, setLocationDetails] = useState('')
  let navigate = useNavigate()

  useEffect(() => {
    const getLocation = async () => {
      const res = await Client.get(`/api/game/${id}`)
      setLocationDetails(res.data)
    }

    getLocation()
  }, [id])

  const createGrid = () => {
    let gridArray = []
    for (let y = 0; y < 20; y++) {
      let yClass = 'y' + y

      for (let x = 0; x < 20; x++) {
        let xClass = 'x' + x
        let newArray = [xClass, yClass]
        gridArray.push(newArray)
      }
    }

    // console.log(gridArray)
    return gridArray
  }
  let gridArray = createGrid()

  return (
    <div>
      <div className="location">
        <button className="back" onClick={() => navigate('/LocationList')}>
          Return to Games
        </button>
        <h1 className="locationBeach">{locationDetails.gameName}</h1>

        <div class="grid-container">
          {gridArray.map((gridxy) => (
            <div className={'grid-item ' + gridxy[0] + ' ' + gridxy[1]}>
              <p>{gridxy[0] + ' ' + gridxy[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default GamePage
