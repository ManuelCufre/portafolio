import Experiencia from "./Experiencia";
import Formacion from "./Formacion";
import { PiPath } from "react-icons/pi";

export default function Trayectoria() {
  return (
    <div
      className="w-[90%] md:w-[65%] min-h-auto md:min-h-[100vh] flex flex-col items-center justify-center gap-6 md:gap-6 dark:text-white md:snap-start !py-16 md:!py-0"
      id="trayectoria"
    >
      <div className="flex gap-2 items-center">
        <div className="flex items-center justify-center !p-[0.60rem] bg-[#F2F2F2] !border-sm !border-[#E3E3E3] dark:!border-[#4A4A4A] dark:bg-[#383838] rounded-lg">
          <PiPath className="!text-[1.3rem] lg:!text-[1.5rem] 2xl:!text-[1.7rem] text-teal-500" />
        </div>
        <h1 className="!font-bold nata-sans text-black dark:text-white !text-xl lg:!text-2xl 2xl:!text-3xl">
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
