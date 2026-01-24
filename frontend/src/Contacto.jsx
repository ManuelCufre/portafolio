import InformacionContacto from "./components/InformacionContacto";
import EnviarMensaje from "./components/EnviarMensaje";

export default function Contacto() {
  return (
    <div
      className="w-[90%] md:w-[65%] md:min-h-[100vh] flex flex-col items-center justify-center gap-3 md:gap-6 dark:text-white snap-start"
      id="contacto"
    >
      <div className="flex flex-col justify-center">
        <h1 className="!font-bold monospace !text-[1.3rem] lg:!text-[1.3rem] 2xl:!text-[1.5rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.25rem]">
          CONTACTO();
        </h1>
        <div className="w-27 h-[3px] bg-teal-500 rounded-md"></div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-8">
        <InformacionContacto />
        <EnviarMensaje />
      </div>
    </div>
  );
}