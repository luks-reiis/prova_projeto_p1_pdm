import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm-12 text center'>Hello, Lembretes</div>
      </div>
    </div>
  )
}

export default App
