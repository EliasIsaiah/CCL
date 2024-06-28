import { useState } from 'react'
import './App.css'

function App() {

const [input, setInput] = useState();

const handleKeyUpEvent = (e) => {
  setInput(e.target.value);
}

  return (
    <>
      <div className="container">
        <form>
          <label for="words">type something!</label>

          <input onKeyUp={handleKeyUpEvent} type="text" id="words" name="words" />
        </form>
        <div className="demo">
          <h3>style demos</h3>
          <table className="demoTable">
            <tr>
              <th id="styleCol">style</th>
              <th>value</th>
            </tr>
            <tr>
              <td>italic</td>
              <td id="italic" className="left">{input}</td>
            </tr>
            <tr>
              <td>bold</td>
              <td id="bold" className="left">{input}</td>
            </tr>
            <tr>
              <td>code</td>
              <td id="code" className="left"><code id="code">{input}</code></td>
            </tr>
            <tr>
              <td>strikethrough</td>
              <td id="strikethrough" className="left">{input}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
