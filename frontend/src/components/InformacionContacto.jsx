import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};


const estilosIconos = "lg:!text-base 2xl:!text-2xl text-teal-500"

const contactos = [
  {
    id: 1,
    tipo: "Email",
    valor: "manuelcufree@gmail.com",
    url: "mailto:manuelcufree@gmail.com",
    icono: <IoIosMail className={estilosIconos} />,
  },
  {
    id: 2,
    tipo: "LinkedIn",
    valor: "Perfil de LinkedIn",
    url: "https://www.linkedin.com/in/manuel-agustin-cufre/",
    icono: <FaLinkedinIn className={estilosIconos} />,
  },
  {
    id: 3,
    tipo: "GitHub",
    valor: "Perfil de GitHub",
    url: "https://github.com/ManuelCufre",
    icono: <FiGithub className={estilosIconos} />,
  },
  {
    id: 4,
    tipo: "Ubicación",
    valor: "General Deheza - Córdoba - Argentina",
    url: null,
    icono: <IoLocationOutline className={estilosIconos} />,
  },
];

export default function InformacionContacto() {
  return (
    <div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className=" w-[100%] md:w-[50%] h-[31rem] nata-sans md:h-[28rem] lg:h-[73vh] 2xl:h-[68vh] !py-5 !px-2 lg:!p-6 flex flex-col gap-2 lg:gap-4 2xl:gap-6 justify-start rounded-md items-start !border-1 !border-gray-300 bg-[#F2F2F2] dark:bg-[#242424] hover:shadow-sm dark:hover:shadow-gray-700 dark:!border-[#383838] dark:hover:!border-[#404040] p-6 md:p-8"
    >
      {/* Título */}
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <div className="flex items-center justify-center !p-[0.6rem] dark:bg-[#383838] rounded-lg">
            <FiUser className="!text-[1rem] xl:!text-[1.15rem] 2xl:!text-[1.7rem] text-black dark:text-white" />
          </div>
          <span className="nata-sans !text-md xl:!text-lg 2xl:!text-2xl !font-semibold">
            Informacion de contacto
          </span>
        </div>
        <p className="!text-xs lg:!text-sm 2xl:!text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          Estoy disponible para conversar sobre nuevas oportunidades, proyectos y colaboraciones. Si tenés una idea o necesitás apoyo en un proyecto tecnológico, no dudes en contactarme.
        </p>
      </div>

      {/* Contactos */}
      <div className="w-full flex flex-col gap-2">
        {contactos.map((contacto) => (
          contacto.url ? (
            <a key={contacto.id} href={contacto.url} target="_blank" rel="noopener noreferrer">
              <div className="flex gap-3 items-start !p-1 :hover:bg-gray-200 dark:hover:bg-[#1A1A1A] rounded-md cursor-pointer">
                <div className="w-9 h-9 lg:w-10 lg:h-10 2xl:w-13 2xl:h-13 rounded-md bg-[#E0E0E0] dark:bg-[#383838] flex items-center justify-center flex-shrink-0">
                  {contacto.icono}
                </div>
                <div>
                  <div className="!font-semibold !text-xs lg:!text-sm 2xl:!text-base ">
                    {contacto.tipo}
                  </div>
                  <div className="!text-xs lg:!text-sm 2xl:!text-base text-gray-600 dark:text-gray-400">
                    {contacto.valor}
                  </div>
                </div>
              </div>
            </a>
          ) : (
            <div key={contacto.id} className="flex gap-3 items-start !p-1 :hover:bg-gray-200 dark:hover:bg-[#1A1A1A] rounded-md cursor-pointer">
              <div className="w-9 h-9 lg:w-10 lg:h-10 2xl:w-13 2xl:h-13 rounded-md bg-[#E0E0E0] dark:bg-[#383838] flex items-center justify-center flex-shrink-0">
                {contacto.icono}
              </div>
              <div>
                <div className="!font-semibold !text-xs lg:!text-sm 2xl:!text-base">
                  {contacto.tipo}
                </div>
                <div className="!text-xs lg:!text-sm 2xl:!text-base text-gray-600 dark:text-gray-400">
                  {contacto.valor}
                </div>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Disponibilidad */}
      <div className="w-full !mt-1 lg:!mt-4 !p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 !border-l-4 !border-blue-500">
        <h3 className="!font-semibold !text-sm 2xl:!text-base text-blue-900 dark:text-blue-200 mb-2">
          Disponibilidad
        </h3>
        <p className="!text-xs 2xl:!text-sm text-blue-800 dark:text-blue-300 leading-relaxed mb-3">
          Actualmente disponible para proyectos freelance y oportunidades laborales en IT.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
          <span className="!text-xs 2xl:!text-sm text-teal-600 dark:text-teal-400 !font-semibold">
            Disponible para nuevos proyectos
          </span>
        </div>
      </div>
    </div>
  );
}
