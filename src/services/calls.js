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
