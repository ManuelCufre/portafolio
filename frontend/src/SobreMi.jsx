import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { Button, Icon, Flex, Text, Link } from "@chakra-ui/react";

export default function SobreMi() {
  return (
    <div className=" w-full relative top-30 mt-16 flex flex-col gap-8 justify-center items-center bg-gray-900 fira-code text-white">
      <div className="flex justify-center items-center gap-2">
          <FaCode />
          <h1 className="text-l font-bold fira-code">Sobre mi</h1>
        </div>
      <p className="text-lg text-center max-w-2xl">
        Soy un desarrollador web apasionado por la tecnología y el aprendizaje
        continuo. Me encanta crear aplicaciones web que sean funcionales y
        atractivas. Siempre estoy buscando nuevos desafíos y oportunidades para
        mejorar mis habilidades.
        Soy un desarrollador web apasionado por la tecnología y el aprendizaje
        continuo. Me encanta crear aplicaciones web que sean funcionales y
        atractivas. Siempre estoy buscando nuevos desafíos y oportunidades para
        mejorar mis habilidades.
      </p>
      <div className="sombra flex gap-4 ">
      
       
        <a href="">
        <Button colorPalette="teal" variant="solid">
        <IoMdDownload  size={20} />Curriculum</Button>
        </a>
        <a href="">
          <Button bgColor={'black'} color="teal.600" borderColor={'teal.600'} variant="solid">
          <IoIosMail  size={20} />Email</Button>
        </a>
      </div>
    </div>
  );
}
