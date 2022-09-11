import { useState } from 'react'
import { CreateNewGame } from '../services/calls'
import { useNavigate } from 'react-router-dom'

const CreateGame = () => {
  const [formValues, setFormValues] = useState({
    gameName: '',
    gameImage: ''
    //maybe put in creator name later
  })

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formValues)
    await CreateNewGame({
      gameName: formValues.gameName,
      gameImage: formValues.gameImage
    })

    setFormValues({
      gameName: '',
      gameImage: ''
    })
    navigate('/') //change this to game list
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Game Name</label>
            <input
              onChange={handleChange}
              name="gameName"
              id="gameName"
              type="text"
              placeholder="Enter Game Name Here"
              value={formValues.gameName}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Game Image URL</label>
            <input
              onChange={handleChange}
              name="gameImage"
              id="gameImage"
              type="gameImage"
              placeholder="Enter Image URL Here"
              value={formValues.gameImage}
              required
            />
          </div>

          <button disabled={!formValues.gameName}>Create Game</button>
        </form>
      </div>
    </div>
  )
}

export default CreateGame
