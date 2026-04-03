import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/shared';
import { useInView } from '@/hooks';
import { LINKS } from '@/lib/constants';
import { cn } from '@/lib/cn';

type ScanState = 'scanning' | 'found' | 'success';

/**
 * QR Scanner Section
 * Phone mockup with 3 states: scanning, found, success
 */
export const QrScanner: React.FC = () => {
  const { ref, isInView } = useInView();
  const [scanState, setScanState] = useState<ScanState>('scanning');
  const [activeStep, setActiveStep] = useState(0);
  const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-cycle through states
  useEffect(() => {
    if (isInView) {
      timerRef.current = setInterval(() => {
        setScanState((prev) => {
          if (prev === 'scanning') {
            setActiveStep(1);
            return 'found';
          }
          if (prev === 'found') {
            setActiveStep(2);
            return 'success';
          }
          setActiveStep(0);
          return 'scanning';
        });
      }, 2400);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isInView]);

  const steps = [
    { title: 'Abre el scanner', desc: 'Un clic desde el dashboard o la app.' },
    { title: 'Apunta la cámara', desc: 'Detecta QR y códigos de barras automáticamente.' },
    { title: 'Venta registrada', desc: 'El producto se agrega y el stock se actualiza al instante.' },
  ];

  const fadeTransition = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.3 },
  };

  return (
    <section id="qr-scanner" ref={ref} className="section py-20 md:py-32 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Copy & Steps */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
              Escanea.
              <br />
              <span className="text-primary-400">Vende.</span>
              <br />
              Listo.
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Convierte tu móvil en una pistola de escaneo profesional. Apunta la cámara a cualquier código QR o de
              barras y el producto aparece en pantalla al instante — sin teclear nada.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                onClick={() => setActiveStep(i)}
                className={cn(
                  'p-4 rounded-lg border-2 cursor-pointer transition-all',
                  activeStep === i
                    ? 'border-primary-400 bg-primary-900/40'
                    : 'border-neutral-700 hover:border-primary-500 bg-neutral-800/50'
                )}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="text-sm text-neutral-400">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: '📷', label: 'Sin hardware extra' },
              { icon: '⚡', label: 'Ventas en 1 segundo' },
              { icon: '🔄', label: 'Stock en tiempo real' },
            ].map((chip, i) => (
              <div key={i} className="flex items-center gap-2 bg-primary-900/50 text-primary-300 px-4 py-2 rounded-full border border-primary-700">
                <span>{chip.icon}</span>
                <span className="text-sm font-medium">{chip.label}</span>
              </div>
            ))}
          </div>

          <Button variant="primary" size="lg" onClick={() => (window.location.href = LINKS.login)} className="w-full">
            🚀 Probar scanner gratis
          </Button>
        </motion.div>

        {/* Right: Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center px-4 md:px-0"
        >
          {/* Phone Shell */}
          <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-xs">
            {/* Glow behind phone */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 rounded-3xl blur-3xl opacity-20 -z-10" />

            {/* Phone Body */}
            <div className="bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800">
              {/* Notch */}
              <div className="bg-black h-6 flex justify-center pt-1">
                <div className="w-32 h-5 bg-black rounded-b-3xl" />
              </div>

              {/* Screen */}
              <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 aspect-video relative overflow-hidden flex items-center justify-center">
                {/* SCANNING STATE */}
                {scanState === 'scanning' && (
                  <motion.div {...fadeTransition} className="w-full h-full flex flex-col items-center justify-center p-4">
                    <div className="text-white text-center space-y-4">
                      <p className="text-xs font-semibold tracking-wide">ESCANEANDO QR</p>
                      {/* Scanner Frame */}
                      <div className="w-40 h-40 border-2 border-white rounded-lg relative flex items-center justify-center">
                        {/* Corners */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white" />
                        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white" />
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white" />
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white" />

                        {/* Laser line */}
                        <motion.div
                          className="absolute w-24 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"
                          animate={{ y: [-40, 40] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />

                        {/* QR visual */}
                        <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-60">
                          <rect x="5" y="5" width="35" height="35" fill="none" stroke="white" strokeWidth="2" />
                          <rect x="13" y="13" width="19" height="19" fill="white" />
                          <rect x="60" y="5" width="35" height="35" fill="none" stroke="white" strokeWidth="2" />
                          <rect x="68" y="13" width="19" height="19" fill="white" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-400">Apunta al código QR del producto</p>
                    </div>
                  </motion.div>
                )}

                {/* FOUND STATE */}
                {scanState === 'found' && (
                  <motion.div {...fadeTransition} className="w-full h-full flex flex-col items-center justify-center p-4 space-y-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="text-4xl text-green-400"
                    >
                      ✓
                    </motion.div>
                    <div className="text-white text-center space-y-2">
                      <p className="font-semibold">Audífonos Bluetooth Pro</p>
                      <p className="text-xs text-gray-400">SKU: AUD-BT-042</p>
                      <div className="flex justify-center gap-4 text-sm">
                        <span className="text-green-400">$1,299</span>
                        <span className="text-gray-400">Stock: 14</span>
                      </div>
                      <div className="w-16 h-1 bg-gray-600 rounded-full mx-auto my-2 overflow-hidden">
                        <div className="w-3/4 h-full bg-primary-500" />
                      </div>
                      <p className="text-xs text-gray-400">Agregando a la venta...</p>
                    </div>
                  </motion.div>
                )}

                {/* SUCCESS STATE */}
                {scanState === 'success' && (
                  <motion.div {...fadeTransition} className="w-full h-full flex flex-col items-center justify-center p-4 space-y-4">
                    <motion.div
                      animate={{ scale: [0.5, 1.2, 1] }}
                      transition={{ duration: 0.6 }}
                      className="text-5xl"
                    >
                      💰
                    </motion.div>
                    <div className="text-white text-center space-y-3">
                      <p className="font-semibold">¡Venta registrada!</p>
                      <div className="text-xs space-y-1 text-gray-300">
                        <div className="flex justify-between">
                          <span>Audífonos BT Pro</span>
                          <span>$1,299</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Funda protectora</span>
                          <span>$199</span>
                        </div>
                        <div className="border-t border-gray-600 pt-1 mt-1 flex justify-between font-semibold">
                          <span>Total</span>
                          <span>$1,498</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400">Registrado en 1.2s</p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Home Bar */}
              <div className="bg-black h-6 flex justify-center">
                <div className="w-32 h-1 bg-gray-700 rounded-full" />
              </div>
            </div>

            {/* Stats around phone */}
            <div className="absolute -left-20 top-20 bg-white rounded-lg shadow-lg p-3 text-sm hidden lg:block">
              <p className="font-bold text-primary-700">⚡ 1.2s</p>
              <p className="text-xs text-neutral-600">Por escaneo</p>
            </div>

            <div className="absolute -right-20 top-1/2 bg-white rounded-lg shadow-lg p-3 text-sm hidden lg:block">
              <p className="font-bold text-primary-700">📦 ∞</p>
              <p className="text-xs text-neutral-600">Productos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

QrScanner.displayName = 'QrScanner';

export default QrScanner;
