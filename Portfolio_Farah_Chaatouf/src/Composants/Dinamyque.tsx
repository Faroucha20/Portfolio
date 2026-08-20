import { useEffect, useState } from 'react';
import photo from "../assets/Image_Diplome.png";

export default function Dinamyque() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Le multiplicateur (ici 0.3) permet d'ajuster la vitesse de rotation.
      // Plus il est élevé, plus l'image tournera vite lors du scroll.
      setRotation(window.scrollY * 0.5);
    };

    // Ajout de l'écouteur d'événement au montage du composant
    window.addEventListener('scroll', handleScroll);
    
    // Nettoyage de l'écouteur au démontage pour éviter les fuites de mémoire
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <img
        src={photo} 
        alt="Élément décoratif tournant"
        // On utilise Tailwind pour la taille de base, et le style en ligne pour la rotation dynamique
        className="h-full object-contain transition-transform duration-75 ease-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
}

