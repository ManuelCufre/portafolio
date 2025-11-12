import { useState } from 'react'
import Header from './Header'
import Inicio from './Inicio'
import Curriculum from './Curriculum'
import Proyectos from './Proyectos'
import Contacto from './Contacto'
import Footer from './Footer'
import useMode from './hooks/useMode'
function App() {

  const {modo} = useMode()
  
 
  return (
    <div >
   
    <Header />
    <div className='w-full flex flex-col items-center bg-[#FAFAFA] dark:bg-[#1E1E1F]' >
    <Inicio /> 
    <Proyectos />
    <Curriculum />
    <Contacto />
    <Footer />
    </div>
    </div>
  )
}



export default App
