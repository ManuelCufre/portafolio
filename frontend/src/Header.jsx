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
          <FaCode />
          <h2 className="text-l font-bold monospace">Manuel Agustín Cufré</h2>
        </div>
        <nav>
          <ul className="flex gap-8 items-center relative right-4">
            <li>
              <a href="">Sobre mí</a>
            </li>
            <li>
              <a href="">Tecnologias</a>
            </li>
            <li>
              <a href="">Proyectos</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
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
