import { useState } from "react";

export default function useMode(){
    const [modo, setModo] = useState('oscuro');

  const handleModo = () => {
    if (modo == 'oscuro'){
      setModo('claro')
    }else if (modo == 'claro'){
      setModo('oscuro')
    }
  }
    return {modo, setModo, handleModo}
}