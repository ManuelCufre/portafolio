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

export default function Tecnologias() {
    const tecnologias = [
        { id:1, nombre: "HTML", icono: <FaHtml5 size={80} /> },
        { id:2, nombre: "CSS", icono: <FaCss3Alt size={80} /> },
        { id:3, nombre: "JavaScript", icono: <IoLogoJavascript size={80} /> },
        { id:4, nombre: "Python", icono: <FaPython size={80} /> },
        { id:5, nombre: "React.js", icono: <FaReact size={80} /> },
        { id:6, nombre: "Express.js", icono: <SiExpress size={80} /> },
        { id:7, nombre: "Supabase", icono: <RiSupabaseFill size={80} /> },
        { id:8, nombre: "Tailwind.css", icono: <RiTailwindCssFill size={80} /> },
        { id:9, nombre: "Bootstrap", icono: <FaBootstrap size={80} /> },
        { id:10, nombre: "Git", icono: <FaGitAlt size={80} /> },
        { id:11, nombre: "MySQL", icono: <FaDatabase size={80} /> },


    ]
    return (
        <>
            <div className="w-full min-h-80 flex flex-col justify-center items-center text-white bg-gray-900 fira-code">
                <h1 className="">Tecnologías</h1>
                <p className="text-lg text-center max-w-2xl fira-code">
                    Aquí hay una lista de las tecnologías con las que tengo experiencia:
                </p>
            
               <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
               {tecnologias.map((tecnologia, index) => (
                   <div key = {tecnologia.id} className="flex flex-col items-center justify-center gap-4 w-30 h-36 bg-gray-900 text-white rounded-sm monospace hover:bg-gray-700 ">
                   {tecnologia.icono}
                   <p className="font-bold">{tecnologia.nombre}</p>
                  </div>
               ))}
               </div>
                
            </div>
        </>
    )
}