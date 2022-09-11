import { useEffect, useState } from 'react'
import { GetGames } from '../services/calls'
import { useNavigate } from 'react-router-dom'

const LocationList = ({ user, authenticated }) => {
  const [locations, setLocations] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const handleLocations = async () => {
      const data = await GetGames()

      setLocations(data)
    }
    handleLocations()
  }, [])

  const showLocationDetails = (location) => {
    navigate(`/locations/${location.id}`)
  }

  return (
    <div className="locations">
      {locations.map((location) => (
        <div
          className="location-div"
          onClick={() => showLocationDetails(location)}
          key={location.id}
        >
          <h1 className="location-name">
            <img src={location.gameImage} />
            {location.gameName}
          </h1>
        </div>
      ))}
    </div>
  )
}

export default LocationList
