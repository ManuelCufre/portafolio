import { motion } from "framer-motion";
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
import { FaNodeJs } from "react-icons/fa";
import { PiUserCircleLight } from "react-icons/pi";
import { IoBagOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { PiBracketsCurly } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { DiJavascript } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";

import useMode from "./hooks/useMode";

const iconClass =
  "!text-[3rem] lg:!text-[3rem] xl:!text-[4.2rem] 2xl:!text-[5.5rem]  ";

const getIconColor = (nombre) => {
  const colorMap = {
    HTML: "text-orange-600",
    CSS: "text-blue-600",
    JavaScript: "text-yellow-500",
    "React.js": "text-cyan-400",
    Tailwind: "text-cyan-400",
    "Node.js": "text-green-600",
    "Express.js": "text-gray-600 dark:text-gray-300",
    MySQL: "text-blue-800",
    PostgreSQL: "text-blue-700",
    Supabase: "text-green-500",
    Git: "text-orange-700",
    GitHub: "text-gray-800 dark:text-gray-100",
    VSC: "text-blue-500",
    Docker: "text-blue-500",
    Vercel: "text-black dark:text-white",
  };
  return colorMap[nombre] || "";
};

const categoriasTecnologias = [
  {
    nombre: "HTML",
    icono: <FaHtml5 className={`${iconClass} text-orange-600`} />,
  },
  {
    nombre: "CSS",
    icono: <FaCss3Alt className={`${iconClass} text-blue-600`} />,
  },
  {
    nombre: "JavaScript",
    icono: <IoLogoJavascript className={`${iconClass} text-yellow-500`} />,
  },
  {
    nombre: "React.js",
    icono: <FaReact className={`${iconClass} text-cyan-400`} />,
  },
  {
    nombre: "Tailwind",
    icono: <RiTailwindCssFill className={`${iconClass} text-cyan-400`} />,
  },

  {
    nombre: "Node.js",
    icono: <FaNodeJs className={`${iconClass} text-green-600`} />,
  },
  {
    nombre: "Express.js",
    icono: (
      <SiExpress className={`${iconClass} text-gray-600 dark:text-gray-300`} />
    ),
  },
  {
    nombre: "MySQL",
    icono: <GrMysql className={`${iconClass} text-blue-900`} />,
  },
  {
    nombre: "PostgreSQL",
    icono: <DiPostgresql className={`${iconClass} text-blue-800`} />,
  },
  {
    nombre: "Supabase",
    icono: <RiSupabaseFill className={`${iconClass} text-green-500`} />,
  },

  {
    nombre: "Git",
    icono: <FaGitAlt className={`${iconClass} text-orange-700`} />,
  },
  {
    nombre: "GitHub",
    icono: (
      <FaGithub className={`${iconClass} text-gray-800 dark:text-gray-100`} />
    ),
  },
  {
    nombre: "VSC",
    icono: <BiLogoVisualStudio className={`${iconClass} text-blue-500`} />,
  },
  {
    nombre: "Docker",
    icono: <FaDocker className={`${iconClass} text-blue-500`} />,
  },
  {
    nombre: "Vercel",
    icono: (
      <IoLogoVercel className={`${iconClass} text-black dark:text-white`} />
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function Habilidades() {
  return (
    <>
      <div
        className="snap-start w-[90%] md:w-[65%] min-h-[62rem] sm:min-h-[100vh] flex flex-col justify-center gap-3 md:gap-0 [@media(min-width:1536px)_and_(max-width:1919px)]:gap-0 items-center fira-code "
        id="habilidades"
      >
        <div className="flex gap-2 items-center">
          <div className="flex items-center justify-center !p-[0.60rem] bg-[#F2F2F2] !border-sm !border-[#E3E3E3] dark:!border-[#4A4A4A] dark:bg-[#383838] rounded-lg">
            <FaCode className="!text-[1.3rem] lg:!text-[1.5rem] 2xl:!text-[1.7rem] text-teal-500" />
          </div>
          <h1 className="!font-bold nata-sans text-black dark:text-white !text-[1.3rem] lg:!text-[1.5rem] 2xl:!text-[1.7rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.25rem]">
            Mis Habilidades
          </h1>
        </div>

        <div className="w-full min-h-[70vh] flex flex-col gap-8 justify-center items-center rounded-2xl">
          <motion.div
            className="grid grid-cols-3 xl:grid-cols-5 gap-4 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {categoriasTecnologias.map((tech) => (
              <motion.div
                key={tech.nombre}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex flex-col items-center gap-3 bg-[#F2F2F2] dark:bg-[#242424] !rounded-sm !py-4 !px-12 xl:!py-6 xl:!px-16 2xl:!py-10 2xl:!px-20 !border-1 dark:!border-[#383838] dark:hover:!border-[#404040] dark:hover:shadow-gray-700"
              >
                {tech.icono}
                <p className="!text-xs 2xl:!text-md text-black monospace dark:text-white">
                  {tech.nombre}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
