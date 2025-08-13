import { useState } from 'react'
import Header from './Header'
import SobreMi from './SobreMi'
import Tecnologias from './Tecnologias'
import Proyectos from './Proyectos'
import Contacto from './Contacto'
import useMode from './hooks/useMode'
function App() {

  const {modo} = useMode()
  
 
  return (
    <div className="bg-fondo-oscuro color-text-oscuro">
   
    <Header />
    <div className='w-full flex flex-col items-center bg-gray-600 bg-fondo-oscuro' >
    <SobreMi/> 
    <Tecnologias />
    <Proyectos />
    <Contacto />
    </div>
    </div>
  )
}



export default App
