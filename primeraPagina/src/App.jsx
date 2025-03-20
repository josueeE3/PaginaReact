import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import Accordion from './components/Accordion'
import Alert from './components/Alert'
import Breadcrumb from './components/Breadcrumb'
import Component from './components/Component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Elemento 1</h3>  
      <Button titulo={"Boton"}/> <br /><br />
      <h3>Elemento 2</h3>
      <Accordion titulo={"Accordion"}/> <br /><br />
      <h3>Elemento 3</h3>
      <Alert titulo={"Alerta"}/> <br /><br />
      <h3>Elemento 4</h3>
      <Breadcrumb/> <br /><br />
      <h3>Elemento 5</h3>
      <Component/>
    </>
  )
}

export default App
