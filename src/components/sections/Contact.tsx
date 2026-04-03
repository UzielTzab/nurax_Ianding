import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input } from '@/components/shared';
import { Card } from '@/components/shared';
import { useInView } from '@/hooks';
import { LINKS } from '@/lib/constants';

interface Comment {
  author: string;
  text: string;
  id: number;
}

/**
 * Contact Section
 * Developer profile + contact form + comments
 */
export const Contact: React.FC = () => {
  const { ref, isInView } = useInView();
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Juan P.',
      text: 'Se ve prometedor el sistema, me interesa para mi tienda.',
    },
    {
      id: 2,
      author: 'Ana López',
      text: '¿Tienen planes de integrar facturación electrónica pronto?',
    },
  ]);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [commentText, setCommentText] = useState({ author: '', text: '' });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.author.trim() && commentText.text.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          author: commentText.author,
          text: commentText.text,
        },
      ]);
      setCommentText({ author: '', text: '' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" ref={ref} className="section container py-20 md:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16"
      >
        {/* Left: Developer Profile */}
        <motion.div variants={itemVariants} className="space-y-8">
          <Card variant="elevated" className="p-8 text-center">
            {/* Avatar Image - Professional Portrait */}
            <motion.div
              className="mb-6 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/user-profile-1.jpg"
                alt="Uziel Tzab"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary-100 shadow-lg"
              />
            </motion.div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-1">Uziel Tzab</h3>
            <p className="text-primary-600 font-semibold mb-4">Creador & Desarrollador Principal</p>

            <p className="text-neutral-600 leading-relaxed mb-6">
              "Mi compromiso es brindarte una herramienta sólida que impulse el crecimiento de tu negocio. Si Nurax
              resuena con lo que necesitas, me encantaría escucharte y ayudarte personalmente a implementarlo."
            </p>

            {/* Contact Buttons */}
            <div className="space-y-3">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => window.open(LINKS.whatsapp, '_blank')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326z" />
                </svg>
                Chat en WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => (window.location.href = `mailto:${LINKS.email}`)}
              >
                ✉️ Enviar Email
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Right: Forms */}
        <motion.div variants={itemVariants} className="space-y-8">
          {/* Contact Form */}
          <Card variant="elevated" className="p-6">
            <h4 className="text-xl font-bold text-neutral-900 mb-4">Envíame un mensaje</h4>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <Input
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <textarea
                placeholder="¿En qué te puedo ayudar?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none h-24"
                required
              />
              <Button variant="primary" type="submit" className="w-full">
                Enviar Mensaje
              </Button>
              {submitSuccess && <p className="text-sm text-green-600">✓ ¡Mensaje enviado con éxito!</p>}
            </form>
          </Card>

          {/* Comments Section */}
          <Card variant="elevated" className="p-6">
            <h4 className="text-xl font-bold text-neutral-900 mb-4">Zona de Comentarios</h4>

            {/* Comments List */}
            <div className="mb-6 max-h-60 overflow-y-auto space-y-3">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                  <p className="font-semibold text-sm text-neutral-900">{comment.author}</p>
                  <p className="text-sm text-neutral-600">{comment.text}</p>
                </div>
              ))}
            </div>

            {/* Add Comment Form */}
            <form onSubmit={handleCommentSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Tu nombre"
                value={commentText.author}
                onChange={(e) => setCommentText({ ...commentText, author: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
              />
              <textarea
                placeholder="Escribe un comentario..."
                value={commentText.text}
                onChange={(e) => setCommentText({ ...commentText, text: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none h-16"
                required
              />
              <Button variant="outline" type="submit" size="sm" className="w-full">
                Publicar Comentario
              </Button>
            </form>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

Contact.displayName = 'Contact';

export default Contact;
