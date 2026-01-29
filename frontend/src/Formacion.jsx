import { PiGraduationCap } from "react-icons/pi";
import { motion } from "framer-motion";

const educacion = [
  {
    nombre: "Tecnicatura Superior en Analista de Sistemas",
    institucion: "Instituto Superior 25 de Mayo",
    periodo: "2022 - 2025 (Graduado)",
    descripcion:
      "Estudio de tecnologías de desarrollo de software, bases de datos y redes. Formación en programación, análisis de sistemas y gestión de proyectos informáticos.",
    habilidades: ["HTML", "CSS", "JavaScript", "Python", "Java", "MySQL", "Redes" ],
  },
  {
    nombre: "Academia de Desarrollo Tecnológico",
    institucion: "Aceitera General Deheza",
    periodo: "2023 - 2024",
    descripcion:
      "Formación en tecnologías aplicadas al desarrollo y administración de sistemas.",
    habilidades: ["Python", "MySQL", "Redes", "Windows Server", "Genexus"],
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

export default function Formacion() {
  return (
    <motion.div
      className="
        w-full 
        md:h-[28rem] 
        xl:h-[68vh] 
        2xl:h-[64vh] 
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
          <PiGraduationCap className="!text-[1rem] xl:!text-[1.15rem] 2xl:!text-[1.7rem] text-black dark:text-white" />
        </div>
        <span className="nata-sans !text-md xl:!text-lg 2xl:!text-2xl !font-semibold">
          Formación académica
        </span>
      </div>

      {/* Timeline */}
      <div className="relative !pl-6 flex flex-col !gap-6 lg:!gap-10">
        {/* Línea vertical */}
        <div
          className="
            absolute 
            !left-[6px] 
            !top-0 
            !h-full 
            !w-[1px] 
            !bg-gray-500
          "
        />

        {educacion.map((item, index) => (
          <motion.div key={index} className="relative flex flex-col !gap-2 2xl:!gap-3">
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
              {item.periodo}
            </span>

            <span className="nata-sans !text-sm xl:!text-[1rem] 2xl:!text-xl !font-semibold text-black dark:text-white">
              {item.nombre}
            </span>

            <span className="nata-sans !text-[0.8rem] 2xl:!text-[0.95rem] !font-medium text-black dark:text-white">
              {item.institucion}
            </span>

            <p className="nata-sans text-gray-700 dark:text-gray-300 !text-[0.75rem] xl:!text-[0.8rem] 2xl:!text-[0.9rem]">
              {item.descripcion}
            </p>

            <div>
              {item.habilidades.map((hab, i) => (
                <span
                  key={i}
                  className="
                    inline-block 
                    bg-gray-200 
                    dark:bg-[#383838] 
                    text-black 
                    dark:text-white 
                    !text-[0.6rem] 
                    xl:!text-[0.7rem] 
                    2xl:!text-[0.8rem]
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
