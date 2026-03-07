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
    id: 'particuliers',
    title: 'Particuliers',
    tagline: 'Conseil, écoute et accompagnement pour vos démarches personnelles',
    pains: [
      'Vous êtes confronté à une situation juridique (divorce, succession, litige) et vous vous sentez démuni',
      'Vous ne savez pas quels sont vos droits ni comment les faire valoir',
      'Les procédures vous semblent complexes et les délais flous',
      'Vous craignez de prendre de mauvaises décisions par manque d\'information'
    ],
    outcomes: [
      'Une écoute attentive et des explications claires sur vos droits et options',
      'Un accompagnement à chaque étape (conseil, négociation, représentation)',
      'Une stratégie adaptée à votre situation et à vos objectifs',
      'Une sérénité retrouvée grâce à un interlocuteur dédié'
    ],
    included: [
      'Premier entretien pour analyser votre situation et vos besoins',
      'Conseil personnalisé et stratégie adaptée à votre dossier',
      'Représentation et accompagnement jusqu\'à la résolution du litige'
    ],
    mistakes: [
      'Attendre la dernière minute avant de consulter un avocat et perdre des options',
      'Signer des documents ou accepter des accords sans faire relire par un avocat',
      'Ne pas rassembler les preuves et documents utiles dès le début'
    ],
    proofLine: 'Un interlocuteur unique, des réponses sous 24h et des honoraires transparents dès le premier échange.',
    ctaText: 'Prendre un RDV gratuit (30 min)'
  },
  {
    id: 'professionnels',
    title: 'Professionnels & Entreprises',
    tagline: 'Sécurisez vos contrats, anticipez les risques, pilotez sereinement',
    pains: [
      'Vos contrats commerciaux ou de travail vous exposent à des risques mal identifiés',
      'Un litige avec un partenaire, un salarié ou un client vous inquiète',
      'Vous créez ou restructurez votre entreprise et les choix juridiques sont complexes',
      'Vous manquez de temps et de visibilité pour anticiper les contentieux'
    ],
    outcomes: [
      'Contrats sécurisés et clauses adaptées à votre activité',
      'Conseil en amont pour limiter les risques et les litiges',
      'Représentation efficace en cas de contentieux (commercial, social, pénal)',
      'Un partenaire juridique réactif pour vos décisions importantes'
    ],
    included: [
      'Audit et rédaction ou révision de contrats (commerciaux, travail, partenariats)',
      'Conseil en création d\'entreprise, statuts et montages juridiques',
      'Accompagnement contentieux et représentation devant les tribunaux'
    ],
    mistakes: [
      'Signer des contrats sans les faire relire et découvrir des clauses déséquilibrées',
      'Négliger les obligations sociales ou fiscales et s\'exposer à des sanctions',
      'Gérer un litige seul alors qu\'un avocat aurait pu éviter l\'escalade'
    ],
    proofLine: 'Réactivité sous 24h, honoraires prévisibles et suivi personnalisé pour vos dossiers.',
    ctaText: 'Prendre un RDV gratuit (30 min)'
  },
  {
    id: 'urgences',
    title: 'Urgences & Contentieux',
    tagline: 'Réactivité, stratégie de défense et accompagnement jusqu\'au bout',
    pains: [
      'Vous êtes convoqué, mis en examen ou confronté à une procédure urgente',
      'Un conflit dégénère et vous avez besoin d\'être représenté rapidement',
      'Une décision de justice ou administrative vous affecte et vous voulez agir',
      'Vous ne savez pas quels délais respecter ni quelles démarches entreprendre'
    ],
    outcomes: [
      'Une prise en charge rapide pour sécuriser vos droits et vos options',
      'Une stratégie de défense ou d\'action adaptée à votre situation',
      'Une représentation devant les tribunaux ou les autorités',
      'Un suivi clair à chaque étape de la procédure'
    ],
    included: [
      'Assistance lors des auditions, gardes à vue et convocations',
      'Préparation du dossier, constitution de partie civile ou défense',
      'Représentation devant les juridictions (civile, pénale, administrative)'
    ],
    mistakes: [
      'Parler aux autorités ou signer des documents sans avoir consulté un avocat',
      'Laisser passer les délais de recours et perdre des droits',
      'Sous-estimer la gravité d\'une procédure et ne pas se faire accompagner'
    ],
    proofLine: 'Disponibilité pour les urgences, explications à chaque étape et engagement sur les délais de réponse.',
    ctaText: 'Prendre un RDV gratuit (30 min)'
  }
];

export const miniTestimonials: MiniTestimonial[] = [
  {
    id: '1',
    quote: 'Un accompagnement clair et rassurant. J\'ai compris mes options et j\'ai pu prendre une décision en toute sérénité.',
    name: 'Nadia',
    role: 'Particulière'
  },
  {
    id: '2',
    quote: 'Réactivité et professionnalisme. Mon dossier a été traité avec rigueur et des explications à chaque étape.',
    name: 'Thomas',
    role: 'Chef d\'entreprise'
  },
  {
    id: '3',
    quote: 'Une écoute attentive et des conseils adaptés à ma situation. Je me suis senti accompagné jusqu\'au bout.',
    name: 'Sofia',
    role: 'Particulière'
  }
];

export const faqSpecialisations: FAQSpecialisation[] = [
  {
    id: '1',
    question: 'Comment sont calculés vos honoraires ?',
    answer: 'Les honoraires dépendent de la nature et de la complexité du dossier. Nous vous proposons un devis personnalisé lors du premier échange (gratuit et sans engagement). Nous travaillons au forfait quand c\'est possible, ou à l\'heure selon le type de mission.'
  },
  {
    id: '2',
    question: 'Travaillez-vous à distance ?',
    answer: 'Oui. Nous proposons des rendez-vous en visioconférence pour votre commodité. Des rendez-vous au cabinet sont également possibles selon vos préférences. Les échanges et documents peuvent se faire de manière sécurisée en ligne.'
  },
  {
    id: '3',
    question: 'Puis-je vous confier mon dossier alors qu\'un autre avocat m\'accompagne déjà ?',
    answer: 'Oui. Changer d\'avocat en cours de procédure est possible. Nous gérons la passation avec votre ancien avocat (récupération du dossier, respect des règles déontologiques) pour assurer une transition en douceur. Vous n\'avez qu\'à nous donner votre accord.'
  },
  {
    id: '4',
    question: 'Sous quel délai répondez-vous ?',
    answer: 'Nous nous engageons à répondre sous 24h ouvrées. Pour les urgences (garde à vue, convocation, délais de recours), nous privilégions la réactivité. Votre sérénité est notre priorité.'
  },
  {
    id: '5',
    question: 'Faites-vous du conseil uniquement, ou aussi de la représentation ?',
    answer: 'Les deux. Nous vous conseillons en amont pour anticiper les risques et prendre les bonnes décisions. En cas de litige ou de procédure, nous vous représentons devant les tribunaux et les autorités. Vous avez un interlocuteur unique pour tout le suivi de votre dossier.'
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