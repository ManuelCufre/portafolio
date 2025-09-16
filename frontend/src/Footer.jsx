import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full !py-6 relative top-12 sm:top-0 bg-[#F2F2F2] dark:bg-[#242424] text-gray-700 dark:text-gray-300 mt-12">
      <div className="max-w-[65%] !mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="!text-xs text-center md:text-left">
          © {new Date().getFullYear()} Manuel Agustín Cufré.
        </p>

        {/* Redes sociales */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/ManuelCufre"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manuel-agustin-cufre/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:manuelcufree@gmail.com?subject=Contacto desde tu portafolio"
            className="hover:text-teal-500 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
