import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Toggler from './Toggler'
import ToggleCounter from './ToggleCounter'

function App() {  

  return (
    <>
    <div>
      <Counter />
      ----------------------------------------------------------------------
      <Toggler />
      ----------------------------------------------------------------------
      <ToggleCounter />
    </div>      
    </>
  )
}

export default App
