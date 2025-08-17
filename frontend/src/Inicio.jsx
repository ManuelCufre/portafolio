import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import Imagen from "./img/carbon.png";
import { FaCode } from "react-icons/fa6";
import { Button } from "@chakra-ui/react";
import { PiBracketsCurly } from "react-icons/pi";
import useMode from "./hooks/useMode";
import { FaLinkedinIn } from "react-icons/fa";
import Cv from "./Manuel Agustín Cufré CV.pdf"
export default function Inicio() {
  const { modo } = useMode();

  return (
    <div
      className="w-[65%] min-h-[90vh] flex justify-center items-center fira-code"
      id="inicio"
    >
      <div className="w-full min-h-[50vh] flex gap-8 justify-center items-center rounded-2xl  bg-[#FAFAFA] dark:bg-[#1E1E1F] ">
        <div className="flex relative top-16 gap-16 items-center nata-sans">
          <div className="w-[100%]">
            <div className="flex flex-col ">
              <h2
                className="bold text-gray-700 dark:text-white"
                style={{ fontSize: "3rem" }}
              >
                Hola soy Manuel Cufré
              </h2>
              <h2 className="bold text-teal-500" style={{ fontSize: "2rem" }}>
                Analista de sistemas
              </h2>
              <p
                className="text-lg text-gray-700 dark:text-gray-300"
                style={{ fontSize: "1.2rem" }}
              >
                Soy un desarrollador web apasionado por la tecnología y el
                aprendizaje continuo. Me encanta crear aplicaciones web que sean
                funcionales y atractivas. Siempre estoy buscando nuevos desafíos
                y oportunidades para mejorar mis habilidades. Soy un
                desarrollador web apasionado por la tecnología y el aprendizaje
                continuo. Me encanta crear aplicaciones web que sean funcionales
                y atractivas. Siempre estoy buscando nuevos desafíos y
                oportunidades para mejorar mis habilidades.
              </p>
            </div>

            {/* github */}
            <div className="w-[%100] h-40 flex items-center justify-center ">
              <div className="flex gap-2 w-[34%] text-center justify-center items-center rounded-md !py-4 ">
                <a
                  className="w-10 h-10 !border-1 !border-teal-600 hover:!border-teal-500 rounded-full flex items-center justify-center hover:shadow-lg cursor-pointer
                    transition-all duration-300 
                    transform hover:-translate-y-0.5 
                    active:translate-y-0 active:scale-95"
                >
                  <FiGithub
                    size={20}
                    className="text-teal-600 hover:text-teal-500"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/manuel-agustin-cufre/"
                  target="_blank"
                  className="w-10 h-10 !border-1 !border-teal-600 hover:!border-teal-500 rounded-full flex items-center justify-center hover:shadow-lg cursor-pointer
                    transition-all duration-300 
                    transform hover:-translate-y-0.5 
                    active:translate-y-0 active:scale-95"
                >
                  <FaLinkedinIn
                    size={20}
                    className="text-teal-600 hover:text-teal-500 "
                  />
                </a>
                <a href={Cv} download={Cv}>
                  <button
                    className="!bg-teal-500 hover:!bg-teal-500 
                    text-black 
                    dark:text-white
                    font-medium 
                    h-9 w-40 cursor-pointer
                    rounded-sm 
                    shadow-md hover:shadow-lg 
                    transition-all duration-300 
                    transform hover:-translate-y-0.5 
                    active:translate-y-0 active:scale-95
                    flex items-center justify-center gap-2
                    group"
                  >
                    <IoMdDownload size={24} />
                    Descargar CV
                  </button>
                </a>
                <a href="mailto:manuelcufree@gmail.com?subject=Contacto desde tu portafolio">
                  <button
                    className="!bg-teal-500 hover:!bg-teal-500 
                    font-medium 
                    h-9 w-30 cursor-pointer
                    rounded-sm 
                    shadow-md 
                    hover:shadow-lg 
                    transition-all duration-300 
                    transform hover:-translate-y-0.5 
                    active:translate-y-0 active:scale-95
                    flex items-center justify-center gap-2
                    group"
                  >
                    <IoIosMail size={20} />
                    Email
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
