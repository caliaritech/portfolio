// Todo el contenido del sitio vive acá: para actualizar la página, editá este archivo.
// Lo que no depende del idioma está arriba; los textos en español e inglés, en `es` y `en`.

export type Lang = 'es' | 'en'

export const profile = {
  name: 'Nicolas Caliari',
  email: 'nicolascaliari28@gmail.com',
  photo: '/me.jpeg',
  github: 'https://github.com/caliaritech',
  linkedin: 'https://www.linkedin.com/in/nicolascaliari/',
  lorico: 'https://www.lorico.app/',
  cv: {
    es: '/CV_Nicolas_Caliari_ES.pdf',
    en: '/CV_Nicolas_Caliari_EN.pdf',
  },
  tools: ['Node.js', 'NestJS', 'TypeScript', 'GraphQL', 'MongoDB', 'Docker', 'Kubernetes'],
}

// Otros proyectos ("También construí"). `url` es opcional: si está, la fila es un link.
type Built = { name: string; url?: string; text: Record<Lang, string> }

export const built: Built[] = [
  {
    name: 'Barfer',
    url: 'https://www.barferalimento.com/',
    text: { es: 'Tienda online + panel de gestión', en: 'Online store + admin panel' },
  },
  {
    name: 'Raw & Fun',
    url: 'https://www.rawandfun.com/',
    text: { es: 'Tienda online con back office', en: 'Online shop with back office' },
  },
  {
    name: 'Serlab',
    text: { es: 'Plataformas de selección y cursos, sitio web', en: 'Hiring & course platforms, website' },
  },
  {
    name: 'Invoice reader',
    text: { es: 'IA que lee facturas desde una foto', en: 'AI that reads invoices from a photo' },
  },
]

const es = {
  hero: {
    title: 'Hago que apps y tiendas online ',
    highlight: 'funcionen detrás de escena.',
    text: 'Backend engineer. Logins, pagos, pedidos, datos: lo que tiene que funcionar sí o sí.',
    talk: 'Hablemos',
    cv: 'Descargar CV',
  },
  location: { city: 'Gdańsk, Polonia', note: 'De Argentina · trabajo en horario CET', time: 'Hora local' },
  highlights: [
    { value: '3+', label: 'años construyendo backends en Teknos Technology Group' },
    { value: 'Founder', label: 'de Lorico, una app para aprender inglés' },
    { value: 'Freelance', label: 'desde 2023: tiendas online y plataformas para clientes' },
  ],
  lorico: {
    badge: 'Producto propio · En vivo',
    text: 'Una app para aprender y practicar inglés, con gente real usándola todos los días.',
    link: 'Visitar lorico.app',
  },
  builtTitle: 'También construí',
  doTitle: 'Qué hago',
  doing: [
    {
      title: 'El motor detrás de apps y tiendas',
      text: 'Logins, pagos, pedidos, stock y datos: la lógica que tiene que andar en cada click.',
    },
    {
      title: 'Sistemas que crecen sin empezar de cero',
      text: 'Arquitectura pensada para sumar usuarios y funciones sin reescribir todo.',
    },
    {
      title: 'Online y actualizándose solos',
      text: 'Despliegues automáticos y servidores que se mantienen solos, sin cortes ni pasos manuales.',
    },
  ],
  toolsTitle: 'Herramientas',
  cta: ['¿Tenés una idea?', 'Hablemos.'],
  switchLang: 'Cambiar idioma',
  meta: {
    title: 'Nicolas Caliari · Backend Engineer',
    description: 'Backend engineer: hago que apps y tiendas online funcionen detrás de escena. Node.js, NestJS, GraphQL, MongoDB y Kubernetes.',
  },
}

export type Content = typeof es

const en: Content = {
  hero: {
    title: 'I make apps and online stores ',
    highlight: 'work behind the scenes.',
    text: 'Backend engineer. Logins, payments, orders, data — the stuff that has to just work.',
    talk: "Let's talk",
    cv: 'Download CV',
  },
  location: { city: 'Gdańsk, Poland', note: 'From Argentina · works in CET', time: 'Local time' },
  highlights: [
    { value: '3+', label: 'years building backends at Teknos Technology Group' },
    { value: 'Founder', label: 'of Lorico, an app to learn English' },
    { value: 'Freelance', label: 'since 2023: online stores and platforms for clients' },
  ],
  lorico: {
    badge: 'My own product · Live',
    text: 'An app to learn and practice English, with real people using it every day.',
    link: 'Visit lorico.app',
  },
  builtTitle: 'Also built',
  doTitle: 'What I do',
  doing: [
    {
      title: 'The engine behind apps and stores',
      text: 'Logins, payments, orders, stock and data — the logic that has to work on every click.',
    },
    {
      title: 'Systems that grow without starting over',
      text: 'Architecture built to add users and features without rewriting everything.',
    },
    {
      title: 'Online and updating automatically',
      text: 'Automated deployments and self-healing servers — no downtime, no manual steps.',
    },
  ],
  toolsTitle: 'Tools',
  cta: ['Have an idea?', 'Let’s talk.'],
  switchLang: 'Switch language',
  meta: {
    title: 'Nicolas Caliari · Backend Engineer',
    description: 'Backend engineer: I make apps and online stores work behind the scenes. Node.js, NestJS, GraphQL, MongoDB and Kubernetes.',
  },
}

export const content: Record<Lang, Content> = { es, en }
