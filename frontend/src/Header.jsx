import { FaCode } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import useMode from "./hooks/useMode";
export default function Header() {
  const { modo, setModo, handleModo } = useMode();

  return (
    <header className="w-full z-1000 h-14  fixed flex items-center justify-center  text-white">
      <div className="w-[65%] h-full relative top-2 flex items-center justify-between px-8 bg-fondo-oscuro-div rounded-xl borde">
        <div className="flex justify-center items-center gap-2 relative left-4">
          <FaCode className="text-teal-400"/>
          <h2 className="text-l font-bold nata-sans" style={{ fontSize: "0.9rem" }}>Manuel Agustín Cufré</h2>
        </div>
        <nav>
          <ul
            className="flex gap-8 items-center relative right-4 nata-sans"
            style={{ fontSize: "0.9rem" }}
          >
            {/* Inicio */}
            <li className="group relative">
              <a
                href="#inicio"
                className="hover:text-teal-400 transition-colors"
              >
                Inicio
              </a>
              <div
                className="
      absolute bottom-0 left-0 h-[2px] bg-teal-500 rounded-md 
      w-0 group-hover:w-full transition-all duration-300
    "
              ></div>
            </li>

            {/* Curriculum */}
            <li className="group relative">
              <a
                href="#curriculum"
                className="hover:text-teal-400 transition-colors"
              >
                Curriculum
              </a>
              <div
                className="
      absolute bottom-0 left-0 h-[2px] bg-teal-500 rounded-md 
      w-0 group-hover:w-full transition-all duration-300
    "
              ></div>
            </li>

            {/* Proyectos */}
            <li className="group relative">
              <a
                href="#proyectos"
                className="hover:text-teal-400 transition-colors"
              >
                Proyectos
              </a>
              <div
                className="
      absolute bottom-0 left-0 h-[2px] bg-teal-500 rounded-md 
      w-0 group-hover:w-full transition-all duration-300
    "
              ></div>
            </li>

            {/* Contacto */}
            <li className="group relative">
              <a
                href="#contacto"
                className="hover:text-teal-400 transition-colors"
              >
                Contacto
              </a>
              <div
                className="
      absolute bottom-0 left-0 h-[2px] bg-teal-500 rounded-md 
      w-0 group-hover:w-full transition-all duration-300
    "
              ></div>
            </li>

            {/* Botón de modo oscuro/claro (sin subrayado) */}
            <li>
              <IconButton
                aria-label="Search database"
                onClick={() => handleModo()}
              >
                {modo === "oscuro" ? (
                  <MdOutlineDarkMode />
                ) : (
                  <MdOutlineLightMode />
                )}
              </IconButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
  function ToggleDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    );
  }
}
