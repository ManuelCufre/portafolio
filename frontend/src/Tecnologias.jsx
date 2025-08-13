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

export default function Tecnologias() {
  const { modo } = useMode();

  const tecnologias = [
    { nombre: "HTML", icono: <FaHtml5 size={60} /> },
    { nombre: "CSS", icono: <FaCss3Alt size={60} /> },
    { nombre: "JavaScript", icono: <IoLogoJavascript size={60} /> },
    { nombre: "Python", icono: <FaPython size={60} /> },
    { nombre: "React.js", icono: <FaReact size={60} /> },
    { nombre: "Node.js", icono: <DiNodejs size={60} /> },
    { nombre: "Express.js", icono: <SiExpress size={60} /> },
    { nombre: "Supabase", icono: <RiSupabaseFill size={60} /> },
    { nombre: "Tailwind", icono: <RiTailwindCssFill size={60} /> },
    { nombre: "Bootstrap", icono: <FaBootstrap size={60} /> },
    { nombre: "Git", icono: <FaGitAlt size={60} /> },
    { nombre: "MySQL", icono: <FaDatabase size={60} /> },
  ];
  return (
    <>
      <div className="w-[65%] min-h-[100vh] flex flex-col justify-center items-center fira-code">
        <h2 className="text-white bold monospace">CURRICULUM();</h2>
        <div className="w-full min-h-[70vh] flex justify-around items-center  gap-8 rounded-2xl">
          <div className="w-[50%] min-h-[100%] flex flex-col gap-8">
            <div className="w-full h-[20vh] flex justify-center items-center  bg-fondo-oscuro-div f rounded-2xl text-white borde">
              <div className="w-[90%] h-[90%] flex flex-col justify-between ">
                <div className="flex items-center gap-4">
                  <PiUserCircleLight size={26} />
                  <h3 className="bold">Sobre mí</h3>
                </div>
                <p className="text-gray-200" style={{ fontSize: "0.9rem" }}>
                  Soy un estudiante comprometido con mi aprendizaje y
                  crecimiento en el ámbito laboral. Busco formar parte de una
                  empresa donde pueda aplicar mis conocimientos, adquirir nuevas
                  habilidades y contribuir al logro de objetivos comunes.
                </p>
              </div>
            </div>
            <div className="w-full h-[38vh] flex justify-center items-center  bg-fondo-oscuro-div f rounded-2xl text-white borde">
              <div className="w-[90%] h-[90%] flex flex-col justify-between ">
                <div className="flex items-center gap-4">
                  <IoBagOutline size={26} />
                  <h3 className="bold">Experiencia laboral</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <p
                    className="text-gray-200 bold"
                    style={{ fontSize: "0.9rem" }}
                  >
                    AUXILIAR DE GESTIÓN DOCUMENTAL
                  </p>
                  <p
                    className="text-gray-200 monospace"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Pasantía en Prodeman. Octubre 2023 - Abril 2025
                  </p>
                  <ul className="text-gray-300 " style={{ fontSize: "0.9rem" }}>
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
          </div>
          <div className="w-[50%] min-h-[100%] flex flex-col gap-8">
            <div className="w-full h-[40vh] flex justify-center items-center  bg-fondo-oscuro-div f rounded-2xl text-white borde">
              <div className="w-[90%] h-[90%] flex flex-col justify-between ">
                <div className="flex items-center gap-4">
                  <PiBracketsCurly size={26} />
                  <h3 className="bold">Stack</h3>
                </div>
                <div className="grid grid-cols-6 gap-4 mt-4">
                  {tecnologias.map((tecnologia, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center gap-4 w-20 h-30 color-fondo-oscuro text-white rounded-sm sombra monospace transition-transform duration-300 hover:scale-105"
                    >
                      {tecnologia.icono}
                      <p className="font-bold">{tecnologia.nombre}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full h-[18vh] flex justify-center items-center bg-fondo-oscuro-div f rounded-2xl text-white borde">
              <div className="w-[90%] h-[90%] flex flex-col justify-between ">
                <div className="flex items-center gap-4">
                  <PiGraduationCap size={22} />
                  <h3 className="bold">Formación</h3>
                </div>
                <div className="flex flex-col">
                  <p
                    className="text-gray-200 bold"
                    style={{ fontSize: "0.9rem" }}
                  >
                    TECNICATURA SUPERIOR EN ANALISTA DE SISTEMAS
                  </p>
                  <p className="text-gray-200" style={{ fontSize: "0.9rem" }}>
                    Instituto Superior 25 de mayo.
                  </p>
                  <p className="text-gray-200" style={{ fontSize: "0.9rem" }}>
                    2022 - Presente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
