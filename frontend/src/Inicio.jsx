import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { Button } from "@chakra-ui/react";
import { PiBracketsCurly } from "react-icons/pi";
import useMode from "./hooks/useMode";
import { FaLinkedinIn } from "react-icons/fa";
import Cv from "./Manuel Agustín Cufré CV.pdf";
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
                className="!font-bold md:!text-[1.7rem] 2xl:!text-[3rem] text-gray-700 dark:text-white text-2xl "
              >
                Hola soy Manuel Cufré
              </h2>
              <h2 className=" text-teal-500 !font-bold md:!text-[1.4rem] 2xl:!text-[2rem]" >
                Analista de sistemas
              </h2>
              <p
                className="text-gray-700 dark:text-gray-300 text-sm md:!text-[0.9rem] 2xl:!text-[1.2rem]"
              >
                Soy una analista de sistemas especializado en el desarrollo web
                Full-Stack, que disfruta transformar ideas en aplicaciones web
                modernas, dinámicas y fáciles de usar. Mi objetivo en crear
                aplicaciones que combinan funcionalidad, rendimiento y
                diseño atractivo, priorizando siempre la experiencia del
                usuario. Mi enfoque está en desarrollar soluciones escalables y
                eficientes que aporten valor real a cada proyecto.
              </p>
            </div>

            {/* github */}
            <div className="w-[%100] h-40 flex items-center justify-center ">
              <div className="flex gap-2 w-[34%] text-center justify-center items-center rounded-md  ">
                <a
                  href="https://github.com/ManuelCufre"
                  target="_blank"
                  className="!p-2  !border-1 !border-teal-600 hover:!border-teal-500 rounded-full flex items-center justify-center hover:shadow-lg cursor-pointer
                    transition-all duration-300 
                    transform hover:-translate-y-0.5 
                    active:translate-y-0 active:scale-95"
                >
                  <FiGithub
                    className="md:!text-[1rem] 2xl:!text-[1.3rem] text-teal-600 hover:text-teal-500"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/manuel-agustin-cufre/"
                  target="_blank"
                  className="!p-2 !border-1 !border-teal-600 hover:!border-teal-500 rounded-full flex items-center justify-center hover:shadow-lg cursor-pointer
                    transition-all duration-300 
                    transform hover:-translate-y-0.5 
                    active:translate-y-0 active:scale-95"
                >
                  <FaLinkedinIn
                    
                    className="md:!text-[1rem] 2xl:!text-[1.3rem] text-teal-600 hover:text-teal-500"
                  />
                </a>
                <a href={Cv} download={Cv}>
                  <button
                    className="!bg-teal-500 hover:!bg-teal-500 cursor-pointer
                    text-black 
                    dark:text-white
                    !py-1.5 !px-3
                    rounded-sm 
                    shadow-md hover:shadow-lg 
                    transition-all duration-300 
                    transform hover:-translate-y-0.5 
                    active:translate-y-0 active:scale-95
                    flex items-center justify-center gap-2
                    group"
                  >
                    <IoMdDownload className="md:!text-[1.2rem] 2xl:!text-[1.2rem]" />
                    <span className="md:!text-[0.7rem] 2xl:!text-[1rem]">DescargarCV</span>
                  </button>
                </a>
                <a href="mailto:manuelcufree@gmail.com?subject=Contacto desde tu portafolio">
                  <button
                    className="!bg-teal-500 hover:!bg-teal-500 
                    font-medium 
                    !py-1.5 !px-3 cursor-pointer
                    rounded-sm 
                    shadow-md 
                    hover:shadow-lg 
                    transition-all duration-300 
                    transform hover:-translate-y-0.5 
                    active:translate-y-0 active:scale-95
                    flex items-center justify-center gap-2
                    group"
                  >
                    <IoIosMail className="md:!text-[1.1rem] 2xl:!text-[1.2rem]"/>
                    <span className="md:!text-[0.7rem] 2xl:!text-[1rem]">Email</span>
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
