import Experiencia from "./Experiencia";
import Formacion from "./Formacion";

export default function Trayectoria() {
  return (
    <div
      className="w-[90%] md:w-[65%] md:min-h-[100vh] flex flex-col items-center justify-center gap-3 md:gap-6 dark:text-white snap-start"
      id="trayectoria"
    >
      <div className="flex flex-col justify-center">
        <h1 className="!font-bold monospace !text-[1.3rem] lg:!text-[1.3rem] 2xl:!text-[1.5rem] [@media(min-width:1536px)_and_(max-width:1919px)]:!text-[1.25rem]">
          TRAYECTORIA();
        </h1>
        <div className="w-35 h-[3px] bg-teal-500 rounded-md"></div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-8">
        <Experiencia />
        <Formacion />
      </div>
    </div>
  );
}
