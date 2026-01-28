import InformacionContacto from "./components/InformacionContacto";
import EnviarMensaje from "./components/EnviarMensaje";
import { LuPhone } from "react-icons/lu";

export default function Contacto() {
  return (
    <div
      className="w-[90%] md:w-[65%] min-h-[100vh] flex flex-col items-center justify-center gap-6 md:gap-6 dark:text-white lg:snap-start"
      id="contacto"
    >
      <div className="flex gap-2 items-center">
        <div className="flex items-center justify-center !p-[0.60rem] bg-[#F2F2F2] !border-sm !border-[#E3E3E3] dark:!border-[#4A4A4A] dark:bg-[#383838] rounded-lg">
          <LuPhone className="!text-[1.3rem] lg:!text-[1.5rem] 2xl:!text-[1.7rem] text-teal-500" />
        </div>
        <h1 className="!font-bold nata-sans text-black dark:text-white !text-xl lg:!text-2xl 2xl:!text-3xl">
          Contacto
        </h1>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-8 items-center">
        <InformacionContacto />
        <EnviarMensaje />
      </div>
    </div>
  );
}
