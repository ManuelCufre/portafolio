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
import useMode from "./hooks/useMode";

export default function Tecnologias() {
      const {modo} = useMode()
    
  const tecnologias = [
    { nombre: "HTML", icono: <FaHtml5 size={66} /> },
    { nombre: "CSS", icono: <FaCss3Alt size={66} /> },
    { nombre: "JavaScript", icono: <IoLogoJavascript size={66} /> },
    { nombre: "Python", icono: <FaPython size={66} /> },
    { nombre: "React.js", icono: <FaReact size={66} /> },
    { nombre: "Node.js", icono: <DiNodejs size={66} /> },
    { nombre: "Express.js", icono: <SiExpress size={66} /> },
    { nombre: "Supabase", icono: <RiSupabaseFill size={66} /> },
    { nombre: "Tailwind.css", icono: <RiTailwindCssFill size={66} /> },
    { nombre: "Bootstrap", icono: <FaBootstrap size={66} /> },
    { nombre: "Git", icono: <FaGitAlt size={66} /> },
    { nombre: "MySQL", icono: <FaDatabase size={66} /> },
  ];
  return (
    <>
      <div className={`relative top-50 w-full  flex flex-col justify-center items-center fira-code gap-8 ${modo === 'oscuro' ? 'color-fondo-oscuro color-text-oscuro' : 'color-fondo-claro color-texto-claro'}`}>
        <div className="flex justify-center items-center gap-2 color-sec">
          <FaCode size={30} />
          <h1 className="fira-code text-white">Tecnologías</h1>
        </div>

        <div className="grid grid-cols-6  gap-4 mt-4">
          {tecnologias.map((tecnologia, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 w-24 h-32 color-fondo-oscuro text-white rounded-sm sombra monospace transition-transform duration-300 hover:scale-105"
            >
              {tecnologia.icono}
              <p className="font-bold">{tecnologia.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
