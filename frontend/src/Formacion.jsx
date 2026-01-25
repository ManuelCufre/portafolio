import { PiGraduationCap } from "react-icons/pi";

const educacion = [
  {
    nombre: "Tecnicatura Superior en Analista de Sistemas",
    institucion: "Instituto Superior 25 de Mayo",
    periodo: "2022 - 2025 (Graduado)",
    descripcion:
      "Estudio de tecnologías de desarrollo de software, bases de datos y redes. Formación en programación, análisis de sistemas y gestión de proyectos informáticos.",
    habilidades: [
      "Java",
      "Python",
      "JavaScript",
      "React",
      "HTML",
      "CSS",
    ],
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

export default function Formacion() {
  return (
    <div
      className="
        w-full 
        md:h-[28rem] 
        xl:h-[68vh] 
        2xl:min-h-[70vh] 
        flex 
        flex-col 
        gap-6 
        !p-6 
        rounded-md 
        !border-1 
        !border-gray-300 
        bg-[#F2F2F2] 
        dark:bg-[#242424] 
        hover:shadow-sm 
        dark:hover:shadow-gray-700 
        dark:!border-[#383838]
      "
    >
      {/* Header */}
      <div className="flex gap-3 items-center">
             <div className="flex items-center justify-center !p-[0.65rem] dark:bg-[#383838] rounded-lg">
               <PiGraduationCap className="!text-[1.1rem] xl:!text-[1.3rem] 2xl:!text-[2rem] text-black dark:text-white" />
             </div>
             <span className="nata-sans !text-[1.1rem] xl:!text-[1.3rem] 2xl:!text-[2rem] !font-semibold">
               Formación Académica
             </span>
           </div>

      {/* Timeline */}
      <div className="relative !pl-6 flex flex-col !gap-10">

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
          <div key={index} className="relative flex flex-col !gap-2">

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

            <span className="monospace !text-[0.85rem] !text-gray-500 dark:!text-gray-400">
              {item.periodo}
            </span>

            <span className="nata-sans !text-[1rem] xl:!text-[1rem] !font-semibold text-black dark:text-white">
              {item.nombre}
            </span>

            <span className="nata-sans !text-[0.8rem] !font-medium text-black dark:text-white">
              {item.institucion}
            </span>

            <p className="nata-sans text-gray-700 dark:text-gray-300 !text-[0.75rem] xl:!text-[0.8rem] 2xl:!text-[0.95rem]">
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
                    !text-[0.7rem] 
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

          </div>
        ))}
      </div>
    </div>
  );
}
