import { motion } from "framer-motion";
import { IoIosMail } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

import useMode from "./hooks/useMode";
import Cv from "./CV - Manuel Agustín Cufré.pdf";
import { useState, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Inicio() {
  const { modo } = useMode();

  const text = "Analista de Sistemas";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-[90%] md:w-[65%] min-h-[100vh] flex flex-col justify-center items-center gap-6 fira-code  md:snap-start"
      id="inicio"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col gap-6 justify-center items-center lg:!mt-28 rounded-2xl bg-[#FAFAFA] dark:bg-[#1E1E1F]"
      >
        <div className="flex gap-8 items-center nata-sans w-full">
          <div className="w-[100%]">
            <motion.div className="flex flex-col" variants={itemVariants}>
              <motion.h2
                variants={itemVariants}
                className="!font-bold !text-[1.8rem] lg:!text-[2rem] 2xl:!text-[2.6rem] text-gray-700 dark:text-white"
              >
                Hola soy Manuel Cufré
              </motion.h2>

              <motion.h2
                variants={itemVariants}
                className="text-teal-500 !font-bold !text-[1.7rem] md:!text-[1.8rem] 2xl:!text-[2.2rem]"
              >
                {displayed}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-gray-700 dark:text-gray-300 !text-[0.9rem] md:!text-[1rem] 2xl:!text-[1.2rem]"
              >
                Soy una analista de sistemas especializado en el desarrollo web
                Full-Stack, que disfruta transformar ideas en aplicaciones web
                modernas, dinámicas y fáciles de usar. Mi objetivo en crear
                aplicaciones que combinan funcionalidad, rendimiento y diseño
                atractivo, priorizando siempre la experiencia del usuario. Mi
                enfoque está en desarrollar soluciones escalables y eficientes
                que aporten valor real a cada proyecto.
              </motion.p>
            </motion.div>

            {/* ICONOS + BOTONES */}
            <motion.div
              variants={itemVariants}
              className="w-[%100] h-40 flex items-center justify-center"
            >
              <div className="flex gap-2 2xl:gap-3 w-[34%] justify-center items-center">
                


                  {/* GitHub */}
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="!bg-transparent !border !border-teal-600 !py-1.5 !px-3 md:rounded-sm md:flex md:items-center md:gap-2 rounded-full md:rounded-sm flex items-center justify-center md:justify-start cursor-pointer w-10 h-10 md:w-auto md:h-auto"
                  >
                    <FiGithub className="text-teal-600 !text-sm xl:!text-[0.9rem]" />
                    <span className="hidden md:inline !text-sm 2xl:!text-[0.9rem] text-teal-600">
                      GitHub
                    </span>
                  </motion.button>
                </a>
               

                 {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="!bg-transparent !border !border-teal-600 !py-1.5 !px-3 md:rounded-sm md:flex md:items-center md:gap-2 rounded-full flex items-center justify-center md:justify-start cursor-pointer w-10 h-10 md:w-auto md:h-auto"
                  >
                    <FaLinkedinIn className="text-teal-600 !text-sm xl:!text-[0.9rem]" />
                    <span className="hidden md:inline !text-sm 2xl:!text-[0.9rem] text-teal-600">
                      LinkedIn
                    </span>
                  </motion.button>
                </a>

                {/* CV */}
                <a href={Cv} download={Cv}>
                  <motion.button
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="!bg-transparent !border !border-teal-600 !py-1.5 !px-3 md:rounded-sm md:flex md:items-center md:gap-2 rounded-full  flex items-center justify-center md:justify-start cursor-pointer w-10 h-10 md:w-auto md:h-auto"
                  >
                    <IoMdDownload className="text-teal-600 !text-sm xl:!text-[0.9rem]" />
                    <span className="hidden md:inline !text-sm 2xl:!text-[0.9rem] text-teal-600">
                      Curriculum
                    </span>
                  </motion.button>
                </a>

                {/* Email */}
               <a href="mailto:manuelcufree@gmail.com">
                  <motion.button
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="!bg-transparent !border !border-teal-600 !py-1.5 !px-3 md:rounded-sm md:flex md:items-center md:gap-2 rounded-full  flex items-center justify-center md:justify-start cursor-pointer w-10 h-10 md:w-auto md:h-auto"
                  >
                    <IoIosMail className="text-teal-600 !text-sm xl:!text-[0.9rem]" />
                    <span className="hidden md:inline !text-sm 2xl:!text-[0.9rem] text-teal-600">
                      Email
                    </span>
                  </motion.button>
                </a>
              </div>
            </motion.div>
            <motion.div
              className="hidden md:flex w-full justify-center items-center !mt-10"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <FaArrowDownLong className="!text-center text-gray-400 !font-semibold xl:!text-xl 2xl:!text-xl" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
