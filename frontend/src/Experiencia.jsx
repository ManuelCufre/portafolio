import { IoBagOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const experiencias = [
  {
    puesto: "Auxiliar de Gestión Documental",
    empresa: "Prodeman SA",
    periodo: "Octubre 2023 – Abril 2025 (part-time)",
    tareas: [
      "Configurar usuarios, alcances y permisos en un sistema de gestión documental.",
      "Configurar flujos de trabajo, plantillas de impresión y codificación de documentos.",
      "Realizar pruebas para detección de errores.",
      "Reportar incidencias y coordinar acciones con mesa de soporte.",
      "Migración de documentos al sistema.",
      "Soporte directo a usuarios.",
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
        <div className="flex items-center justify-center !p-[0.65rem] dark:bg-[#383838] rounded-lg">
          <IoBagOutline className="!text-[1.1rem] xl:!text-[1.3rem] 2xl:!text-[2rem] text-black dark:text-white" />
        </div>
        <span className="nata-sans !text-[1.1rem] xl:!text-[1.3rem] 2xl:!text-[2rem] !font-semibold">
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
          <motion.div
            key={index}
            className="relative flex flex-col !gap-2 "
            
          >
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

            <span className="monospace !text-[0.75rem] lg:!text-[0.85rem] !text-gray-500 dark:!text-gray-400">
              {exp.periodo}
            </span>

            <span className="nata-sans !text-[1rem] xl:!text-[1.1rem] !font-semibold text-black dark:text-white">
              {exp.puesto}
            </span>

            <span className="nata-sans !text-[0.85rem] !font-medium text-black dark:text-white">
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
                2xl:!text-[0.95rem]
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
                    !px-2 
                    !py-1 
                    rounded-full 
                    !mt-1 
                    !mr-1
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
