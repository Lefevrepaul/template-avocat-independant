export interface Domain {
  id: string;
  title: string;
  description: string;
  situations: string[]; // Situations fréquentes
  icon: string;
  hook?: string; // Accroche (1 phrase)
  included?: string[]; // 3 points "inclus"
  idealFor?: string; // Idéal pour
}

export interface Specialisation {
  id: string;
  title: string;
  tagline: string;
  pains: string[];
  outcomes: string[];
  included: string[];
  mistakes: string[];
  proofLine: string;
  ctaText: string;
}

export interface MiniTestimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export interface FAQSpecialisation {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export interface MethodStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Commitment {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const domains: Domain[] = [
  {
    id: 'droit-du-travail',
    title: 'Droit du travail',
    description: 'Conseil et représentation en matière de droit du travail et de relations sociales',
    hook: 'Protégez vos intérêts et ceux de vos salariés avec un accompagnement juridique adapté.',
    included: [
      'Conseil en gestion des relations de travail',
      'Rédaction de contrats de travail et avenants',
      'Accompagnement dans les procédures prud\'homales'
    ],
    idealFor: 'Entreprises, dirigeants, salariés, représentants du personnel',
    situations: [
      'Conflit avec un salarié ou un employeur',
      'Négociation d\'un départ ou d\'un licenciement',
      'Question sur les droits et obligations au travail',
      'Litige devant les prud\'hommes'
    ],
    icon: 'users'
  },
  {
    id: 'droit-de-la-famille',
    title: 'Droit de la famille',
    description: 'Accompagnement dans les situations familiales et personnelles',
    hook: 'Un accompagnement bienveillant pour traverser les moments difficiles.',
    included: [
      'Conseil en matière de divorce et séparation',
      'Rédaction de conventions et accords familiaux',
      'Accompagnement dans les procédures de succession'
    ],
    idealFor: 'Particuliers, personnes en situation de divorce, personnes en situation de succession',
    situations: [
      'Divorce ou séparation à organiser',
      'Question sur la garde des enfants',
      'Succession à gérer',
      'Convention de PACS ou mariage'
    ],
    icon: 'users'
  },
  {
    id: 'droit-penal',
    title: 'Droit pénal',
    description: 'Défense et représentation en matière pénale',
    hook: 'Une défense rigoureuse pour protéger vos droits.',
    included: [
      'Assistance lors des auditions et gardes à vue',
      'Représentation devant les tribunaux correctionnels',
      'Conseil et stratégie de défense'
    ],
    idealFor: 'Particuliers, entreprises, dirigeants confrontés à une procédure pénale',
    situations: [
      'Mise en examen ou garde à vue',
      'Confrontation à une plainte',
      'Audition par les forces de l\'ordre',
      'Procédure pénale en cours'
    ],
    icon: 'shield-check'
  },
  {
    id: 'droit-des-affaires',
    title: 'Droit des affaires',
    description: 'Conseil juridique pour les entreprises et les professionnels',
    hook: 'Sécurisez vos opérations commerciales avec un accompagnement juridique adapté.',
    included: [
      'Conseil en création d\'entreprise et choix de structure',
      'Rédaction de contrats commerciaux',
      'Accompagnement dans les opérations de croissance'
    ],
    idealFor: 'Entreprises, dirigeants, créateurs d\'entreprise',
    situations: [
      'Création ou modification d\'entreprise',
      'Négociation de contrats commerciaux',
      'Litige commercial ou contractuel',
      'Opération de fusion ou acquisition'
    ],
    icon: 'briefcase'
  },
  {
    id: 'droit-immobilier',
    title: 'Droit immobilier',
    description: 'Conseil et représentation en matière immobilière',
    hook: 'Sécurisez vos transactions immobilières avec un accompagnement professionnel.',
    included: [
      'Conseil pour l\'achat ou la vente de biens immobiliers',
      'Rédaction et révision d\'actes notariés',
      'Accompagnement dans les litiges immobiliers'
    ],
    idealFor: 'Particuliers, professionnels, investisseurs immobiliers',
    situations: [
      'Achat ou vente d\'un bien immobilier',
      'Litige avec un locataire ou un propriétaire',
      'Question sur un bail commercial',
      'Problème de copropriété'
    ],
    icon: 'home'
  },
  {
    id: 'droit-des-etrangers',
    title: 'Droit des étrangers',
    description: 'Accompagnement dans les démarches administratives et les procédures d\'immigration',
    hook: 'Un accompagnement clair pour vos démarches administratives.',
    included: [
      'Conseil en matière de titres de séjour',
      'Accompagnement dans les procédures de naturalisation',
      'Représentation en cas de refus ou de recours'
    ],
    idealFor: 'Étrangers résidant en France, personnes souhaitant s\'installer en France, demandeurs de naturalisation',
    situations: [
      'Demande ou renouvellement de titre de séjour',
      'Procédure de naturalisation',
      'Recours contre un refus administratif',
      'Question sur les droits des étrangers'
    ],
    icon: 'users'
  }
];

export const specialisations: Specialisation[] = [
  {
    id: 'entrepreneurs',
    title: 'Entrepreneurs & Indépendants',
    tagline: 'Gagnez du temps, évitez les erreurs, optimisez légalement',
    pains: [
      'L\'administratif vous prend trop de temps et vous éloigne de votre activité',
      'Vous n\'êtes pas sûr de respecter toutes vos obligations légales',
      'Vous payez peut-être trop d\'impôts sans le savoir',
      'Vous manquez de visibilité sur la santé financière de votre activité'
    ],
    outcomes: [
      'Toute votre comptabilité gérée dans les temps, sans stress',
      'Optimisation fiscale légale pour réduire vos charges',
      'Tableaux de bord simples pour suivre votre activité',
      'Conseils personnalisés pour faire grandir votre business'
    ],
    included: [
      'Tenue de comptabilité complète et déclarations fiscales',
      'Optimisation fiscale légale et conseils personnalisés',
      'Tableaux de bord mensuels clairs et accessibles'
    ],
    mistakes: [
      'Ne pas déclarer certaines charges déductibles (ex: frais kilométriques, repas)',
      'Choisir le mauvais statut juridique et payer plus d\'impôts que nécessaire',
      'Ne pas anticiper les échéances fiscales et se retrouver avec des surprises'
    ],
    proofLine: 'Point de suivi mensuel + tableau de bord simple, compréhensible en 10 minutes.',
    ctaText: 'Prendre un RDV gratuit (30 min)'
  },
  {
    id: 'liberales',
    title: 'Professions libérales',
    tagline: 'Revenus irréguliers, impôts maîtrisés, sérénité retrouvée',
    pains: [
      'Vos revenus varient d\'un mois sur l\'autre, difficile d\'anticiper vos impôts',
      'Vous ne savez pas comment optimiser votre protection sociale',
      'La gestion des honoraires et des déclarations vous prend du temps',
      'Vous vous inquiétez de ne pas respecter les obligations déontologiques'
    ],
    outcomes: [
      'Anticipation de vos impôts et charges sociales, plus de surprises',
      'Optimisation de votre protection sociale et de votre retraite',
      'Gestion simplifiée de vos honoraires et déclarations',
      'Conformité garantie avec les obligations de votre profession'
    ],
    included: [
      'Gestion comptable adaptée aux revenus irréguliers',
      'Conseil en optimisation sociale et fiscale pour professions libérales',
      'Accompagnement sur les spécificités déontologiques de votre métier'
    ],
    mistakes: [
      'Ne pas provisionner suffisamment pour les impôts et se retrouver en difficulté',
      'Choisir le mauvais régime de protection sociale (RSI, CIPAV, etc.)',
      'Ne pas déclarer correctement les charges professionnelles déductibles'
    ],
    proofLine: 'Prévisions fiscales trimestrielles + suivi de trésorerie adapté à vos revenus variables.',
    ctaText: 'Prendre un RDV gratuit (30 min)'
  },
  {
    id: 'pme',
    title: 'PME',
    tagline: 'Pilotage précis, structuration solide, croissance maîtrisée',
    pains: [
      'Vous pilotez à l\'aveugle sans indicateurs clairs sur votre marge et trésorerie',
      'La gestion de la paie et du social devient complexe avec plusieurs salariés',
      'Vous avez du mal à structurer vos processus et à anticiper les obligations',
      'Vous manquez de temps pour les décisions stratégiques importantes'
    ],
    outcomes: [
      'Tableaux de bord de pilotage clairs (marge, trésorerie, rentabilité)',
      'Gestion complète de la paie et des déclarations sociales automatisée',
      'Structuration de vos processus comptables et administratifs',
      'Accompagnement stratégique pour vos décisions importantes'
    ],
    included: [
      'Comptabilité complète, bilan et compte de résultat',
      'Gestion de la paie et déclarations sociales (DSN, URSSAF)',
      'Tableaux de bord de pilotage et conseil stratégique mensuel'
    ],
    mistakes: [
      'Ne pas suivre régulièrement la trésorerie et se retrouver en difficulté de paiement',
      'Mal gérer les déclarations sociales et avoir des pénalités de retard',
      'Prendre des décisions importantes sans analyser l\'impact financier'
    ],
    proofLine: 'Réunion de pilotage mensuelle + tableau de bord trésorerie en temps réel.',
    ctaText: 'Prendre un RDV gratuit (30 min)'
  }
];

export const miniTestimonials: MiniTestimonial[] = [
  {
    id: '1',
    quote: 'Depuis que je travaille avec eux, j\'ai retrouvé ma sérénité. Plus de stress avec les déclarations.',
    name: 'Nadia',
    role: 'Infirmière libérale'
  },
  {
    id: '2',
    quote: 'Les tableaux de bord mensuels me permettent de piloter mon activité en toute tranquillité.',
    name: 'Thomas',
    role: 'Artisan'
  },
  {
    id: '3',
    quote: 'Un accompagnement professionnel qui nous fait économiser plusieurs milliers d\'euros par an.',
    name: 'Sofia',
    role: 'Gérante de PME'
  }
];

export const faqSpecialisations: FAQSpecialisation[] = [
  {
    id: '1',
    question: 'Prenez-vous les auto-entrepreneurs ?',
    answer: 'Oui, nous accompagnons les auto-entrepreneurs pour leurs déclarations et leur optimisation fiscale. Nous les aidons aussi à évoluer vers un statut plus adapté quand leur activité grandit.'
  },
  {
    id: '2',
    question: 'Travaillez-vous à distance ?',
    answer: 'Oui, nous travaillons principalement à distance via notre espace client sécurisé. Vous envoyez vos documents en ligne et nous les traitons. Des rendez-vous en visio ou au cabinet sont possibles selon vos préférences.'
  },
  {
    id: '3',
    question: 'Je suis en retard, vous pouvez reprendre ?',
    answer: 'Oui, nous pouvons reprendre votre comptabilité à tout moment, même si vous êtes en retard. Nous nous chargeons de régulariser la situation et de mettre à jour vos déclarations. Pas de jugement, juste des solutions.'
  },
  {
    id: '4',
    question: 'Vous m\'aidez à choisir mon statut ?',
    answer: 'Absolument. Lors d\'un rendez-vous de diagnostic, nous analysons votre situation et vos objectifs pour vous conseiller le statut juridique le plus adapté (SAS, SARL, EURL, etc.).'
  },
  {
    id: '5',
    question: 'Faites-vous du conseil, ou seulement la compta ?',
    answer: 'Nous faisons les deux. Au-delà de la gestion comptable, nous vous apportons des conseils stratégiques : optimisation fiscale, pilotage de trésorerie, choix de statut, décisions importantes. Vous avez un vrai partenaire, pas juste un prestataire.'
  }
];

// Témoignages supprimés - conformité avec les règles de communication des avocats
// Section remplacée par "Engagements du cabinet" ou "Pourquoi nous choisir"

export const methodSteps: MethodStep[] = [
  {
    id: 'analyse',
    number: '01',
    title: 'Écoute',
    description: 'J\'écoute votre situation, j\'analyse vos besoins et vos objectifs pour vous proposer un accompagnement sur mesure et adapté à votre cas.'
  },
  {
    id: 'strategie',
    number: '02',
    title: 'Analyse & Stratégie',
    description: 'Nous définissons ensemble la stratégie à suivre : conseil, négociation amiable, médiation ou représentation devant les tribunaux selon votre situation.'
  },
  {
    id: 'suivi',
    number: '03',
    title: 'Stratégie & Suivi',
    description: 'Je vous accompagne tout au long de la procédure avec un suivi régulier, des mises à jour claires et une disponibilité pour répondre à vos questions.'
  }
];

export const commitments: Commitment[] = [
  {
    id: 'confidentialite',
    title: 'Confidentialité',
    description: 'Respect strict du secret professionnel. Vos informations sont protégées et traitées avec la plus grande discrétion.',
    icon: 'lock'
  },
  {
    id: 'transparence',
    title: 'Transparence',
    description: 'Honoraires clairs dès le premier échange. Pas de surprise, pas de frais cachés. La transparence est un engagement.',
    icon: 'shield-check'
  },
  {
    id: 'reactivite',
    title: 'Réactivité',
    description: 'Réponse sous 24h ouvrées. Pour les urgences, je privilégie la réactivité. Votre sérénité est ma priorité.',
    icon: 'clock'
  },
  {
    id: 'pedagogie',
    title: 'Pédagogie',
    description: 'Explications claires sans jargon. Je traduis la complexité juridique en termes compréhensibles. Vous savez ce qui se passe.',
    icon: 'document'
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Comment sont calculés vos honoraires ?',
    answer: 'Nos honoraires sont établis en fonction de la nature et de la complexité de votre dossier. Nous vous proposons un devis personnalisé lors d\'un premier échange, sans engagement. La transparence est un engagement du cabinet.'
  },
  {
    id: '2',
    question: 'Puis-je changer d\'avocat en cours de procédure ?',
    answer: 'Oui, vous pouvez changer d\'avocat à tout moment. Nous gérons la transition avec votre ancien avocat pour assurer la continuité de votre dossier. La passation se fait dans le respect des règles déontologiques.'
  },
  {
    id: '3',
    question: 'Travaillez-vous à distance ?',
    answer: 'Oui, nous proposons des rendez-vous en visioconférence pour votre commodité. Des rendez-vous au cabinet sont également possibles selon vos préférences. Nous nous adaptons à vos contraintes.'
  },
  {
    id: '4',
    question: 'Quels documents dois-je apporter lors du premier rendez-vous ?',
    answer: 'Les documents nécessaires dépendent de votre situation. Nous vous indiquerons précisément quels documents sont utiles lors de la prise de rendez-vous. En général, il s\'agit des documents liés à votre dossier (contrats, correspondances, décisions, etc.).'
  },
  {
    id: '5',
    question: 'Sous quel délai répondez-vous ?',
    answer: 'Nous nous engageons à répondre à vos questions sous 24h ouvrées. Pour les urgences, nous privilégions la réactivité. Votre sérénité est notre priorité.'
  },
  {
    id: '6',
    question: 'Proposez-vous une médiation ou une négociation amiable ?',
    answer: 'Oui, nous privilégions toujours la résolution amiable des litiges quand c\'est possible. La médiation et la négociation font partie de notre approche. Si un accord amiable n\'est pas possible, nous vous représentons efficacement devant les tribunaux.'
  }
];

// Types pour la page À propos
export interface AboutData {
  headline: string;
  subheadline: string;
  storyParagraphs: string[];
  values: Array<{
    title: string;
    proof: string;
  }>;
  commitments: Array<{
    title: string;
    description: string;
  }>;
  credentials: string[];
  stats: Array<{
    label: string;
    value: string;
  }>;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  focusAreas: string[];
  imagePath?: string; // Chemin vers l'image (optionnel)
}

export const about: AboutData = {
  headline: 'Un cabinet qui vous accompagne — avec rigueur et humanité.',
  subheadline: 'Clarté, réactivité, expertise : nous vous conseillons et vous représentons avec professionnalisme.',
  storyParagraphs: [
    'Notre cabinet est né d\'un constat simple : trop de personnes et d\'entreprises se sentent démunies face à la complexité juridique. Entre les textes de loi difficiles à comprendre, les procédures intimidantes et les enjeux importants, beaucoup hésitent à agir. Nous avons créé ce cabinet pour changer cela.',
    'Notre approche repose sur trois piliers : la clarté (nous vous expliquons vos droits et obligations en termes simples), la réactivité (réponse sous 24h, pas de délais qui traînent) et l\'expertise (conseils adaptés, représentation efficace). Nous traduisons la complexité juridique en solutions concrètes pour votre situation.',
    'Ce que nos clients obtiennent ? De la sérénité d\'abord : plus de stress avec les aspects juridiques, tout est anticipé et géré. Ensuite, une meilleure protection : vous savez quels sont vos droits et comment les défendre. Enfin, des décisions mieux informées : nous vous aidons à comprendre l\'impact juridique de vos choix avant de vous lancer.'
  ],
  values: [
    {
      title: 'Pédagogie',
      proof: 'Chaque conseil est accompagné d\'explications claires. Vous comprenez vos droits et vos options, pas seulement vous les recevez.'
    },
    {
      title: 'Proactivité',
      proof: 'Nous anticipons les risques juridiques et vous alertons en amont. Plus de surprises de dernière minute.'
    },
    {
      title: 'Clarté',
      proof: 'Pas de jargon inutile. Nous parlons votre langue et expliquons les enjeux de manière accessible.'
    },
    {
      title: 'Exigence',
      proof: 'Chaque dossier est traité avec rigueur. Protection garantie, erreurs évitées, qualité constante.'
    }
  ],
  commitments: [
    {
      title: 'Confidentialité',
      description: 'Respect strict du secret professionnel. Vos informations sont protégées et traitées avec la plus grande discrétion.'
    },
    {
      title: 'Transparence',
      description: 'Honoraires clairs dès le premier échange. Pas de surprise, pas de frais cachés. La transparence est un engagement.'
    },
    {
      title: 'Réactivité',
      description: 'Réponse sous 24h ouvrées. Pour les urgences, nous privilégions la réactivité. Votre sérénité est notre priorité.'
    },
    {
      title: 'Pédagogie',
      description: 'Explications claires sans jargon. Nous traduisons la complexité juridique en termes compréhensibles. Vous savez ce qui se passe.'
    }
  ],
  credentials: [
    'Cabinet inscrit au Barreau',
    'Respect strict du secret professionnel',
    'Outils sécurisés et conformes RGPD',
    'Process de reprise de dossier rodé et sans stress'
  ],
  stats: [
    {
      label: 'Années d\'expérience',
      value: '20'
    },
    {
      label: 'Suivi mensuel possible',
      value: '100%'
    },
    {
      label: 'RDV de cadrage offerts',
      value: '30 min'
    },
    {
      label: 'Clients accompagnés',
      value: '150+'
    }
  ]
};

export const team: TeamMember[] = [
  {
    name: 'Marc Dubois',
    role: 'Avocat associé',
    bio: 'Diplômé et inscrit au Barreau, j\'accompagne les entreprises et les particuliers depuis plus de 20 ans dans leurs démarches juridiques. Ma mission : vous conseiller, vous représenter et vous donner les clés pour prendre les bonnes décisions juridiques. Au-delà de la représentation, je vous apporte mon expertise pour vous conseiller dans vos décisions stratégiques.',
    focusAreas: ['Droit des affaires', 'Conseil juridique', 'Contentieux commercial', 'Droit social'],
    imagePath: '/images/team/image portrait pro homme.jpg'
  },
  {
    name: 'Sophie Martin',
    role: 'Avocate - Droit social',
    bio: 'Spécialisée dans le droit social et du travail, je m\'assure que toutes vos relations de travail sont conformes et sécurisées. Mon objectif : vous simplifier la gestion juridique de vos salariés et vous éviter les litiges coûteux. Je vous accompagne aussi dans vos questions de droit du travail et de conventions collectives.',
    focusAreas: ['Droit du travail', 'Relations sociales', 'Contentieux prud\'homal', 'Conventions collectives'],
    imagePath: '/images/team/image portrait pro femme.jpg'
  },
  {
    name: 'Thomas Bernard',
    role: 'Avocat - Droit pénal',
    bio: 'Expert en droit pénal, je vous accompagne dans les procédures pénales avec rigueur et détermination. Je vous conseille et vous représente devant les tribunaux pour défendre vos intérêts. Mon approche : vous expliquer clairement chaque étape de la procédure et vous accompagner avec professionnalisme.',
    focusAreas: ['Droit pénal', 'Défense pénale', 'Procédures pénales', 'Conseil juridique'],
    imagePath: '/images/team/image portrait pro homme fiscaliste.jpg'
  },
  {
    name: 'Julie Lefebvre',
    role: 'Avocate - Droit de la famille',
    bio: 'Spécialisée dans le droit de la famille, j\'accompagne les particuliers dans les moments difficiles avec bienveillance et professionnalisme. Je vous conseille et vous représente dans les procédures de divorce, de succession et de protection des personnes. Mon rôle : vous accompagner avec humanité.',
    focusAreas: ['Droit de la famille', 'Divorce', 'Succession', 'Protection des personnes'],
    imagePath: '/images/team/image portrait pro femme assistante.jpg'
  }
];

export const faqAbout: FAQ[] = [
  {
    id: 'about-1',
    question: 'Êtes-vous spécialisés dans certains domaines ?',
    answer: 'Nous intervenons dans plusieurs domaines du droit : droit du travail, droit de la famille, droit pénal, droit des affaires, droit immobilier et droit des étrangers. Chaque domaine a ses spécificités, et nous adaptons notre approche en conséquence. Nous avons une solide expérience dans ces domaines.'
  },
  {
    id: 'about-2',
    question: 'Peut-on travailler 100% à distance ?',
    answer: 'Oui, nous proposons des rendez-vous en visioconférence pour votre commodité. Vous pouvez également nous rencontrer au cabinet selon vos préférences. Nous nous adaptons à vos contraintes et à vos besoins.'
  },
  {
    id: 'about-3',
    question: 'Comment se passe la reprise de dossier ?',
    answer: 'Nous gérons la reprise de votre dossier de A à Z. Nous contactons votre ancien avocat pour récupérer vos documents, nous vérifions que tout est à jour, et nous assurons une transition en douceur. Vous n\'avez pas à vous en occuper, nous gérons tout. Changer d\'avocat est possible et nous vous guidons dans les démarches.'
  },
  {
    id: 'about-4',
    question: 'Comment se déroule le premier échange ?',
    answer: 'Lors du premier rendez-vous, nous analysons votre situation, vos besoins et vos objectifs. Nous vous expliquons vos droits et vos options, et nous vous proposons un accompagnement adapté. Ce premier échange permet d\'établir un devis personnalisé et de définir la stratégie à suivre.'
  }
];