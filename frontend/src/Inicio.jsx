import { motion } from "framer-motion";
import { IoIosMail } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
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
      className="w-[90%] md:w-[65%] min-h-[100vh] flex justify-center items-center fira-code snap-start"
      id="inicio"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full min-h-[50vh] flex gap-8 justify-center items-center rounded-2xl bg-[#FAFAFA] dark:bg-[#1E1E1F]"
      >
        <div className="flex relative top-16 gap-16 items-center nata-sans">
          <div className="w-[100%]">
            <motion.div className="flex flex-col" variants={itemVariants}>
              <motion.h2
                variants={itemVariants}
                className="!font-bold !text-[1.8rem] lg:!text-[1.9rem] 2xl:!text-[3.2rem] text-gray-700 dark:text-white"
              >
                Hola soy Manuel Cufré
              </motion.h2>

              <motion.h2
                variants={itemVariants}
                className="text-teal-500 !font-bold !text-[1.7rem] md:!text-[1.6rem] 2xl:!text-[2.2rem]"
              >
                {displayed}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-gray-700 dark:text-gray-300 !text-[0.9rem] md:!text-[1rem] 2xl:!text-[1.3rem]"
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
              <div className="flex gap-2 w-[34%] justify-center items-center">
                {/* GitHub */}
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/ManuelCufre"
                  target="_blank"
                  className="!p-2 !border-1 !border-teal-600 rounded-full"
                >
                  <FiGithub className="text-teal-600 md:!text-[1rem]" />
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/manuel-agustin-cufre/"
                  target="_blank"
                  className="!p-2 !border-1 !border-teal-600 rounded-full"
                >
                  <FaLinkedinIn className="text-teal-600 md:!text-[1rem]" />
                </motion.a>

                {/* CV */}
                <a href={Cv} download={Cv}>
                  <motion.button
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="!bg-teal-500 !py-1.5 !px-3 rounded-sm shadow-md flex items-center gap-2"
                  >
                    <IoMdDownload />
                    <span className="!text-[0.7rem]">Curriculum</span>
                  </motion.button>
                </a>

                {/* Email */}
                <a href="mailto:manuelcufree@gmail.com?subject=Contacto desde tu portafolio">
                  <motion.button
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="!bg-teal-500 !py-1.5 !px-3 rounded-sm shadow-md flex items-center gap-2"
                  >
                    <IoIosMail />
                    <span className="!text-[0.7rem]">Email</span>
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
