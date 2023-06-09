import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Pets from './Pets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pets />
     </>
  )
}

export default App
