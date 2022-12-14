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
    const res = await Client.delete(`/api/game/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const putUpdateGame = async (id, body) => {
  console.log(id)
  await Client.put(`/api/game/update/${id}`, body)
}

export const CreateNewIcon = async (data) => {
  try {
    const res = await Client.post('/api/icon/create', data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
