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

  return (
    <div className="location">
      <button className="back" onClick={() => navigate('/LocationList')}>
        Return to Games
      </button>
      <h1 className="locationBeach">{locationDetails.gameName}</h1>
    </div>
  )
}
export default GamePage
