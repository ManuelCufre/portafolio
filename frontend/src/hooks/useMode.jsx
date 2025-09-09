import { useColorMode } from "../components/ui/color-mode";
import { useEffect } from "react";

export default function useMode() {
    const { colorMode, toggleColorMode, setColorMode } = useColorMode();

    useEffect(() => {
        if (!colorMode || colorMode === 'system') {
            setColorMode('dark');
        }
    }, [colorMode, setColorMode]);

    const handleModo = () => {
        toggleColorMode();
    }

    return { 
        modo: colorMode || 'dark', 
        setModo: toggleColorMode, 
        handleModo 
    }
}