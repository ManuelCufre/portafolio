import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { PiUserCircleLight } from "react-icons/pi";
import { IoBagOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { PiBracketsCurly } from "react-icons/pi";

import useMode from "./hooks/useMode";

export default function Curriculum() {
  const { modo } = useMode();

  const tecnologias = [
    {
      nombre: "HTML",
      icono: (
        <FaHtml5 className="!text-[2.2rem] lg:!text-[2.2rem] xl:!text-[3rem] 2xl:!text-[3.3rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[3.1rem]" />
      ),
    },
    {
      nombre: "CSS",
      icono: (
        <FaCss3Alt className="!text-[2.2rem] lg:!text-[2.2rem] xl:!text-[3rem] 2xl:!text-[3.3rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[3.1rem]" />
      ),
    },
    {
      nombre: "JavaScript",
      icono: (
        <IoLogoJavascript className="!text-[2.2rem] lg:!text-[2.2rem] xl:!text-[3rem] 2xl:!text-[3.3rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[3.1rem]" />
      ),
    },
    {
      nombre: "Python",
      icono: (
        <FaPython className="!text-[2.2rem] lg:!text-[2.2rem] xl:!text-[3rem] 2xl:!text-[3.3rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[3.1rem]" />
      ),
    },
    {
      nombre: "React.js",
      icono: (
        <FaReact className="!text-[2.2rem] lg:!text-[2.2rem] xl:!text-[3rem] 2xl:!text-[3.3rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[3.1rem]" />
      ),
    },
    {
      nombre: "Node.js",
      icono: (
        <DiNodejs className="!text-[2.2rem] lg:!text-[2.2rem] xl:!text-[3rem] 2xl:!text-[3.3rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[3.1rem]" />
      ),
    },
    {
      nombre: "Express.js",
      icono: (
        <SiExpress className="!text-[2.2rem] lg:!text-[2.2rem] xl:!text-[3rem] 2xl:!text-[3.3rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[3.1rem]" />
      ),
    },
    {
      nombre: "Supabase",
      icono: (
        <RiSupabaseFill className="!text-[2.2rem] lg:!text-[2.2rem] xl:!text-[3rem] 2xl:!text-[3.3rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[3.1rem]" />
      ),
    },
    {
      nombre: "Tailwind",
      icono: (
        <RiTailwindCssFill className="!text-[2.2rem] lg:!text-[2.2rem] xl:!text-[3rem] 2xl:!text-[3.3rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[3.1rem]" />
      ),
    },
    {
      nombre: "Bootstrap",
      icono: (
        <FaBootstrap className="!text-[2.2rem] lg:!text-[2.2rem] xl:!text-[3rem] 2xl:!text-[3.3rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[3.1rem]" />
      ),
    },
    {
      nombre: "Git",
      icono: (
        <FaGitAlt className="!text-[2.2rem] lg:!text-[2.2rem] xl:!text-[3rem] 2xl:!text-[3.3rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[3.1rem]" />
      ),
    },
    {
      nombre: "MySQL",
      icono: (
        <FaDatabase className="!text-[2.2rem] lg:!text-[2.2rem] xl:!text-[3rem] 2xl:!text-[3.3rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[3.1rem]" />
      ),
    },
  ];
  return (
    <>
      <div
        className="w-[90%] md:w-[65%] min-h-[62rem] sm:min-h-[100vh] flex flex-col justify-center gap-3 md:gap-0 [@media(min-width:1536px)_and_(max-width:1919px)]:gap-0 items-center fira-code "
        id="curriculum"
      >
        <div className="flex flex-col justify-center">
          <h1 className="!font-bold monospace text-black dark:text-white !text-[1.3rem] lg:!text-[1.3rem] 2xl:!text-[1.5rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.25rem]">
            CURRICULUM();
          </h1>
          <div className=" w-33 h-[3px] bg-teal-500 rounded-md"></div>
        </div>
        <div className="w-full min-h-[70vh] flex justify-around items-center  gap-8 rounded-2xl">
          <div className="w-[100%] min-h-[100%] grid sm:grid-cols-2 gap-4 md:gap-8">
            {/*Sobre mi*/}
            <div className="h-[9em] md:h-[8rem] xl:h-[9rem] 2xl:h-[12rem] [@media(min-width:1536px)_and_(max-width:1919px)]:h-[10.5rem] flex justify-center items-center rounded-2xl text-black !border-1 !border-gray-300 bg-[#F2F2F2] hover:shadow-sm dark:hover:shadow-gray-700 dark:!border-gray-600 dark:bg-[#242424] dark:text-white">
              <div className="w-[90%] h-[82%] flex flex-col gap-4 2xl:gap-6">
                <div className="flex items-center gap-4">
                  <PiUserCircleLight className="text-teal-500 lg:!text-[1.3rem] 2xl:!text-[2rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.5rem]" />
                  <h3
                    className="!font-bold nata-sans text-gray-800 dark:text-white lg:!text-[1rem] xl:!text-[1.1rem] 2xl:!text-[1.5rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.25rem] 
"
                  >
                    Sobre mí
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 nata-sans !text-[0.65rem] lg:!text-[0.6rem] xl:!text-[0.7rem] 2xl:!text-[0.9rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[0.8rem]">
                  Soy un estudiante comprometido con mi aprendizaje y
                  crecimiento en el ámbito laboral. Busco formar parte de una
                  empresa donde pueda aplicar mis conocimientos, adquirir nuevas
                  habilidades y contribuir al logro de objetivos comunes.
                </p>
              </div>
            </div>

            {/*Formación*/}
            <div className="w-full h-[9em] 2xl:h-[12rem] [@media(min-width:1536px)_and_(max-width:1919px)]:h-[10.5rem] flex justify-center items-center rounded-2xl text-black !border-1 !border-gray-300 bg-[#F2F2F2] hover:shadow-sm dark:hover:shadow-gray-700 dark:!border-gray-600 dark:bg-[#242424] dark:text-white">
              <div className="w-[90%] h-[82%] flex flex-col gap-4 2xl:gap-6 ">
                <div className="flex items-center gap-4">
                  <PiGraduationCap className="text-teal-500 lg:!text-[1.3rem] 2xl:!text-[2rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.5rem]" />
                  <h3 className="!font-bold nata-sans text-gray-900 dark:text-white lg:!text-[1rem] xl:!text-[1.1rem] 2xl:!text-[1.5rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.25rem]">
                    Formación
                  </h3>
                </div>
                <div className="flex flex-col gap-2 lg:gap-2">
                  <p className="text-black dark:text-white !font-semibold nata-sans !text-[0.75rem] lg:!text-[0.7rem] xl:!text-[0.8rem] 2xl:!text-[0.9rem] ">
                    TECNICATURA SUPERIOR EN ANALISTA DE SISTEMAS
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 nata-sans !text-[0.75rem] lg:!text-[0.7rem] 2xl:!text-[0.9rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[0.8rem]">
                    Instituto Superior 25 de mayo.
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 nata-sans !text-[0.75rem] lg:!text-[0.6rem] xl:!text-[0.7rem] 2xl:!text-[0.9rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[0.8rem]">
                    2022 - Presente.
                  </p>
                </div>
              </div>
            </div>

            
            {/*Experiencia*/}
            <div className="w-full h-[16rem] xl:h-[18rem] 2xl:h-[23rem] [@media(min-width:1536px)_and_(max-width:1919px)]:h-[20rem] flex justify-center items-center rounded-2xl text-black !border-1 !border-gray-300 bg-[#F2F2F2] hover:shadow-sm dark:hover:shadow-gray-700 dark:!border-gray-600 dark:bg-[#242424] dark:text-white ">
              <div className="w-[90%] h-[90%] flex flex-col gap-4 lg:gap-3 2xl:gap-8 ">
                <div className="flex items-center gap-4">
                  <IoBagOutline className="text-teal-500 lg:!text-[1.3rem] 2xl:!text-[2rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.5rem]" />
                  <h3 className="!font-bold nata-sans text-gray-900 dark:text-white lg:!text-[1rem] xl:!text-[1.1rem] 2xl:!text-[1.5rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.25rem]">
                    Experiencia laboral
                  </h3>
                </div>
                <div className="flex flex-col gap-2 md:gap-1">
                  <p className="text-gray-900 dark:text-gray-200 !font-bold nata-sans !text-[0.75rem] lg:!text-[0.7rem] xl:!text-[0.8rem] 2xl:!text-[0.9rem] ">
                    AUXILIAR DE GESTIÓN DOCUMENTAL
                  </p>
                  <p className="text-gray-900 dark:text-white monospace nata-sans !text-[0.65rem] lg:!text-[0.7rem] xl:!text-[0.8rem] 2xl:!text-[0.9rem]">
                    Pasantía en Prodeman. Octubre 2023 - Abril 2025
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 nata-sans !text-[0.65rem] lg:!text-[0.6rem] xl:!text-[0.7rem] 2xl:!text-[0.9rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[0.8rem]">
                    <li>
                      ● Configurar usuarios, alcances y permisos en un sistema
                      de gestión de documentos.
                    </li>
                    <li>
                      ● Configurar flujos de trabajo, plantillas de impresión y
                      codificación de documentos y formularios.
                    </li>
                    <li>
                      ● Realizar pruebas necesarias para detectar errores.
                    </li>
                    <li>
                      ● Informar errores o realizar consultas a mesa de soporte
                      y ejecutar las acciones propuestas por los mismos.
                    </li>
                    <li>
                      ● Realizar la migración de los documentos al sistema.
                    </li>
                    <li>● Brindar soporte a los usuarios.</li>
                  </ul>
                </div>
              </div>
            </div>
           {/*Stack*/}
           <div className="h-[16rem] xl:h-[18rem] 2xl:h-[23rem] [@media(min-width:1536px)_and_(max-width:1919px)]:h-[20rem] flex justify-center items-center rounded-2xl hover:shadow-sm dark:hover:shadow-gray-700 text-black !border-1 !border-gray-300 bg-[#F2F2F2] dark:!border-gray-600 dark:bg-[#242424] dark:text-white">
              <div className="w-[90%] h-[90%] flex flex-col gap-4 lg:gap-3 2xl:gap-8 ">
                <div className="flex items-center gap-4">
                  <PiBracketsCurly className="text-teal-500 lg:!text-[1.3rem] 2xl:!text-[2rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.5rem]" />
                  <h3 className="!font-bold nata-sans text-gray-900 dark:text-white lg:!text-[1rem] xl:!text-[1.1rem] 2xl:!text-[1.5rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.25rem]">
                    Stack
                  </h3>
                </div>
                <div className="grid grid-cols-6 gap-3">
                  {tecnologias.map((tecnologia, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center gap-4 !px-6 !py-3 lg:!px-6 lg:!py-2 xl:!px-[1.9rem] xl:!py-3 2xl:!px-[2rem] 2xl:!py-[1rem] dark:text-white dark:bg-[#292929] rounded-sm shadow-sm   transition-transform duration-300 hover:scale-105"
                    >
                      {tecnologia.icono}
                      <p className="!text-[0.5rem] lg:!text-[0.55rem] 2xl:!text-[0.67rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[0.6rem] ">
                        {tecnologia.nombre}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
