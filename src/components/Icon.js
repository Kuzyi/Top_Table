// import Client from '../services/api'
// import { useState } from 'react'
// import { useDrag } from 'react-use-gesture'

// const Icon = (props) => {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   })

//   const blindLogoPos = useDrag((params) => {
//     setPosition({
//       x: params.offset[0],
//       y: params.offset[1]
//     })
//   })

//   return (
//     <div
//       {...blindLogoPos()}
//       style={{
//         position: 'relative',
//         x: position.y,
//         y: position.x
//       }}
//     >
//       {/* <img
//         width="100"
//         height="100"
//         src="https://www.pngfind.com/pngs/m/0-226_image-checkmark-green-check-mark-circle-hd-png.png"
//       /> */}
//       <div className="icon"></div>
//     </div>
//   )
// }

// export default Icon

import { useState } from 'react'
import { useDrag } from 'react-use-gesture'

const Icon = () => {
  const [logoPos2, setLogoPos2] = useState({
    x: 0,
    y: 0
  })

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
      >
        <div className="icon"></div>
        {/* <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/813/182/1cc.png" /> */}
      </div>
    </div>
  )
}

export default Icon
