import { useState } from 'react'
// import { RegisterUser } from '../services/Auth'
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
    await RegisterUser({
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
            <label htmlFor="username">Name</label>
            <input
              onChange={handleChange}
              name="gameName"
              id="gameName"
              type="text"
              placeholder="John Smith"
              value={formValues.gameName}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="gameImage"
              id="gameImage"
              type="gameImage"
              placeholder="enter image URL here"
              value={formValues.gameImage}
              required
            />
          </div>

          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateGame
