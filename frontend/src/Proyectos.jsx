import { Image, Button } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import useMode from "./hooks/useMode";

export default function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: "Sistema de gestion de stock",
      descripción: "descripcion del proyecto ",
      imagen:
        "https://d2ms8rpfqc4h24.cloudfront.net/hellow_radixweb_ce5cbbea77.jpg",
      tec: [
        { nombre: "React.js", icono: <FaReact size={16} /> },
        { nombre: "React.js", icono: <FaReact size={16} /> },
        { nombre: "React.js", icono: <FaReact size={16} /> },
      ],
    },
    {
      id: 2,
      titulo: "Ecommerce",
      descripción: "descripcion del proyecto",
      imagen:
        "https://d2ms8rpfqc4h24.cloudfront.net/hellow_radixweb_ce5cbbea77.jpg",
      tec: [
        { nombre: "React.js", icono: <FaReact size={20} /> },
        { nombre: "React.js", icono: <FaReact size={20} /> },
        { nombre: "React.js", icono: <FaReact size={20} /> },
      ],
    },
  ];
  return (
    <>
      <div className="w-[65%] min-h-[100vh] flex flex-col items-center justify-center gap-4 text-white ">
        <div className="flex justify-center items-center gap-2 ">
          <FaCode />
          <h1 className=" font-bold fira-code text-color">Proyectos</h1>
        </div>
        <p className="text-lg text-center max-w-2xl fira-code">
          Aquí hay una lista de algunos de mis proyectos más destacados:
        </p>
        <div className="flex gap-6 flex-col w-full float-center ">
          {proyectos.map((proyecto) => (
            <div className="bg-fondo-oscuro-div flex gap-6 borde rounded-2xl " key={proyecto.id}>
              <Image src={proyecto.imagen} height="300px" alt="" />
              <div className="flex flex-col justify-around">
                <div>
                  <h2>{proyecto.titulo}</h2>
                  <span>{proyecto.descripción}</span>
                  <div className="flex gap-2">
                    {proyecto.tec.map((t) => (
                      <a
                        href=""
                        className="flex gap-2 color-fondo-oscuro borde items-center justify-center rounded-2xl h-6 w-24  "
                      >
                        {t.icono}
                        <p className="text-sm small-text">{t.nombre}</p>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="">
                    <Button colorPalette="teal" variant="solid" size={'sm'}>
                      <FiGithub /> Ver códico
                    </Button>
                  </a>
                  <a>
                  <Button bgColor={'black'} color="teal.600" borderColor={'teal.600'} variant="solid" size={'sm'}>
                      <FiExternalLink /> Ver página
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
