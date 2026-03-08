'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import Icon from '@/components/Icon';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  // Récupérer le domaine depuis l'URL si présent
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const domaine = params.get('domaine');
    if (domaine) {
      setFormData(prev => ({ ...prev, sujet: `Demande concernant le ${domaine.replace(/-/g, ' ')}` }));
    }
  }, []);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[0-9\s\+\-\(\)]{10,}$/.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};

    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <>
        <section className="bg-gradient-to-br from-primary-50 to-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center mb-6 text-primary-600">
                <Icon name="check" className="w-16 h-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Demande envoyée avec succès !
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Merci pour votre message. Je vous réponds dans les meilleurs délais.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center py-20 overflow-hidden">
        {/* Image de fond Lyon */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lille-background.jpg"
            alt="Lyon"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay pour lisibilité */}
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Prenez rendez-vous ou envoyez-moi un message. Je vous réponds dans les meilleurs délais.
              </p>
          </div>
        </div>
      </section>

      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* 2 options visibles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                    <Icon name="phone" className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Appeler</h3>
                <p className="text-gray-700 mb-6">
                  Pour une urgence ou une question rapide, appelez-moi directement.
                </p>
                <CTAButton href="tel:+33472123456" variant="primary" className="w-full">
                  04 72 12 34 56
                </CTAButton>
              </Card>

              <Card className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                    <Icon name="mail" className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Envoyer un email</h3>
                <p className="text-gray-700 mb-6">
                  Envoyez-moi un email pour une demande de rendez-vous ou une question.
                </p>
                <CTAButton href="mailto:contact@maitre-moreau-avocat.fr" variant="secondary" className="w-full">
                  contact@maitre-moreau-avocat.fr
                </CTAButton>
              </Card>
            </div>

            {/* Formulaire de contact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Card>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Envoyer un message
                  </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.nom ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-invalid={!!errors.nom}
                    aria-describedby={errors.nom ? 'nom-error' : undefined}
                  />
                  {errors.nom && (
                    <p id="nom-error" className="mt-1 text-sm text-red-500" role="alert">
                      {errors.nom}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.telephone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-invalid={!!errors.telephone}
                    aria-describedby={errors.telephone ? 'telephone-error' : undefined}
                  />
                  {errors.telephone && (
                    <p id="telephone-error" className="mt-1 text-sm text-red-500" role="alert">
                      {errors.telephone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    placeholder="Ex: Demande de rendez-vous - Droit du travail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </Card>
          </div>

          {/* Informations pratiques */}
          <div>
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informations pratiques
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="phone" className="w-5 h-5 text-primary-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                  </div>
                  <a href="tel:+33472123456" className="text-gray-700 hover:text-primary-600 transition-colors">
                    04 72 12 34 56
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="mail" className="w-5 h-5 text-primary-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  </div>
                  <a href="mailto:contact@maitre-moreau-avocat.fr" className="text-gray-700 hover:text-primary-600 transition-colors">
                    contact@maitre-moreau-avocat.fr
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="home" className="w-5 h-5 text-primary-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
                  </div>
                  <p className="text-gray-700">
                    15 rue de la République<br />
                    69002 Lyon
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="clock" className="w-5 h-5 text-primary-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Horaires</h3>
                  </div>
                  <p className="text-gray-700">
                    Lundi - Vendredi : 9h - 18h<br />
                    Sur rendez-vous uniquement
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 italic">
                    Réponse dans les meilleurs délais. Pour les urgences, privilégiez l'appel téléphonique.
                  </p>
                </div>
              </div>
            </Card>

            {/* Mentions RGPD */}
            <Card className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Confidentialité
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Vos données sont traitées de manière confidentielle et sécurisée, conformément au RGPD. 
                Elles sont utilisées uniquement pour répondre à votre demande et ne sont jamais transmises à des tiers.
              </p>
            </Card>
          </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
