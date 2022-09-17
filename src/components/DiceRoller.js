const DiceRoller = (props) => {
  // const [changeIcon, toggleChangeIcon] = useState(false)

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max - 1)) + 1
  }

  return (
    <div className="gameButtonItem">
      <button
        onClick={() => {
          alert(getRandomInt(props.dice))
        }}
      >
        Roll D{props.dice}
      </button>
    </div>
  )
}

export default DiceRoller
