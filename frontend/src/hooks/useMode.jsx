import { useEffect, useState } from "react";

export default function useMode() {
    // Por defecto será 'oscuro' y solo cambiará explícitamente a 'claro'
    const [modo, setModo] = useState('dark');

    const handleModo = () => {
        setModo(prevModo => prevModo === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
    if (modo === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    console.log(modo)
}, [modo]);

    return { modo, setModo, handleModo }
}