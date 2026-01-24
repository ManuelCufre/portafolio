import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { CiServer } from "react-icons/ci";
import { IoServerOutline } from "react-icons/io5";
import { GrDeploy } from "react-icons/gr";

const servicios = [
  {
    id: 1,
    nombre: "Desarrollo Frontend",
    descripcion: "Interfaces dinámicas, responsive y optimizadas usando React, Tailwind y buenas prácticas UX/UI.",
    icono: <FaCode className="!text-4xl lg:!text-4xl 2xl:!text-5xl text-black dark:text-white" />
  },
  {
    id: 2,
    nombre: "Backend y APIs",
    descripcion: "Desarrollo de APIs REST con Node.js y Express, integraciones y lógica de negocio.",
    icono: <CiServer className="!text-4xl lg:!text-4xl 2xl:!text-5xl text-black dark:text-white" />
  },
  {
    id: 3,
    nombre: "Bases de Datos",
    descripcion: "Modelado y gestión de bases de datos relacionales con MySQL y PostgreSQL.",
    icono: <IoServerOutline className="!text-4xl lg:!text-4xl 2xl:!text-5xl text-black dark:text-white" />
  },
  {
    id: 4,
    nombre: "Deploy y Mantenimiento",
    descripcion: "Puesta en producción, mantenimiento y mejora continua de aplicaciones.",
    icono: <GrDeploy className="!text-4xl lg:!text-4xl 2xl:!text-5xl text-black dark:text-white" />
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

export default function Servicios() {
     return (
        <>
          <div
            className="snap-start w-[90%] md:w-[65%] min-h-[62rem] sm:min-h-[100vh] flex flex-col justify-center gap-3 md:gap-0 [@media(min-width:1536px)_and_(max-width:1919px)]:gap-0 items-center fira-code "
            id="servicios"
          >
            <div className="flex flex-col justify-center">
              <h1 className="!font-bold monospace text-black dark:text-white !text-[1.3rem] lg:!text-[1.3rem] 2xl:!text-[1.5rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.25rem]">
                SERVICIOS();
              </h1>
              <div className=" w-30 h-[3px] bg-teal-500 rounded-md"></div>
            </div>
    
            <div className="w-full min-h-[70vh] flex flex-col gap-8 justify-center items-center rounded-2xl !mt-6">
              <motion.div
                className="grid grid-cols-1 xl:grid-cols-2 gap-4 justify-center w-full h-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {servicios.map((servicio) => (
                  <motion.div
                    key={servicio.nombre}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="flex flex-col items-center gap-5 bg-[#F2F2F2] dark:bg-[#242424] h-full !rounded-sm w-full !py-4 !px-4 xl:!py-6 xl:!px-10 2xl:!py-10 2xl:!px-14 !border-1 dark:!border-[#383838] dark:hover:!border-[#404040] dark:hover:shadow-gray-700"
                  >
                    <div className="flex justify-center items-center !p-4  2xl:!p-6 rounded-full bg-gray-200 dark:bg-[#383838]">
                        {servicio.icono}
                    </div>
                    <p className="!text-xs xl:!text-[1rem] text-center 2xl:!text-[1.3rem] text-black nata-sans dark:text-white !font-semibold">
                      {servicio.nombre}
                    </p>
                    <p className="!text-xs xl:!text-sm text-center 2xl:!text-[1.1rem] text-gray-700 nata-sans dark:text-gray-200">
                      {servicio.descripcion}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </>
      );
}
