import "./rude_color.css"
import { useState } from 'react'

const RudeColor = () => {

  const getColorOpinion = (color) => {
    switch (color) {
      case "red": return "you're an arsonist"
      case "blue": return "i'm thirsty for water"
      case "yellow": return "you are the sun"
      case "ultraviolet": return "you do not exist"
      default: return "sorry your opinion is wrong"
    }
  }

  const [inputValue, setInputValue] = useState()
  const [colorOpinion, setColorOpinion] = useState()

  const handleEvent = (event) => {
    let favoriteColor = event.target.value;
    setInputValue(favoriteColor)
    setColorOpinion(getColorOpinion(favoriteColor))
  }

  return (
    <>
      <div id="wrapper">
        <label>favorite color:</label>
        <input onKeyUp={handleEvent} type="text" />
        <br/>
        <label>rude response:</label>
        <h2>{colorOpinion}</h2>
        <h1>{inputValue}</h1>
      </div>
    </>
  )
}

export default RudeColor