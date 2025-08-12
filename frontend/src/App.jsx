import { useState } from 'react'
import Header from './Header'
import SobreMi from './SobreMi'
import Tecnologias from './Tecnologias'
import Proyectos from './Proyectos'
import Contacto from './Contacto'
import './App.css'
import useMode from './hooks/useMode'
function App() {

  const {modo} = useMode()
  
 
  return (
    <div className={`${modo === 'oscuro' ? 'color-fondo-oscuro color-text-oscuro' : 'color-fondo-claro color-texto-claro'}`}>
   
    <Header />
    <div className='w-full flex flex-col items-center '>
    <SobreMi /> 
    <Tecnologias />
    <Proyectos />
    <Contacto />
    </div>
    </div>
  )
}



export default App
