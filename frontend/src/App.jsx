import Header from './Header'
import Inicio from './Inicio'
import Curriculum from './Curriculum'
import Proyectos from './Proyectos'
import Servicios from './Servicios'
import Habilidades from './Habilidades'
import Contacto from './Contacto'
import Footer from './Footer'
import useMode from './hooks/useMode'

function App() {
  const { modo } = useMode()

  return (
    <div className="w-full h-screen overflow-hidden">
      

      {/* CONTENEDOR CON SCROLL SNAP */}
      <div
        className="
          w-full
          h-screen
          overflow-y-scroll
          scroll-smooth
          snap-y snap-proximity
          flex flex-col items-center
          bg-[#FAFAFA] dark:bg-[#1E1E1F]
        "
      >
        <Header />
        <Inicio />
        <Proyectos />
        <Servicios />
        <Habilidades />
        <Contacto />
        <Footer />
      </div>
    </div>
  )
}

export default App
