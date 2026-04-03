import React from 'react';
import { useScrolled, useMobileMenu, useActiveSection } from '@/hooks';
import { NAVIGATION_LINKS, LINKS, LOGOS } from '@/lib/constants';
import { Button } from '@/components/shared';
import { cn } from '@/lib/cn';

/**
 * Navbar Section
 * - Logo responsive
 * - Links con hover effects
 * - Mobile hamburger
 * - Scrolled state (backdrop)
 */
export const Navbar: React.FC = () => {
  const scrolled = useScrolled(40);
  const { isOpen, toggle, close } = useMobileMenu();
  const activeSection = useActiveSection();

  return (
    <nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl transition-all duration-300"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div
        className={cn(
          'px-4 sm:px-6 lg:px-8 rounded-full transition-all duration-300 backdrop-blur-md',
          scrolled ? 'bg-white/90 shadow-lg' : 'bg-white/70 shadow-sm'
        )}
      >
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand - Logo Nurax */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity group">
            <img 
              src={LOGOS.full}
              alt="Nurax Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300"
              loading="eager"
            />
            <span className="text-lg sm:text-xl font-bold text-primary-700 hidden sm:inline">
              Nurax
            </span>
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center gap-2 flex-1" role="menubar">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative px-4 py-2 text-sm font-medium text-neutral-600 transition-colors duration-300 focus:outline-none"
                  role="menuitem"
                >
                

                  {/* Texto con efecto de color */}
                  <span
                    className={cn(
                      'relative transition-colors duration-500',
                      isActive ? 'text-primary-700 font-semibold' : 'text-neutral-600 group-hover:text-primary-600'
                    )}
                  >
                    {link.label}
                  </span>

                  {/* Línea animada debajo */}
                  <span
                    className={cn(
                      'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-400 to-primary-700 transition-all duration-500',
                      isActive ? 'w-full' : 'w-0 group-hover:w-3/4'
                    )}
                  />

                  {/* Efecto de glow en hover */}
                  <span
                    className={cn(
                      'absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 pointer-events-none',
                      'group-hover:opacity-20 '
                    )}
                  />
                </a>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex gap-2 flex-shrink-0">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.location.href = LINKS.login}
              className="text-xs sm:text-sm"
              aria-label="Ir a iniciar sesión"
            >
              Iniciar Sesión
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggle}
            className="md:hidden flex flex-col gap-1 p-2 rounded-lg hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600"
            aria-label="Abrir menú de navegación"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={cn(
                'w-6 h-0.5 bg-neutral-700 transition-all duration-300',
                isOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-neutral-700 transition-all duration-300',
                isOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-neutral-700 transition-all duration-300',
                isOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-neutral-200" id="mobile-menu" role="navigation" aria-label="Menú de navegación móvil">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-inset"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => {
                  window.location.href = LINKS.login;
                  close();
                }}
              >
                Iniciar Sesión
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;
