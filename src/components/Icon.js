import { useState, useEffect } from 'react'
import { useDrag } from 'react-use-gesture'
import Client from '../services/api'

const Icon = (props) => {
  // console.log(props.icon)
  // let x = props.icon.positonx
  // let y = props.icon.positony
  // console.log(props.icon.positionx)
  // console.log(props.icon.positiony)
  // console.log(x)
  const [logoPos2, setLogoPos2] = useState({
    // x: props.icon.positionx,
    // y: props.icon.positiony
    x: 0,
    y: 0
  })

  const [changeIcon, toggleChangeIcon] = useState(false)

  const blindLogoPos2 = useDrag((params) => {
    setLogoPos2({
      x: params.offset[0],
      y: params.offset[1]
    })

    //   const handleSubmitUpdate = async (e) => {
    //     e.preventDefault()
    //     await Client.put(`/api/icon/move/${props.icon.id}`, {
    //       positionx: logoPos2.x,
    //       positiony: logoPos2.y
    //     })
    //   }
    //   handleSubmitUpdate()
  })

  // useEffect(() => {
  //   props.getIcons()
  // }, [props.icon.id])

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
          if (changeIcon === false) {
            toggleChangeIcon(true)
          } else {
            toggleChangeIcon(false)
          }
        }}
      >
        <div className="icon">
          <img src={props.icon.iconImage} />
          {changeIcon ? (
            <button
              onClick={async () => {
                // console.log(props.icon.id)
                console.log('click')
                const iconToDelete = parseInt(props.icon.id)
                await Client.delete(`/api/icon/${iconToDelete}`)

                document.location.reload()
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
