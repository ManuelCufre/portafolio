import { FaCode } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import useMode from "./hooks/useMode";
export default function Header() {
  const { modo, setModo, handleModo } = useMode();

  return (
    <header className="w-full z-1000 h-10 md:h-12 2xl:h-14 [@media(min-width:1536px)_and_(max-width:1919px)]:h-12 fixed flex items-center justify-center ">
      <div className="w-[90%] md:w-[65%] h-full relative top-2 flex items-center justify-between px-8  rounded-xl text-black bg-[#F2F2F2] hover:shadow-sm dark:hover:shadow-gray-700 !border-1 !border-gray-300 dark:bg-[#242424] dark:text-white  dark:!border-gray-600">
        <div className="flex justify-center items-center gap-2 relative left-4">
          <FaCode className="text-teal-400" />
          <h2
            className="text-l font-bold nata-sans !text-[0.7rem] md:!text-[0.8rem] 2xl:!text-[0.9rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[0.8rem]"
            style={{ fontSize: "0.9rem" }}
          >
            Manuel Agustín Cufré
          </h2>
        </div>
        <nav>
          <ul
            className="hidden sm:flex gap-8 items-center relative right-4 nata-sans  sm:!text-[0.8rem] 2xl:!text-[0.9rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[0.8rem]"
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
                aria-label="Toggle color mode"
                variant="ghost"
                size="sm"
                onClick={() => handleModo()}
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                className="hover:text-teal-400 transition-colors"
              >
                {modo === "dark" ? (
                  <MdOutlineDarkMode size={20} />
                ) : (
                  <MdOutlineLightMode size={20} />
                )}
              </IconButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
