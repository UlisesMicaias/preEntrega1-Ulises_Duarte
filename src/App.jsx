import { useState } from 'react'
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';
import './global/styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting= 'Primera preEntrega :)'/>
    </>
  )
}

export default App
