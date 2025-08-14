import { Image } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { SiExpress } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

import useMode from "./hooks/useMode";

export default function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: "Sistema de gestion de stock",
      descripción:
        "I revamped the website to offer water delivery services in Belogorodka and its neighboring regions. The site has an attractive design, a user-friendly layout, and seamless integration with analytical tools to enhance customer engagement. Users can easily submit water delivery requests using the order form provided and gain convenient access to bottled drinking water. ",
      imagen:
        "https://d2ms8rpfqc4h24.cloudfront.net/hellow_radixweb_ce5cbbea77.jpg",
      tec: [
        { nombre: "React.js", icono: <FaReact size={16} /> },
        { nombre: "Express.js", icono: <SiExpress size={16} /> },
        { nombre: "MySQL", icono: <FaDatabase size={16} /> },
      ],
    },
    {
      id: 2,
      titulo: "Ecommerce",
      descripción:
        "I revamped the website to offer water delivery services in Belogorodka and its neighboring regions. The site has an attractive design, a user-friendly layout, and seamless integration with analytical tools to enhance customer engagement. Users can easily submit water delivery requests using the order form provided and gain convenient access to bottled drinking water.",
      imagen:
        "https://d2ms8rpfqc4h24.cloudfront.net/hellow_radixweb_ce5cbbea77.jpg",
      tec: [
        { nombre: "React.js", icono: <FaReact size={16} /> },
        { nombre: "Supabase", icono: <RiSupabaseFill size={16} /> },
        { nombre: "MySQL", icono: <FaDatabase size={16} /> },
      ],
    },
  ];
  return (
    <>
      <div
        className="w-[65%] min-h-[100vh] flex flex-col items-center justify-center gap-4 dark:text-white "
        id="proyectos"
      >
        <div className="flex flex-col justify-center ">
          <h1 className="bold monospace ">PROYECTOS();</h1>
          <div className="w-30 h-[3px] bg-teal-500 rounded-md"></div>
        </div>

        <div className="flex gap-6 flex-col w-full float-center ">
          {proyectos.map((proyecto) => (
            <div
              className="flex items-center justify-around h-[35vh] borde rounded-2xl bg-[#DBDBDB] dark:bg-[#242424] "
              key={proyecto.id}
            >
              <Image
                src={proyecto.imagen}
                height="90%"
                alt=""
                borderRadius="2xl"
              />
              <div className="flex flex-col justify-between  w-[48%] h-[90%] p-8 ">
                <h2 className="bold nata-sans text-black black:text-white">
                  {proyecto.titulo}
                </h2>
                <span
                  className="nata-sans text-gray-800  black:text-white "
                  style={{ fontSize: "0.9rem" }}
                >
                  {proyecto.descripción}
                </span>
                <div className="flex gap-2">
                  {proyecto.tec.map((t) => (
                    <div
                      href=""
                      className="flex gap-2  items-center justify-center rounded-2xl h-7 w-24 bg-[#4b4b4b]  black:bg-[#4b4b4b]"
                    >
                      {t.icono}
                      <p className="" style={{ fontSize: "0.75rem" }}>
                        {t.nombre}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    className="
                    !bg-slate-700 hover:!bg-slate-600 
                    text-white 
                    font-medium 
                    h-9 w-30 cursor-pointer
                    rounded-sm 
                    shadow-md hover:shadow-lg 
                    transition-all duration-300 
                    transform hover:-translate-y-0.5 
                    active:translate-y-0 active:scale-95
                    flex items-center justify-center gap-2
                    group
                  "
                  >
                    <FiGithub className="text-lg group-hover:text-white/90 transition-colors" />
                    <span>GitHub</span>
                  </button>
                  <button
                    className="
                    !bg-teal-800 hover:!bg-teal-700 
                    text-white 
                    font-medium 
                    h-9 w-30 cursor-pointer
                    rounded-sm 
                    shadow-md hover:shadow-lg 
                    transition-all duration-300 
                    transform hover:-translate-y-0.5 
                    active:translate-y-0 active:scale-95
                    flex items-center justify-center gap-2
                    group
                  "
                  >
                    <FiExternalLink className="text-lg group-hover:text-white/90 transition-colors" />
                    <span>Ver app</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
