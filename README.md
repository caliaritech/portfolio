# Nicolas Caliari · Portfolio

Portfolio personal: Backend Engineer (Node.js, NestJS, microservicios). Sitio estático en español e inglés.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · lucide-react

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

## Dónde editar

| Qué | Dónde |
|---|---|
| Textos, experiencia, certificados, proyectos, links (ES y EN) | `src/data/profile.ts` |
| Colores y tipografías | bloque `@theme` al inicio de `src/index.css` |
| Foto, CVs, imagen para compartir | `public/` (`me.jpeg`, `CV_*.pdf`, `og-image.jpg`) |
| URL pública del sitio | `.env` → `VITE_SITE_URL` |

El idioma se elige con el botón ES/EN, con `?lang=es|en` en la URL o, la primera vez, según el idioma del navegador.

## Estructura

```
src/
  data/profile.ts     contenido del sitio
  i18n.tsx            idioma actual (contexto + hook useLang)
  components/         una sección por archivo (Hero, Profile, Experience, ...)
  index.css           paleta, fuentes y estilos compartidos
```

## Deploy

Pensado para Vercel o Netlify: build `npm run build`, carpeta de salida `dist`.
Configurar `VITE_SITE_URL` con la URL final para que la vista previa al compartir funcione.
