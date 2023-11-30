import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './ShoppingList'

const data = [
  { id: 1, name: "eggs", quantity: 12, completed: false },
  { id: 2, name: "milk", quantity: 1, completed: true },
  { id: 3, name: "chicken breasts", quantity: 4, completed: false },
  { id: 4, name: "carrots", quantity: 6, completed: true }
];

function App() {
  return (
    <>
      <ShoppingList items={data}/>
    </>
  )
}

export default App;