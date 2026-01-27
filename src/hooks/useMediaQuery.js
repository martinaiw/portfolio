import { useState, useEffect } from "react";

/**
 * Custom Hook para detectar si la pantalla es menor a un ancho específico.
 * @param {number} width - El ancho en píxeles (ej: 1000)
 * @returns {boolean} - true si la pantalla es menor al ancho, false si es mayor.
 */
export function useMediaQuery(width) {
  const [targetReached, setTargetReached] = useState(false);

  useEffect(() => {
    const updateTarget = () => {
      if (window.innerWidth < width) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    };

    updateTarget();
    window.addEventListener("resize", updateTarget);

    return () => window.removeEventListener("resize", updateTarget);
  }, [width]); 

  return targetReached;
}