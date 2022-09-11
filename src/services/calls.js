import Client from './api'

export const CreateNewGame = async (data) => {
  try {
    const res = await Client.post('/api/game/create', data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetGames = async () => {
  try {
    const res = await Client.get('/api/game/view')
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteGame = async (id) => {
  try {
    const res = await Client.get(`/api/game/view/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
