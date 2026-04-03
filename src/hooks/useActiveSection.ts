import { useEffect, useState } from 'react';

/**
 * Hook para detectar qué sección está activa/visible en la página
 * Usa Intersection Observer para detectar el scroll
 */
export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Crear un observer para detectar las secciones visibles
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // 30% de la sección debe estar visible
      }
    );

    // Observar todas las secciones con ID
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return activeSection;
};
