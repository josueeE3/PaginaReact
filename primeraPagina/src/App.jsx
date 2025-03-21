import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import Accordion from './components/Accordion'
import Alert from './components/Alert'
import Breadcrumb from './components/Breadcrumb'
import Component from './components/Component'
import Card from './components/Card';
import Carousel from './components/Carousel';
import Collapse from './components/Collapse';
import Dropdown from './components/Dropdown';
import Form from './components/Form';
import InputGroup from './components/InputGroup';
import ListGroup from './components/ListGroup';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import NavTabs from './components/NavTabs';
import Pagination from './components/Pagination';
import ProgressBar from './components/ProgressBar';
import Spinner from './components/Spinner';
import Toast from './components/Toast';
import Tool from './components/ToolBar';


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
      <Breadcrumb/> <br />
      <h3>Elemento 5</h3>
      <Component/>
      <h3>Elemento 6</h3>
      <Card /> <br /><br />
      <h3>Elemento 7</h3>
      <Carousel /> <br /><br />
      <h3>Elemento 8</h3>
      <Collapse /> <br /><br />
      <h3>Elemento 9</h3>
      <Dropdown /> <br /><br />
      <h3>Elemento 10</h3>
      <Form /> <br /><br />
      <h3>Elemento 11</h3>
      <InputGroup /> <br /><br />
      <h3>Elemento 12</h3>
      <ListGroup /> <br /><br />
      <h3>Elemento 13</h3>
      <Modal /> <br /><br />
      <h3>Elemento 14</h3>
      <Navbar /> <br /><br />
      <h3>Elemento 15</h3>
      <NavTabs /> <br /><br />
      <h3>Elemento 16</h3>
      <Pagination /> <br /><br />
      <h3>Elemento 17</h3>
      <ProgressBar /> <br /><br />
      <h3>Elemento 18</h3>
      <Spinner /> <br /><br />
      <h3>Elemento 19</h3>
      <Toast /> <br /><br />
      <h3>Elemento 20</h3>
      <Tool /> <br /><br />
    </>
  )
}

export default App
