import { useState } from 'react'
import { useDrag } from 'react-use-gesture'
import Client from '../services/api'

const Icon = (props) => {
  let x = parseInt(props.icon.positonx)
  let y = parseInt(props.icon.positony)
  console.log(typeof props.icon.positionx)
  // console.log(props.icon.positiony)
  console.log(x)
  const [logoPos2, setLogoPos2] = useState({
    x: x,
    y: y
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
                console.log(props.icon.id)
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
