import { useState } from 'react'
import { useDrag } from 'react-use-gesture'
import Client from '../services/api'

const Icon = (props) => {
  const [logoPos2, setLogoPos2] = useState({
    x: 0,
    y: 0
  })

  const [changeIcon, toggleChangeIcon] = useState(false)

  const blindLogoPos2 = useDrag((params) => {
    setLogoPos2({
      x: params.offset[0],
      y: params.offset[1]
    })
  })

  return (
    <div>
      <div
        {...blindLogoPos2()}
        style={{
          position: 'relative',
          top: logoPos2.y,
          left: logoPos2.x
        }}
        onClick={() => {
          toggleChangeIcon(true)
        }}
      >
        <div className="icon">
          <img src={props.icon.iconImage} />
          {changeIcon ? (
            <button
              onClick={async () => {
                const iconToDelete = parseInt(props.icon.id)
                await Client.delete(`/api/icon/${iconToDelete}`)
                // document.location.reload() we need to find a way to update the page on this change
              }}
            >
              Delete Icon
            </button>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Icon
