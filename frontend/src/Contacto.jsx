import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });

    try {
      const baseUrl = (import.meta.env.VITE_API_URL || 'http://localhost:3001').replace(/\/+$/, '');
      const response = await fetch(`${baseUrl}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Error al enviar el mensaje');

      setSubmitStatus({ 
        message: '¡Mensaje enviado con éxito!', 
        isError: false 
      });
      reset();
    } catch (error) {
      setSubmitStatus({ 
        message: error.message || 'Ocurrió un error', 
        isError: true 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-[65%] min-h-[100vh] flex flex-col items-center justify-center gap-4 dark:text-white" id="contacto">
      <div className="flex flex-col justify-center">
        <h1 className="bold monospace">CONTACTO();</h1>
        <div className="w-27 h-[3px] bg-teal-500 rounded-md"></div>
      </div>
      
      <div className="w-full min-h-[70vh] flex flex-col justify-around rounded-2xl borde items-center p-8 !border-1 !border-gray-300 bg-[#F2F2F2] dark:bg-[#242424] hover:shadow-sm dark:hover:shadow-gray-700 dark:!border-gray-600 ">
        <div className="w-[70%]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex flex-col gap-4">
            {/* Campo Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium mb-1 nata-sans  black:text-gray-200" style={{fontWeight: '600'}}>
                Nombre
              </label>
              <input
                id="nombre"
                {...register('nombre', { 
                  required: 'Este campo es obligatorio',
                  maxLength: {
                    value: 50,
                    message: 'Máximo 50 caracteres'
                  }
                })}
                className="w-full h-12 borde bg-[#FAFAFA] !border-1 !border-gray-300 dark:bg-[#1E1E1F] dark:!border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                placeholder="Nombre completo"
                style={{padding: '0.8rem'}}
                autoComplete="off"
              />
              {errors.nombre && (
                <p className="mt-1 text-sm text-red-400">{errors.nombre.message}</p>
              )}
            </div>

            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-1 nata-sans black:text-gray-200" style={{fontWeight: '600'}}>
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Este campo es obligatorio',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                  }
                })}
                className="w-full h-12 borde bg-[#FAFAFA] !border-1 !border-gray-300 dark:bg-[#1E1E1F] dark:!border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                placeholder="Email"
                style={{padding: '0.8rem'}}
                autoComplete="off"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

             {/* Campo Asunto */}
            <div>
              <label htmlFor="email" className="block text-sm mb-1 nata-sans black:text-gray-200" style={{fontWeight: '600'}}>
                Asunto
              </label>
              <input
                id="asunto"
                
                {...register('asunto', { 
                  required: 'Este campo es obligatorio',
                  minLength: {
                    value: 2,
                    message: 'Mínimo 10 caracteres'
                  },
                  maxLength: {
                    value: 500,
                    message: 'Máximo 500 caracteres'
                  }
                })}
                className="w-full h-12 borde bg-[#FAFAFA] !border-1 !border-gray-300 dark:bg-[#1E1E1F] dark:!border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                placeholder="Asunto"
                style={{padding: '0.8rem'}}
                autoComplete="off"
              />
              {errors.asunto && (
                <p className="mt-1 text-sm text-red-400">{errors.asunto.message}</p>
              )}
            </div>

            {/* Campo Mensaje */}
            <div>
              <label htmlFor="mensaje" className="black:text-gray-200 nata-sans" style={{fontWeight: '600'}}>
                Mensaje
              </label>
              <textarea
                id="mensaje"
                {...register('mensaje', { 
                  required: 'Este campo es obligatorio',
                  minLength: {
                    value: 10,
                    message: 'Mínimo 10 caracteres'
                  },
                  maxLength: {
                    value: 500,
                    message: 'Máximo 500 caracteres'
                  }
                })}
                rows="4"
                className="w-full h-40 bg-[#FAFAFA] dark:bg-[#1E1E1F] !border-1 rounded-2xl dark:!border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                placeholder="Escribe tu mensaje aquí..."
                style={{padding: '0.8rem', resize: 'none'}}
                autoComplete="off"
              ></textarea>
              {errors.mensaje && (
                <p className="mt-1 text-sm text-red-400">{errors.mensaje.message}</p>
              )}
            </div>

            

            {/* Mensaje de estado del envío */}
            {submitStatus.message && (
              <div className={`relative !p-4 rounded-lg !border-l-4 shadow-md transition-all duration-300 ${
                submitStatus.isError 
                  ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-500' 
                  : 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 !border-teal-500'
              }`}>
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                    submitStatus.isError 
                      ? 'bg-red-500 text-white' 
                      : 'bg-teal-500 text-white'
                  }`}>
                    {submitStatus.isError ? (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {submitStatus.message}
                    </p>
                    {!submitStatus.isError && (
                      <p className="text-xs mt-1 opacity-80">
                        Te responderé pronto. ¡Gracias por contactarme!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
            

            {/* Botón de Envío */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-40 self-center cursor-pointer !text-black !bg-teal-500 hover:bg-teal-400 font-medium h-10 rounded-md shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}