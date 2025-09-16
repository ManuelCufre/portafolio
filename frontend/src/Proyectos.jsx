import { Image } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { FiGithub, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { SiExpress } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import imagenTiendaOnline from "./img/tienda-online-main.png";
import tienda3 from "./img/tienda-online-3.png";
import tienda4 from "./img/tienda-online-4.png";
import tienda5 from "./img/tienda-online-5.png";
import tienda6 from "./img/tienda-online-6.png";
import tienda7 from "./img/tienda-online-7.png";
import tienda8 from "./img/tienda-online-8.png";
import tienda9 from "./img/tienda-online-9.png";
import tienda10 from "./img/tienda-online-10.png";
import tienda11 from "./img/tienda-online-11.png";
import tienda12 from "./img/tienda-online-12.png";
import tienda13 from "./img/tienda-online-13.png";
import tienda14 from "./img/tienda-online-14.png";
import tienda15 from "./img/tienda-online-15.png";
import tienda16 from "./img/tienda-online-16.png";
import imagenGestionNegocio from "./img/gestion-negocio-main.png";
import gestion2 from "./img/gestion-negocio-2.png";
import gestion3 from "./img/gestion-negocio-3.png";
import gestion4 from "./img/gestion-negocio-4.png";
import gestion5 from "./img/gestion-negocio-5.png";
import gestion6 from "./img/gestion-negocio-6.png";
import gestion7 from "./img/gestion-negocio-7.png";
import gestion8 from "./img/gestion-negocio-8.png";
import gestion9 from "./img/gestion-negocio-9.png";
import gestion10 from "./img/gestion-negocio-10.png";
import gestion11 from "./img/gestion-negocio-11.png";
import gestion12 from "./img/gestion-negocio-12.png";
import gestion13 from "./img/gestion-negocio-13.png";
import gestion14 from "./img/gestion-negocio-14.png";
import gestion15 from "./img/gestion-negocio-15.png";
import gestion16 from "./img/gestion-negocio-16.png";
import gestion17 from "./img/gestion-negocio-17.png";
import gestion18 from "./img/gestion-negocio-18.png";
import gestion19 from "./img/gestion-negocio-19.png";
import gestion20 from "./img/gestion-negocio-20.png";
import gestion21 from "./img/gestion-negocio-21.png";
import gestion22 from "./img/gestion-negocio-22.png";
import gestion23 from "./img/gestion-negocio-23.png";
import { DiPostgresql } from "react-icons/di";

export default function Proyectos() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const proyectos = [
    {
      id: 1,
      titulo: "Sistema de gestion de stock",
      descripción:
        "Sistema completo de gestión de inventario y stock desarrollado con React.js y Express.js. Permite la gestión total de productos, categorías, proveedores y movimientos de stock. Incluye funcionalidades de búsqueda avanzada, reportes de inventario y un dashboard intuitivo para el seguimiento en tiempo real del estado del negocio.",
      imagen: imagenGestionNegocio,
      imagenes: [
        gestion2,
        gestion3,
        gestion4,
        gestion5,
        gestion6,
        gestion7,
        gestion8,
        gestion9,
        gestion10,
        gestion11,
        gestion12,
        gestion13,
        gestion14,
        gestion15,
        gestion16,
        gestion17,
        gestion18,
        gestion19,
        gestion20,
        gestion21,
        gestion22,
        gestion23,
      ],
      tec: [
        {
          nombre: "React.js",
          icono: <FaReact className="lg:!text-[0.75rem] 2xl:!text-[1rem]" />,
        },
        {
          nombre: "Express.js",
          icono: <SiExpress className="lg:!text-[0.75rem] 2xl:!text-[1rem]" />,
        },
        {
          nombre: "MySQL",
          icono: <FaDatabase className="lg:!text-[0.75rem] 2xl:!text-[1rem]" />,
        },
      ],
      github_url: "https://github.com/ManuelCufre/gestion_negocio.git",
      pagina_url: "https://github.com/ManuelCufre/gestion_negocio.git",
    },
    {
      id: 2,
      titulo: "Tienda online",
      descripción:
        "E-commerce moderno y responsivo construido con React.js y Supabase. Ofrece una experiencia de compra completa con catálogo de productos, carrito de compras, sistema de autenticación de usuarios, procesamiento de pagos y panel de administración. Incluye funcionalidades como filtros avanzados, búsqueda en tiempo real y gestión completa de órdenes.",
      imagen: imagenTiendaOnline,
      imagenes: [
        imagenTiendaOnline,
        tienda3,
        tienda4,
        tienda5,
        tienda6,
        tienda7,
        tienda8,
        tienda9,
        tienda10,
        tienda11,
        tienda12,
        tienda13,
        tienda14,
        tienda15,
        tienda16,
      ],
      tec: [
        {
          nombre: "React.js",
          icono: <FaReact className="lg:!text-[0.75rem] 2xl:!text-[1rem]" />,
        },
        {
          nombre: "Supabase",
          icono: (
            <RiSupabaseFill className="lg:!text-[0.75rem] 2xl:!text-[1rem]" />
          ),
        },
        {
          nombre: "PostgreSQL",
          icono: (
            <DiPostgresql className="lg:!text-[0.8rem] 2xl:!text-[1.1rem]" />
          ),
        },
      ],
      github_url:
        "https://github.com/ManuelCufre/tienda-online-react-supabase.git",
      pagina_url:
        "https://tienda-online-react-supabase-nlq06i79n.vercel.app/productos",
    },
  ];

  const abrirVisor = (imagenes, indexInicial = 0) => {
    setActiveImages(imagenes);
    setActiveIndex(indexInicial);
    setIsViewerOpen(true);
  };

  const cerrarVisor = () => {
    setIsViewerOpen(false);
    setActiveImages([]);
    setActiveIndex(0);
  };

  const irSiguiente = useCallback(() => {
    if (activeImages.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % activeImages.length);
  }, [activeImages.length]);

  const irAnterior = useCallback(() => {
    if (activeImages.length === 0) return;
    setActiveIndex(
      (prev) => (prev - 1 + activeImages.length) % activeImages.length
    );
  }, [activeImages.length]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!isViewerOpen) return;
      if (e.key === "Escape") {
        cerrarVisor();
      } else if (e.key === "ArrowRight") {
        irSiguiente();
      } else if (e.key === "ArrowLeft") {
        irAnterior();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isViewerOpen, activeImages.length, irAnterior, irSiguiente]);
  return (
    <>
      <div
        className="w-[90%] md:w-[65%] min-h-[70rem] sm:min-h-[100vh] flex flex-col items-center justify-center gap-3 md:gap-4 "
        id="proyectos"
      >
        <div className="flex flex-col justify-center ">
          <h1 className="!font-bold monospace dark:text-white !text-[1.3rem] lg:!text-[1.3rem] 2xl:!text-[1.5rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.25rem]">
            PROYECTOS();
          </h1>
          <div className="w-30 h-[3px] bg-teal-500 rounded-md"></div>
        </div>

        <div className="flex gap-6 flex-col w-full float-center ">
          {proyectos.map((proyecto) => (
            <div
              className="flex flex-col md:flex-row items-center md:justify-around h-[26rem] md:h-[35vh] rounded-2xl !border-1 !border-gray-300 bg-[#F2F2F2]  dark:bg-[#242424] hover:shadow-sm dark:hover:shadow-gray-700 dark:!border-gray-600 "
              key={proyecto.id}
            >
              <Image
                src={proyecto.imagen}
                height="90%"
                className="w-[90%] md:w-[46%] relative top-4 md:top-0"
                alt=""
                borderRadius="2xl"
                onClick={() => abrirVisor(proyecto.imagenes, 0)}
                cursor="pointer"
              />
              <div className="flex flex-col justify-center gap-1 lg:gap-2 md:justify-between w-[90%] md:w-[48%] h-[90%] !pt-2 md:!pt-0">
                <h2 className="!font-semibold nata-sans dark:text-white !text-[0.7rem] lg:!text-[1rem] xl:!text-[1.25rem] 2xl:!text-[1.5rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.1rem]">
                  {proyecto.titulo}
                </h2>
                <span className="nata-sans text-gray-700 dark:text-gray-200 !text-[0.6rem] lg:!text-[0.6rem] xl:!text-[0.8rem] 2xl:!text-[0.9rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[0.8rem]">
                  {proyecto.descripción}
                </span>
                <div className="flex gap-2 !pt-2 md:!pt-0">
                  {proyecto.tec.map((t) => (
                    <div
                      href=""
                      className="!text-[0.8rem]  flex gap-2 text-white items-center justify-center rounded-2xl !py-1 !px-2 lg:!px-2 lg:!py-[0.2rem] 2xl:!px-2 2xl:!py-1.5 bg-[#4b4b4b] black:bg-[#4b4b4b]"
                    >
                      {t.icono}
                      <p className="!text-[0.6rem]  lg:!text-[0.6rem] 2xl:!text-[0.75rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[0.65rem]">
                        {t.nombre}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 relative top-2 md:top-0">
                  <a href={proyecto.github_url} target="_blank">
                    <button
                      className="
                    !bg-slate-700 hover:!bg-slate-600 
                    font-medium 
                    !py-1 !px-2
                    lg:!py-1.5 lg:!px-3 2xl:!py-1.5 2xl:!px-3.5  cursor-pointer
                    rounded-sm 
                    shadow-md 
                    hover:shadow-lg 
                    transition-all duration-300 
                    transform hover:-translate-y-0.5 
                    active:translate-y-0 active:scale-95
                    flex items-center justify-center gap-2
                    group
                  "
                    >
                      <FiGithub className="!text-[0.8rem] lg:!text-[0.75rem] 2xl:!text-[0.9rem] text-white group-hover:text-white/90 transition-colors" />
                      <span className="text-white !text-[0.7rem]  lg:!text-[0.7rem] 2xl:!text-[0.9rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[0.75rem]">
                        GitHub
                      </span>
                    </button>
                  </a>
                  <a href={proyecto.pagina_url} target="_blank">
                    <button
                      className="
                    !bg-teal-500 hover:!bg-teal-400 
                    text-white 
                    font-medium 
                                        !py-1 !px-2

                    lg:!py-1.5 lg:!px-3 2xl:!py-1.5 2xl:!px-3.5 cursor-pointer
                    rounded-sm 
                    shadow-md hover:shadow-lg 
                    transition-all duration-300 
                    transform hover:-translate-y-0.5 
                    active:translate-y-0 active:scale-95
                    flex items-center justify-center gap-2
                    group
                  "
                    >
                      <FiExternalLink className="!text-[0.8rem] lg:!text-[0.75rem] 2xl:!text-[0.9rem] text-black  transition-colors" />
                      <span className="text-black !text-[0.7rem] lg:!text-[0.7rem] 2xl:!text-[0.9rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[0.75rem]">
                        Ver app
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isViewerOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={(e) => {
              if (e.target === e.currentTarget) cerrarVisor();
            }}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={irAnterior}
              type="button"
              className="fixed left-4 md:left-8 text-3xl !text-black dark:!text-black !p-2 rounded-full !bg-white hover:!bg-gray-200 transition-colors duration-200 cursor-pointer shadow-md select-none z-[70] pointer-events-auto"
              aria-label="Anterior"
            >
              <FiChevronLeft size={24} />
            </button>

            <div className="max-w-[90vw] max-h-[85vh] flex items-center justify-center z-[55] pointer-events-none">
              <Image
                src={activeImages[activeIndex]}
                alt="preview"
                maxH="85vh"
                maxW="90vw"
                borderRadius="lg"
                shadow="lg"
              />
            </div>

            <button
              onClick={irSiguiente}
              type="button"
              className="fixed right-4 md:right-8 text-3xl !text-black dark:!text-black !p-2 rounded-full !bg-white hover:!bg-gray-200 transition-colors duration-200 cursor-pointer shadow-md select-none z-[70] pointer-events-auto"
              aria-label="Siguiente"
            >
              <FiChevronRight size={24} />
            </button>

            <div className="absolute bottom-6 text-white text-sm opacity-80 z-[60]">
              {activeIndex + 1} / {activeImages.length}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
