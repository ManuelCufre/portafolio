import { IoBagOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const experiencias = [
  {
    puesto: "Auxiliar de Gestión Documental",
    empresa: "Prodeman SA",
    periodo: "Octubre 2023 – Abril 2025 (part-time)",
    tareas: [
      "Configurar usuarios, alcances y permisos en un sistema de gestión documental.",
      "Configurar flujos de trabajo, plantillas de impresión y codificación de documentos y formularios.",
      "Realizar pruebas para detección de errores.",
      "Informar errores o realizar consultas a mesa de soporte y ejecutar las acciones propuestas por los mismos.",
      "Realizar la migración de los documentos al sistema.",
      "Brindar soporte a los usuarios.",
    ],
    habilidades: [
      "Microsoft Excel",
      "Gestión Documental",
      "Soporte a usuarios",
      "Administración de software",
    ],
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

export default function Experiencia() {
  return (
    <motion.div
      className="
        w-full 
        md:h-[28rem] 
        xl:h-[68vh] 
        2xl:min-h-[70vh] 
        flex 
        flex-col 
        gap-6 
        !p-3
        lg:!p-6 
        rounded-md 
        !border-1 
        !border-gray-300 
        bg-[#F2F2F2] 
        dark:bg-[#242424] 
        hover:shadow-sm 
        dark:hover:shadow-gray-700 
        dark:!border-[#383838]
      "
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="flex gap-3 items-center">
        <div className="flex items-center justify-center !p-[0.6rem] dark:bg-[#383838] rounded-lg">
          <IoBagOutline className="!text-[1rem] xl:!text-[1.15rem] 2xl:!text-[1.7rem] text-black dark:text-white" />
        </div>
         <span className="nata-sans !text-md xl:!text-lg 2xl:!text-2xl !font-semibold">
          Experiencia laboral
        </span>
      </div>

      {/* Timeline */}
      <div className="relative !pl-6 flex flex-col !gap-10">
        {/* Línea vertical */}
        <motion.div
          className="
            absolute 
            !left-[6px] 
            !top-0 
            !h-full 
            !w-[1px] 
            !bg-gray-500
          "
        />

        {experiencias.map((exp, index) => (
          <motion.div key={index} className="relative flex flex-col !gap-2 ">
            {/* Punto */}
            <div
              className="
                absolute 
                !left-[-25px] 
                !top-[4px] 
                !w-[14px] 
                !h-[14px] 
                !rounded-full 
                !bg-teal-500 
                !border-2 
                !border-white 
                dark:!border-[#242424]
              "
            />

            <span className="monospace !text-[0.75rem] lg:!text-[0.85rem] 2xl:!text-lg !text-gray-500 dark:!text-gray-400">
              {exp.periodo}
            </span>

            <span className="nata-sans !text-sm xl:!text-[1.1rem] 2xl:!text-2xl !font-semibold text-black dark:text-white">
              {exp.puesto}
            </span>

            <span className="nata-sans !text-[0.85rem] 2xl:!text-xl !font-medium text-black dark:text-white">
              {exp.empresa}
            </span>

            <ul
              className="
                !mt-2 
                flex 
                flex-col 
                !gap-2 
                text-gray-700 
                dark:text-gray-300 
                nata-sans 
                !text-[0.75rem] 
                xl:!text-[0.8rem] 
                2xl:!text-base
              "
            >
              {exp.tareas.map((tarea, i) => (
                <li key={i}>• {tarea}</li>
              ))}
            </ul>

            <div>
              {exp.habilidades.map((hab, i) => (
                <span
                  key={i}
                  className="
                    inline-block 
                    bg-gray-200 
                    dark:bg-[#383838] 
                    text-black 
                    dark:text-white 
                    !text-[0.6rem] 
                    lg:!text-[0.7rem] 
                    2xl:!text-sm
                    !px-2 
                    !py-1 
                    2xl:!px-3 
                    rounded-full 
                    !mt-1 
                    !mr-1
                    2xl:!mt-2
                    2xl:!mr-2


                  "
                >
                  {hab}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
