import Experiencia from "./Experiencia";
import Formacion from "./Formacion";
import { PiPath } from "react-icons/pi";

export default function Trayectoria() {
  return (
    <div
      className="w-[90%] md:w-[65%] md:min-h-[100vh] flex flex-col items-center justify-center gap-3 md:gap-6 dark:text-white lg:snap-start"
      id="trayectoria"
    >
      <div className="flex gap-2 items-center">
               <div className="flex items-center justify-center !p-[0.60rem] bg-[#F2F2F2] !border-sm !border-[#E3E3E3] dark:!border-[#4A4A4A] dark:bg-[#383838] rounded-lg">
                 <PiPath className="!text-[1.3rem] lg:!text-[1.5rem] 2xl:!text-[1.7rem] text-teal-500" />
               </div>
               <h1 className="!font-bold nata-sans text-black dark:text-white !text-[1.3rem] lg:!text-[1.5rem] 2xl:!text-[1.7rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.25rem]">
                 Mi Trayectoria
               </h1>
             </div>

      <div className="flex flex-col md:flex-row w-full gap-8">
        <Experiencia />
        <Formacion />
      </div>
    </div>
  );
}
