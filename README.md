# DokasAgency 2.0 — React

Proyecto web desarrollado con React 19, TypeScript, Vite 6, Tailwind CSS 3, Framer Motion y Lucide React.

## Requisitos
Node.js 20.19+ o 22.12+.

## Desarrollo local
```bash
npm install
npm run dev
```
Abrir la URL que muestra Vite (normalmente http://localhost:5173).

## Compilación para producción
```bash
npm run build
npm run preview
```
Subir el contenido de `dist/` a un hosting estático o desplegar el repositorio en Vercel/Netlify.

## Estructura
- `src/App.tsx`: secciones principales y mockup de dashboard.
- `src/components/Header.tsx`: navegación responsive.
- `src/components/ContactForm.tsx`: formulario de contacto (mailto, **no** envía al servidor).
- `src/data/content.ts`: catálogo de servicios editable.
- `src/styles.css`: estilos y directivas Tailwind.

## Antes de publicar
- Confirmar el correo real de recepción; `hello@dokas.agency` es provisional.
- Conectar el formulario a un endpoint de backend con validación, protección antispam y envío real.
- Sustituir las tarjetas conceptuales por proyectos y métricas reales.
- Incorporar el logotipo original como asset SVG/PNG cuando esté disponible.
- Revisar política de privacidad, SEO, accesibilidad y analítica.

Este starter es funcional y compilable; no incluye autenticación, CMS ni un backend de producción.
