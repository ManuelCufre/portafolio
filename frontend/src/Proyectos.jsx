import { Image, Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

export default function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: "Sistema de gestion de stock",
      descripción: "descripcion del proyecto ",
      imagen:
        "https://d2ms8rpfqc4h24.cloudfront.net/hellow_radixweb_ce5cbbea77.jpg",
      tec: [
        { nombre: "React.js", icono: <FaReact size={20} /> },
        { nombre: "React.js", icono: <FaReact size={20} /> },
        { nombre: "React.js", icono: <FaReact size={20} /> },
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
      <div className="flex flex-col w-full items-center justify-center gap-4 bg-gray-800 text-white h-screen">
        <div className="flex justify-center items-center gap-2">
          <FaCode />
          <h1 className="text-l font-bold fira-code">Proyectos</h1>
        </div>
        <p className="text-lg text-center max-w-2xl fira-code">
          Aquí hay una lista de algunos de mis proyectos más destacados:
        </p>
        <div className="flex gap-6 flex-col w-3/5 float-center ">
          {proyectos.map((proyecto) => (
            <div className="bg-gray-900 flex gap-6" key={proyecto.id}>
              <Image src={proyecto.imagen} height="300px" alt="" />
              <div className="flex flex-col justify-between">
                <div>
                <h1>{proyecto.titulo}</h1>
                <span>{proyecto.descripción}</span>
                <div className="flex gap-2">
                  {proyecto.tec.map((t) => (
                    <div className="flex gap-2 bg-gray-400 ">
                      {t.icono}
                      <span>{t.nombre}</span>
                    </div>
                  ))}
                </div>
                </div>
               <div className="flex gap-4">
               <Button className="" color={"white"} variant={"outline"}>
                  <FaGithub />
                  <span>Ver codigo</span>
                </Button>
                <Button className="" color={"white"} variant={"outline"}>
                  <FaGithub />
                  <span>Ver pagina</span>
                </Button>
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
