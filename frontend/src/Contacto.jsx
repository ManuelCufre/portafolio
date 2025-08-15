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
      const response = await fetch('http://localhost:3001/send-email', {
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
      
      <div className="w-full min-h-[55vh] flex flex-col justify-around rounded-2xl borde items-center p-8 !border-1 !border-gray-300 bg-[#F2F2F2] dark:bg-[#242424] hover:shadow-sm dark:hover:shadow-gray-700 dark:!border-gray-600 ">
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
                className="w-full h-12 borde bg-[#F2F2F2] !border-1 !border-gray-200 dark:bg-[#1E1E1F] rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all"
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
                className="w-full borde h-12 bg-[#F2F2F2] dark:bg-[#1E1E1F]  border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all"
                placeholder="Email"
                style={{padding: '0.8rem'}}
                autoComplete="off"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
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
                className="w-full h-40 borde bg-[#F2F2F2] dark:bg-[#1E1E1F] border black:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all"
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
              <div className={`p-3 rounded-md ${
                submitStatus.isError 
                  ? 'bg-red-500/20 text-red-300' 
                  : 'bg-teal-500/20 text-teal-300'
              }`}>
                {submitStatus.message}
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