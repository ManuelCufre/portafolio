import { FaCode } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import useMode from "./hooks/useMode";
export default function Header() {
  const { modo, setModo, handleModo } = useMode();

  return (
    <header className="w-full z-1000 h-16 px-10 color-fondo text-white fixed sombra flex items-center justify-center">
      <div className="w-[70%] z-1000 h-full color-fondo flex justify-between items-center ">
        <div className="flex justify-center items-center gap-2">
          <FaCode />
          <h2 className="text-l font-bold monospace">Manuel Agustín Cufré</h2>
        </div>
        <nav className="header__nav">
          <ul className="flex gap-4 items-center">
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
