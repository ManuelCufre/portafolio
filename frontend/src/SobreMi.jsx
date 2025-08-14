import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { Button } from "@chakra-ui/react";
import { PiBracketsCurly } from "react-icons/pi";
import useMode from "./hooks/useMode";

export default function SobreMi() {
  const { modo } = useMode();

  return (
    <div className="w-[65%] min-h-[100vh] flex justify-center items-center fira-code" id="inicio">
      <div className="w-full min-h-[50vh] flex flex-col gap-8 justify-center items-center rounded-2xl borde bg-[#DBDBDB] text-black dark:bg-[#242424] dark:text-white">
        <div className="flex justify-center items-center gap-2 text-white ">
          <FaCode />
          <h1 className="fira-code">Sobre mi</h1>
        </div>

        <div className="flex text-center gap-16 items-center">
          <div>
            <div className="flex gap-2">
              <h2 className="bold text-white">Hola soy Manuel Cufré</h2>
              <h2 className="color-sec bold">Analista de sistemas</h2>
            </div>
            <p className="text-lg text-center max-w-2xl text-white">
              Soy un desarrollador web apasionado por la tecnología y el
              aprendizaje continuo. Me encanta crear aplicaciones web que sean
              funcionales y atractivas. Siempre estoy buscando nuevos desafíos y
              oportunidades para mejorar mis habilidades. Soy un desarrollador
              web apasionado por la tecnología y el aprendizaje continuo. Me
              encanta crear aplicaciones web que sean funcionales y atractivas.
              Siempre estoy buscando nuevos desafíos y oportunidades para
              mejorar mis habilidades.
            </p>
          </div>
          <div className="flex items-center justify-center color-sec">
            <PiBracketsCurly size={140} />
          </div>
        </div>
        <div className=" flex gap-4 ">
          <a href="">
            <Button colorPalette="teal" variant="solid">
              <IoMdDownload size={20} />
              Descargar CV
            </Button>
          </a>
          <a href="">
            <Button
              bgColor={"black"}
              color="teal.600"
              borderColor={"teal.600"}
              variant="solid"
            >
              <IoIosMail size={20} />
              Email
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
