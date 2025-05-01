import { FaCode } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="w-full z-1000 h-16 px-10 bg-gray-900 text-white flex justify-around items-center fixed sombra">
      <div className="flex justify-center items-center gap-2">
        <FaCode />
        <h2 className="text-l font-bold monospace">Manuel Agustín Cufré</h2>
      </div>
      <nav className="header__nav">
        <ul className="flex gap-4">
          <li>
            <a href="">Sobre mí</a>
          </li>
          <li>
            <a href="">Tecnologias</a>
          </li>
          <li>
            <a href="">Proyectos</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
