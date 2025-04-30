import { useState } from 'react'
import { Button } from "@chakra-ui/react"
import Header from './Header'
import SobreMi from './SobreMi'
import Tecnologias from './Tecnologias'
import Proyectos from './Proyectos'
import './App.css'

function App() {

  return (
    <>
    <Header />
    <SobreMi />
    <Tecnologias />
    <Proyectos />
    </>
  )
}

export default App
