// Todo el contenido del sitio vive acá: para actualizar la página, editá este archivo.
// Lo que no depende del idioma está arriba; los textos en español e inglés, en `es` y `en`.

export type Lang = 'es' | 'en'
export type SocialKey = 'github' | 'linkedin' | 'email' | 'cv'

export const profile = {
  name: 'Nicolas Caliari',
  handle: 'nicolascaliari',
  email: 'nicolascaliari28@gmail.com',
  photo: '/me.jpeg',
  github: 'https://github.com/caliaritech',
  linkedin: 'https://www.linkedin.com/in/nicolas-caliari-628236236/',
  cv: {
    es: '/CV_Nicolas_Caliari_ES.pdf',
    en: '/CV_Nicolas_Caliari_EN.pdf',
  },
}

export type Certificate = {
  title: Record<Lang, string>
  issuer: string
  date: string
  credential?: string
  url?: string
}

export const certificates: Certificate[] = [
  {
    title: {
      es: 'NestJS + Microservicios: aplicaciones escalables y modulares',
      en: 'NestJS + Microservices: scalable and modular applications',
    },
    issuer: 'Udemy',
    date: '08/2026',
    credential: 'UC-fe7350a4-43f0-48af-bcbb-6d64474c1ebd',
    url: 'https://www.udemy.com/certificate/UC-fe7350a4-43f0-48af-bcbb-6d64474c1ebd/',
  },
  {
    title: { es: 'NodeJS: de cero a experto', en: 'NodeJS: from zero to expert' },
    issuer: 'Udemy',
    date: '07/2026',
    credential: 'UC-f1e8ce31-be43-417b-8ea0-21312139ae52',
    url: 'https://www.udemy.com/certificate/UC-f1e8ce31-be43-417b-8ea0-21312139ae52/',
  },
  {
    title: { es: 'Nest: desarrollo backend escalable con Node', en: 'Nest: scalable backend development with Node' },
    issuer: 'Udemy',
    date: '07/2026',
    credential: 'UC-486e328f-1256-4e70-a580-46c25bcb8d2c',
    url: 'https://www.udemy.com/certificate/UC-486e328f-1256-4e70-a580-46c25bcb8d2c/',
  },
  {
    title: { es: 'TypeScript: tu completa guía y manual de mano', en: 'TypeScript: the complete guide and handbook' },
    issuer: 'Udemy',
    date: '06/2026',
    credential: 'UC-3a6bbef3-c612-4f37-bb44-1bfe456ee113',
    url: 'https://www.udemy.com/certificate/UC-3a6bbef3-c612-4f37-bb44-1bfe456ee113/',
  },
  {
    title: { es: 'Bootcamp de JavaScript en el backend', en: 'Backend JavaScript Bootcamp' },
    issuer: 'Código Facilito',
    date: '10/2023 — 02/2024',
  },
  {
    title: {
      es: 'Diplomatura en programación web full stack con React JS',
      en: 'Full Stack Web Development Diploma with React JS',
    },
    issuer: 'UTN FRBA · e-Learning',
    date: '08/2022',
    credential: 'CER-RXDNTDCD-723790',
  },
  {
    title: { es: 'Certificación avanzada en Full Stack Developer', en: 'Advanced Full Stack Developer Certification' },
    issuer: 'ITBA',
    date: '08/2022',
    credential: '0x28b1…5f1c',
  },
]

type StackColor = 'accent' | 'accent-2' | 'accent-3'

const stackItems: { color: StackColor; items: string[] }[] = [
  { color: 'accent-2', items: ['Node.js', 'NestJS', 'TypeScript', 'Express'] },
  { color: 'accent', items: ['Microservicios', 'Monolito modular', 'GraphQL', 'REST', 'NATS'] },
  { color: 'accent-3', items: ['MongoDB', 'MySQL'] },
  { color: 'accent-2', items: ['Docker', 'Kubernetes', 'ArgoCD', 'GitOps', 'CI/CD', 'GitHub Actions'] },
]

export type Project = {
  name: Record<Lang, string>
  client?: string
  kind: string
  description: Record<Lang, string>
  tags: string[]
  year?: string
  url?: string // sitio publicado (puede existir aunque el código sea privado)
  repo?: string // repo público en GitHub
}

// Back en NestJS + MongoDB salvo el gestor de Barfer (Express). TODO: años y links donde se pueda.
export const projects: Project[] = [
  {
    name: { es: 'E-commerce', en: 'E-commerce' },
    client: 'Barfer',
    kind: 'NestJS',
    description: {
      es: 'Backend de la tienda online: catálogo, carrito, órdenes, stock e integración con pasarela de pagos.',
      en: 'Online store backend: catalog, cart, orders, stock and payment gateway integration.',
    },
    tags: ['NestJS', 'MongoDB', 'Checkout', 'REST'],
  },
  {
    name: { es: 'Gestor del e-commerce', en: 'E-commerce admin panel' },
    client: 'Barfer',
    kind: 'Express',
    description: {
      es: 'Backoffice independiente para administrar órdenes, precios, stock y estadísticas de venta de la tienda.',
      en: 'Standalone backoffice to manage the store’s orders, pricing, stock and sales statistics.',
    },
    tags: ['Express', 'TypeScript', 'MongoDB'],
  },
  {
    name: { es: 'E-commerce con gestor integrado', en: 'E-commerce with built-in admin' },
    client: 'Raw & Fun',
    kind: 'NestJS',
    description: {
      es: 'Tienda online completa con su propio panel de administración de productos, precios, órdenes y stock.',
      en: 'Full online store with its own admin panel for products, pricing, orders and stock.',
    },
    tags: ['NestJS', 'MongoDB', 'Checkout', 'Backoffice'],
  },
  {
    name: { es: 'Plataforma de reclutamiento', en: 'Recruitment platform' },
    client: 'Serlab',
    kind: 'Web app',
    description: {
      es: 'Aplicación para gestionar procesos de selección: base de datos de candidatos, búsquedas, etapas y seguimiento.',
      en: 'App to manage hiring processes: candidate database, job openings, pipeline stages and follow-up.',
    },
    tags: ['NestJS', 'MongoDB', 'TypeScript'],
  },
  {
    name: { es: 'Plataforma de cursos', en: 'Course platform' },
    client: 'Serlab',
    kind: 'Web app',
    description: {
      es: 'Gestión de cursos, alumnos e inscripciones, con despliegues automatizados vía GitHub Actions.',
      en: 'Course, student and enrollment management with automated deployments via GitHub Actions.',
    },
    tags: ['NestJS', 'MongoDB', 'GitHub Actions', 'Docker'],
  },
  {
    name: { es: 'Sitio institucional', en: 'Company website' },
    client: 'Serlab',
    kind: 'Landing',
    description: {
      es: 'Sitio de una sola página para presentar la empresa y sus servicios, con contacto y diseño responsive.',
      en: 'One-page website presenting the company and its services, with contact and responsive design.',
    },
    tags: ['NestJS', 'MongoDB', 'Responsive'],
  },
  {
    name: { es: 'App para aprender inglés', en: 'English learning app' },
    kind: 'Web app',
    description: {
      es: 'Aplicación web para practicar y aprender inglés, con contenido por niveles y seguimiento del progreso.',
      en: 'Web app to practice and learn English, with level-based content and progress tracking.',
    },
    tags: ['NestJS', 'MongoDB', 'TypeScript'],
  },
]

const es = {
  role: 'Backend Engineer',
  roles: ['Backend Engineer', 'Microservicios', 'Node.js · NestJS'],
  badge: 'Teknos · microservicios GraphQL, NATS y Kubernetes',
  location: 'Gdańsk, Polonia',
  timezone: 'CET · Gdańsk',
  terminal: [
    { cmd: 'whoami', out: 'Backend Engineer · +3 años en empresa · +3 años freelance' },
    { cmd: 'grep -i focus ./stack.log', out: 'Node.js, NestJS, TypeScript, GraphQL, NATS, MongoDB, Kubernetes' },
    { cmd: 'cat ./education.txt', out: 'Técnico Universitario en Programación · UTN' },
  ],
  nav: [
    { id: 'profile', label: 'Perfil' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'stack', label: 'Stack' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
  ],
  about: {
    eyebrow: 'perfil',
    title: 'Backend, arquitectura de software y sistemas distribuidos.',
    paragraphs: [
      'Backend Engineer graduado de la Universidad Tecnológica Nacional (UTN), con foco en arquitectura de software y microservicios. Diseño y construyo servicios que escalan, se despliegan de forma automatizada y son fáciles de mantener.',
      'En Teknos Technology Group construyo y mantengo microservicios GraphQL sobre Node.js/NestJS y MongoDB, desplegados en Kubernetes con Docker, ArgoCD y GitOps. En paralelo, como freelancer, desarrollo backends desde cero para clientes. Hoy busco crecer hacia roles internacionales enfocados en arquitectura y sistemas distribuidos.',
    ],
    pillars: [
      {
        tag: './api',
        title: 'Microservicios y GraphQL',
        text: 'Servicios en Node.js y NestJS con GraphQL, comunicación por eventos con NATS y persistencia en MongoDB.',
      },
      {
        tag: './arch',
        title: 'Arquitectura backend',
        text: 'Monolitos modulares y microservicios según el proyecto, con foco en claridad, escalabilidad y mantenibilidad.',
      },
      {
        tag: './ops',
        title: 'Despliegue y operación',
        text: 'Docker, Kubernetes, ArgoCD, pipelines CI/CD con GitHub Actions y prácticas GitOps.',
      },
    ],
  },
  experience: {
    eyebrow: 'experiencia',
    title: 'Trayectoria profesional',
    jobs: [
      {
        period: 'feb. 2024 — actualidad',
        company: 'Teknos Technology Group',
        role: 'Backend Engineer',
        location: 'Buenos Aires, Argentina',
        points: [
          'Desarrollo y mantenimiento de microservicios GraphQL sobre Node.js con MongoDB.',
          'Mejora del rendimiento de la mensajería entre microservicios mediante la migración a NATS.',
          'Despliegue y soporte de servicios en un clúster de Kubernetes, con Docker, pipelines CI/CD y GitOps.',
        ],
        tags: ['Node.js', 'NestJS', 'GraphQL', 'MongoDB', 'NATS', 'Kubernetes', 'ArgoCD', 'Docker'],
      },
      {
        period: 'ene. 2023 — actualidad',
        company: 'Freelance',
        role: 'Backend Engineer',
        location: 'Remoto',
        points: [
          'Backends para e-commerce con NestJS y MongoDB, integrando pasarelas de pago y gestión de stock y precios.',
          'Paneles de gestión (backoffice) con control de órdenes, precios, estadísticas y stock.',
          'Carga de facturas por imagen con IA (Gemini), automatizando la extracción de datos.',
          'Plataforma de gestión de cursos en desarrollo, con despliegues automatizados vía GitHub Actions.',
        ],
        tags: ['NestJS', 'TypeScript', 'MongoDB', 'Pagos', 'Gemini', 'GitHub Actions'],
      },
    ],
  },
  education: {
    eyebrow: 'formación',
    title: 'Estudios y certificaciones',
    academicLabel: 'Formación académica',
    certsLabel: 'Certificaciones',
    cvLabel: 'Descargar CV',
    viewCredential: 'Ver credencial',
    degrees: [
      {
        title: 'Técnico Universitario en Programación',
        org: 'Universidad Tecnológica Nacional',
        period: 'ago. 2022 — 2025 · Finalizado',
      },
    ],
  },
  stack: {
    eyebrow: 'stack',
    title: 'Stack técnico',
    intro: 'Tecnologías que uso a diario en producto, microservicios y despliegues en producción.',
    groups: [
      { title: 'Backend', text: 'Servicios y APIs tipadas, modulares y testeables.' },
      { title: 'Arquitectura', text: 'Diseño de sistemas según la escala y el contexto de cada proyecto.' },
      { title: 'Datos', text: 'Modelado y persistencia para productos en producción.' },
      { title: 'DevOps', text: 'Contenedores, despliegue continuo y operación en Kubernetes.' },
    ],
    items: stackItems,
  },
  projects: {
    eyebrow: 'freelance & open source',
    title: 'Proyectos',
    intro: 'E-commerce, plataformas y sitios construidos desde cero para clientes y proyectos propios.',
    private: 'Proyecto privado',
    viewCode: 'Ver código',
    visit: 'Ver sitio',
    open: 'Abrir',
  },
  contact: {
    title: 'Hablemos.',
    text: 'abierto a oportunidades como Backend Engineer, proyectos freelance y conversaciones sobre arquitectura y microservicios.',
    available: 'Disponible para nuevos proyectos',
    send: 'Enviar email',
    copy: 'Copiar email',
    copied: 'Copiado',
    backToTop: 'Volver arriba',
  },
  ui: {
    openMenu: 'Abrir menú',
    switchLang: 'Switch to English',
  },
  meta: {
    title: 'Nicolas Caliari · Backend Engineer',
    description: 'Backend Engineer especializado en Node.js, NestJS, microservicios, GraphQL, NATS y Kubernetes.',
  },
}

export type Content = typeof es

const en: Content = {
  role: 'Backend Engineer',
  roles: ['Backend Engineer', 'Microservices', 'Node.js · NestJS'],
  badge: 'Teknos · GraphQL microservices, NATS and Kubernetes',
  location: 'Gdańsk, Poland',
  timezone: 'CET · Gdańsk',
  terminal: [
    { cmd: 'whoami', out: 'Backend Engineer · 3+ years in-house · 3+ years freelance' },
    { cmd: 'grep -i focus ./stack.log', out: 'Node.js, NestJS, TypeScript, GraphQL, NATS, MongoDB, Kubernetes' },
    { cmd: 'cat ./education.txt', out: 'University Technical Degree in Programming · UTN' },
  ],
  nav: [
    { id: 'profile', label: 'Profile' },
    { id: 'experience', label: 'Experience' },
    { id: 'stack', label: 'Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
  about: {
    eyebrow: 'profile',
    title: 'Backend, software architecture and distributed systems.',
    paragraphs: [
      'Backend Engineer graduated from Universidad Tecnológica Nacional (UTN), focused on software architecture and microservices. I design and build services that scale, deploy automatically and are easy to maintain.',
      'At Teknos Technology Group I build and maintain GraphQL microservices on Node.js/NestJS and MongoDB, deployed on Kubernetes with Docker, ArgoCD and GitOps. In parallel, as a freelancer, I build backends from scratch for clients. I am now looking to grow into international roles focused on architecture and distributed systems.',
    ],
    pillars: [
      {
        tag: './api',
        title: 'Microservices and GraphQL',
        text: 'Node.js and NestJS services with GraphQL, event-driven communication over NATS and MongoDB persistence.',
      },
      {
        tag: './arch',
        title: 'Backend architecture',
        text: 'Modular monoliths or microservices depending on the project, focused on clarity, scalability and maintainability.',
      },
      {
        tag: './ops',
        title: 'Deployment and operations',
        text: 'Docker, Kubernetes, ArgoCD, CI/CD pipelines with GitHub Actions and GitOps practices.',
      },
    ],
  },
  experience: {
    eyebrow: 'experience',
    title: 'Professional experience',
    jobs: [
      {
        period: 'Feb 2024 — Present',
        company: 'Teknos Technology Group',
        role: 'Backend Engineer',
        location: 'Buenos Aires, Argentina',
        points: [
          'Development and maintenance of GraphQL microservices on a Node.js backend with MongoDB.',
          'Improved messaging performance between microservices by migrating to NATS.',
          'Deployment and support of services on a Kubernetes cluster, using Docker, CI/CD pipelines and GitOps.',
        ],
        tags: ['Node.js', 'NestJS', 'GraphQL', 'MongoDB', 'NATS', 'Kubernetes', 'ArgoCD', 'Docker'],
      },
      {
        period: 'Jan 2023 — Present',
        company: 'Freelance',
        role: 'Backend Engineer',
        location: 'Remote',
        points: [
          'E-commerce backends with NestJS and MongoDB, integrating payment gateways and stock/pricing management.',
          'Management dashboards (backoffice) covering orders, pricing, statistics and stock.',
          'AI-powered (Gemini) invoice upload by image, automating data extraction.',
          'Ongoing course management platform with automated deployments via GitHub Actions.',
        ],
        tags: ['NestJS', 'TypeScript', 'MongoDB', 'Payments', 'Gemini', 'GitHub Actions'],
      },
    ],
  },
  education: {
    eyebrow: 'education',
    title: 'Education and certifications',
    academicLabel: 'Education',
    certsLabel: 'Certifications',
    cvLabel: 'Download CV',
    viewCredential: 'View credential',
    degrees: [
      {
        title: 'University Technical Degree in Programming',
        org: 'Universidad Tecnológica Nacional',
        period: 'Aug 2022 — 2025 · Completed',
      },
    ],
  },
  stack: {
    eyebrow: 'stack',
    title: 'Tech stack',
    intro: 'Technologies I use daily across product work, microservices and production deployments.',
    groups: [
      { title: 'Backend', text: 'Typed, modular and testable services and APIs.' },
      { title: 'Architecture', text: 'System design matched to the scale and context of each project.' },
      { title: 'Data', text: 'Modeling and persistence for production products.' },
      { title: 'DevOps', text: 'Containers, continuous delivery and Kubernetes operations.' },
    ],
    items: [
      stackItems[0],
      { ...stackItems[1], items: ['Microservices', 'Modular monolith', 'GraphQL', 'REST', 'NATS'] },
      stackItems[2],
      stackItems[3],
    ],
  },
  projects: {
    eyebrow: 'freelance & open source',
    title: 'Projects',
    intro: 'E-commerce, platforms and websites built from scratch for clients and personal projects.',
    private: 'Private project',
    viewCode: 'View code',
    visit: 'Visit site',
    open: 'Open',
  },
  contact: {
    title: "Let's talk.",
    text: 'open to Backend Engineer opportunities, freelance projects and conversations about architecture and microservices.',
    available: 'Available for new projects',
    send: 'Send email',
    copy: 'Copy email',
    copied: 'Copied',
    backToTop: 'Back to top',
  },
  ui: {
    openMenu: 'Open menu',
    switchLang: 'Cambiar a español',
  },
  meta: {
    title: 'Nicolas Caliari · Backend Engineer',
    description: 'Backend Engineer specialized in Node.js, NestJS, microservices, GraphQL, NATS and Kubernetes.',
  },
}

export const content: Record<Lang, Content> = { es, en }

export function socialsFor(lang: Lang): { key: SocialKey; label: string; href: string }[] {
  return [
    { key: 'github', label: 'GitHub', href: profile.github },
    { key: 'linkedin', label: 'LinkedIn', href: profile.linkedin },
    { key: 'email', label: 'Email', href: `mailto:${profile.email}` },
    { key: 'cv', label: 'CV', href: profile.cv[lang] },
  ]
}
