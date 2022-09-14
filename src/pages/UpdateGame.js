import { useState } from 'react'
import { putUpdateGame } from '../services/calls'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const UpdateGame = () => {
  const [formValues, setFormValues] = useState({
    gameName: '',
    gameImage: ''
    //maybe put in creator name later
  })

  let { id } = useParams()

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    putUpdateGame(id, {
      gameName: formValues.gameName,
      gameImage: formValues.gameImage
    })

    setFormValues({
      gameName: '',
      gameImage: ''
    })
    navigate('/LocationList') //change this to game list
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Update Game Name</label>
            <input
              onChange={handleChange}
              name="gameName"
              id="gameName"
              type="text"
              placeholder="Update Game Name Here"
              value={formValues.gameName}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Update Image URL</label>
            <input
              onChange={handleChange}
              name="gameImage"
              id="gameImage"
              type="gameImage"
              placeholder="Update Image URL Here"
              value={formValues.gameImage}
              required
            />
          </div>

          <button disabled={!formValues.gameName}>Update Game</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateGame
