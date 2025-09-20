import { useState } from 'react'
import LembreteLista from './LembreteLista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-12'>
          <LembreteLista />
        </div>
      </div>
    </div>
  )
}

export default App
