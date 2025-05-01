import { useState } from 'react'
import { Button } from "@chakra-ui/react"
import Header from './Header'
import SobreMi from './SobreMi'
import Tecnologias from './Tecnologias'
import Proyectos from './Proyectos'
import './App.css'

function App() {

  return (
    <div className='bg-gray-900'>
   
    <Header />
    <SobreMi />
    <Tecnologias />
    <Proyectos />
    </div>
  )
}

export default App
