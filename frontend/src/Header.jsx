export default function Header() {
    return (
        <header className="w-full h-16 px-10 bg-gray-800 text-white flex justify-around items-center">
                <h1 className="header__title">Portafolio</h1>
                <nav className="header__nav">
                    <ul className="flex gap-4">
                        <li><a href="">Sobre mí</a></li>
                        <li><a href="">Tecnologias</a></li>
                        <li><a href="">Proyectos</a></li>
                        <li><a href="">Contacto</a></li>

                    </ul>
                </nav>
        </header>

    )
}