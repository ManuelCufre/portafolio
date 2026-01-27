import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

export default function InformacionContacto() {
  return (
    <div className=" w-[100%] md:w-[50%] h-[31rem] lg:h-[33rem] nata-sans md:h-[28rem] xl:h-[73vh] 2xl:min-h-[70vh] !py-5 !px-2 lg:!p-6 flex flex-col gap-2 lg:gap-4 2xl:gap-10 justify-start rounded-md items-start !border-1 !border-gray-300 bg-[#F2F2F2] dark:bg-[#242424] hover:shadow-sm dark:hover:shadow-gray-700 dark:!border-[#383838] dark:hover:!border-[#404040] p-6 md:p-8">
      {/* Título */}
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <div className="flex items-center justify-center !p-[0.6rem] dark:bg-[#383838] rounded-lg">
            <FiUser className="!text-[1rem] xl:!text-[1.15rem] 2xl:!text-[1.7rem] text-black dark:text-white" />
          </div>
          <span className="nata-sans !text-md xl:!text-lg 2xl:!text-xl !font-semibold">
            Información de contacto
          </span>
        </div>
        <p className="!text-xs lg:!text-sm 2xl:!text-md text-gray-600 dark:text-gray-400 leading-relaxed">
          Estoy siempre abierto a discutir nuevas oportunidades, proyectos
          interesantes o simplemente charlar sobre tecnología. No dudes en
          contactarme.
        </p>
      </div>

      {/* Contactos */}
      <div className="w-full flex flex-col gap-2">
        {/* Email */}
        <a href="mailto:manuelcufree@gmail.com" target="_blank">
          <div className="flex gap-3 items-start !p-1 :hover:bg-gray-200 dark:hover:bg-[#1A1A1A] rounded-md cursor-pointer">
            <div className="w-9 h-9 lg:w-10 lg:h-10 2xl:w-13 2xl:h-13 rounded-md bg-[#E0E0E0] dark:bg-[#383838] flex items-center justify-center flex-shrink-0">
              <IoIosMail className=" lg:!text-[1.2rem] 2xl:!text-[2rem] text-teal-500" />
            </div>
            <div>
              <div className="!font-semibold !text-xs lg:!text-sm 2xl:!text-md ">
                Email
              </div>
              <div className="!text-xs lg:!text-sm 2xl:!text-md text-gray-600 dark:text-gray-400">
                manuelcufree@gmail.com
              </div>
            </div>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/manuel-agustin-cufre/"
          target="_blank"
        >
          <div className="flex gap-3 items-start !p-1 :hover:bg-gray-200 dark:hover:bg-[#1A1A1A] rounded-md cursor-pointer">
            <div className="w-9 h-9 lg:w-10 lg:h-10 2xl:w-13 2xl:h-13 rounded-md bg-[#E0E0E0] dark:bg-[#383838] flex items-center justify-center flex-shrink-0">
              <FaLinkedinIn className="!text-[1rem] 2xl:!text-[2rem] text-teal-500" />
            </div>
            <div>
              <div className="!font-semibold !text-xs lg:!text-sm 2xl:!text-md">
                LinkedIn
              </div>
              <div className="!text-xs lg:!text-sm 2xl:!text-md text-gray-600 dark:text-gray-400">
                Perfil de LinkedIn
              </div>
            </div>
          </div>
        </a>

        {/* GitHub */}
        <a href="https://github.com/ManuelCufre" target="_blank">
          <div className="flex gap-3 items-start !p-1 :hover:bg-gray-200 dark:hover:bg-[#1A1A1A] rounded-md cursor-pointer">
            <div className="w-9 h-9 lg:w-10 lg:h-10 2xl:w-13 2xl:h-13 rounded-md bg-[#E0E0E0] dark:bg-[#383838] flex items-center justify-center flex-shrink-0">
              <FiGithub className="!text-[1rem] 2xl:!text-[2rem] text-teal-500" />
            </div>
            <div>
              <div className="!font-semibold !text-xs lg:!text-sm 2xl:!text-md">
                GitHub
              </div>
              <div className="!text-xs lg:!text-sm 2xl:!text-md text-gray-600 dark:text-gray-400">
                Perfil de GitHub
              </div>
            </div>
          </div>
        </a>

        <div className="flex gap-3 items-start !p-1 :hover:bg-gray-200 dark:hover:bg-[#1A1A1A] rounded-md cursor-pointer">
          <div className="w-9 h-9 lg:w-10 lg:h-10 2xl:w-13 2xl:h-13 rounded-md bg-[#E0E0E0] dark:bg-[#383838] flex items-center justify-center flex-shrink-0">
            <IoLocationOutline className="!text-[1rem] 2xl:!text-[2rem] text-teal-500" />
          </div>
          <div>
            <div className="!font-semibold !text-xs lg:!text-sm2xl:!text-md">
              Ubicación
            </div>
            <div className="!text-xs lg:!text-sm 2xl:!text-md text-gray-600 dark:text-gray-400">
              General Deheza - Córdoba - Argentina
            </div>
          </div>
        </div>
      </div>

      {/* Disponibilidad */}
      <div className="w-full !mt-1 lg:!mt-4 !p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 !border-l-4 !border-blue-500">
        <h3 className="!font-semibold !text-sm 2xl:!text-md text-blue-900 dark:text-blue-200 mb-2">
          Disponibilidad
        </h3>
        <p className="!text-xs 2xl:!text-sm 2xl:!text-md text-blue-800 dark:text-blue-300 leading-relaxed mb-3">
          Actualmente disponible para proyectos freelance y oportunidades de
          internado.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
          <span className="!text-xs 2xl:!text-sm 2xl:!text-md text-teal-600 dark:text-teal-400 !font-semibold">
            Disponible para nuevos proyectos
          </span>
        </div>
      </div>
    </div>
  );
}
