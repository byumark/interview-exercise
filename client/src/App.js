import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [arabic, setArabic] = useState('')

  const onConvert = async () => {}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Same-Line">
          <input
            type="text"
            className="Zoom"
            value={arabic}
            onChange={e => setArabic(e.target.value)}
          />
          <input
            type="submit"
            className="Zoom"
            onClick={onConvert}
            value="Convert"
          />
        </div>
      </header>
    </div>
  )
}

export default App
