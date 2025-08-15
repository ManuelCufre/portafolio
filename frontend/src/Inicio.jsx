import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import Imagen from './img/carbon.png'
import { FaCode } from "react-icons/fa6";
import { Button } from "@chakra-ui/react";
import { PiBracketsCurly } from "react-icons/pi";
import useMode from "./hooks/useMode";
import { FaLinkedinIn } from "react-icons/fa";
export default function Inicio() {
  const { modo } = useMode();

  return (
    <div
      className="w-[65%] min-h-[90vh] flex justify-center items-center fira-code"
      id="inicio"
    >
      <div className="w-full min-h-[50vh] flex gap-8 justify-center items-center rounded-2xl  bg-[#DBDBDB] text-black dark:bg-[#1E1E1F] dark:text-white">
        <div className="flex relative top-16 gap-16 items-center nata-sans">
          <div className="w-[50%]">
            <div className="flex flex-col ">
              <h2 className="bold text-white">Hola soy Manuel Cufré</h2>
              <h2 className="bold">Analista de sistemas</h2>
            </div>
            <p className="text-lg  text-gray-300">
              Soy un desarrollador web apasionado por la tecnología y el
              aprendizaje continuo. Me encanta crear aplicaciones web que sean
              funcionales y atractivas. Siempre estoy buscando nuevos desafíos y
              oportunidades para mejorar mis habilidades. Soy un desarrollador
              web apasionado por la tecnología y el aprendizaje continuo. Me
              encanta crear aplicaciones web que sean funcionales y atractivas.
              Siempre estoy buscando nuevos desafíos y oportunidades para
              mejorar mis habilidades.
            </p>

            {/* github */}
            <div className="flex gap-2">
              <div className="w-10 h-10 !border-1 !border-teal-500 rounded-full flex items-center justify-center">
                <FiGithub size={20} className="text-teal-500"/>
              </div>
              <div className="w-10 h-10 !border-1 !border-teal-500 rounded-full flex items-center justify-center">
                <FaLinkedinIn size={20} className="text-teal-500"/>
              </div>
            </div>

            {/*  */}
            <div className=" flex gap-4 ">
              <a href="">
                <Button colorPalette="teal" variant="solid">
                  <IoMdDownload size={24} />
                  Descargar CV
                </Button>
              </a>
              <a href="">
                <Button
                  bgColor={"black"}
                  color="teal.600"
                  borderColor={"teal.600"}
                  variant="solid"
                >
                  <IoIosMail size={20} />
                  Email
                </Button>
              </a>
            </div>
          </div>
          <div className="w-[50%] rounded-2xl !border-1 !border-gray-600"> 
           <img src={Imagen} alt="" className="rounded-2xl"/>
          </div>
        </div>
      </div>
    </div>
  );
}
