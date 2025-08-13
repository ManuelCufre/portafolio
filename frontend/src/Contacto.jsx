export default function Contacto() {
  return (
    <div className="w-[65%] min-h-[100vh] flex flex-col items-center justify-center gap-4 text-white">
      <div className="w-full min-h-[65vh] bg-fondo-oscuro-div flex flex-col justify-around rounded-2xl borde items-center p-8">
        <h2 className="text-2xl bold mb-6">Contacto</h2>
        
        <div className="w-[70%] ">
          <form className="space-y-6 flex flex-col gap-4">
            {/* Campo Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="w-full h-12 borde bg-fondo-oscuro border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:gray-teal-700 focus:border-transparent transition-all"
                placeholder="Tu nombre completo"
                required
                style={{padding: '0.8rem'}}
              />
            </div>

            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full borde h-12  bg-fondo-oscuro border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all"
                placeholder="email"
                required
                style={{padding: '0.8rem'}}
              />
            </div>

            {/* Campo Mensaje */}
            <div>
              <label htmlFor="mensaje" className="text-gray-300 ">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                className="w-full h-40 borde bg-fondo-oscuro border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all"
                placeholder="Escribe tu mensaje aquí..."
                required
                style={{padding: '0.8rem', resize: 'none'}}

              ></textarea>
            </div>

            {/* Botón de Envío */}
            <button
              type="submit"
              className="w-full cursor-pointer !bg-teal-700 hover:bg-teal-600 text-white font-medium h-10 rounded-md shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 "
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}