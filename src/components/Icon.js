import Client from '../services/api'
import { useState, useEffect } from 'react'

const Icon = (props) => {
  let [newUpdate, setNewUpdate] = useState({
    content: '',
    id: ''
  })
  const [updateStatus, toggleUpdateStatus] = useState(false)

  const handleChangeUpdate = (e) => {
    setNewUpdate({ ...newUpdate, [e.target.name]: e.target.value })
  }

  const handleSubmitUpdate = async (e) => {
    e.preventDefault()
    await Client.put(`/api/comments/${newUpdate.id}`, {
      content: newUpdate.content
    })
    document.location.reload()
  }

  return <div></div>
}

export default Icon
