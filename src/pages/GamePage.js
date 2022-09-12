import { useParams } from 'react-router-dom'
import Client from '../services/api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateNewIcon } from '../services/calls'

const GamePage = ({ user, authenticated }) => {
  let { id } = useParams()
  const [locationDetails, setLocationDetails] = useState('')
  const [createIconStatus, toggleCreateIconStatus] = useState(false)
  const [newIcon, setNewIcon] = useState({
    iconName: '',
    iconImage: ''
  })
  const [icons, setIcons] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const getLocation = async () => {
      const res = await Client.get(`/api/game/${id}`)
      setLocationDetails(res.data)

      console.log(id)
    }

    const getIcons = async () => {
      const res = await Client.get(`/api/icon/${id}`)
      setIcons(res.data)
      // console.log(res.data)
    }

    getLocation()
    getIcons()
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

    return gridArray
  }
  let gridArray = createGrid()

  const handleChangeIcon = (e) => {
    setNewIcon({ ...newIcon, [e.target.name]: e.target.value })
  }

  const handleSubmitIcon = async (e) => {
    e.preventDefault()
    await CreateNewIcon({
      iconName: newIcon.iconName,
      iconImage: newIcon.iconImage,
      positionx: '0',
      positiony: '0',
      gameId: id
    })

    setNewIcon({
      gameName: '',
      gameImage: ''
    })
    toggleCreateIconStatus(false)
  }

  return (
    <div>
      <div className="location">
        <button className="back" onClick={() => navigate('/LocationList')}>
          Return to Games
        </button>
        <h1 className="locationBeach">{locationDetails.gameName}</h1>
        <button
          onClick={() => {
            toggleCreateIconStatus(true)
          }}
        >
          Create Game Icon
        </button>
        {createIconStatus ? (
          <div className="signin col">
            <div className="card-overlay centered">
              <form className="col" onSubmit={handleSubmitIcon}>
                <div className="input-wrapper">
                  <label htmlFor="iconName">iconName</label>
                  <input
                    onChange={handleChangeIcon}
                    name="iconName"
                    id="iconName"
                    type="text"
                    placeholder="enter icon name"
                    value={newIcon.iconName}
                    required
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="iconImage">iconImage</label>
                  <input
                    onChange={handleChangeIcon}
                    name="iconImage"
                    id="iconImage"
                    type="iconImage"
                    placeholder="enter icon image link here"
                    value={newIcon.iconImage}
                    required
                  />
                </div>
                <button
                  // onClick={handleSubmitIcon}
                  disabled={!newIcon.iconName || !newIcon.iconImage}
                >
                  Create Icon
                </button>
              </form>
            </div>
          </div>
        ) : (
          <p className="overflow-wrap">do nothing</p>
        )}

        <div class="grid-container">
          {gridArray.map((gridxy) => (
            <div className={'grid-item ' + gridxy[0] + ' ' + gridxy[1]}></div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default GamePage
