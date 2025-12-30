# 🌟 Portafolio Profesional de Josue Kennedy

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Portafolio premium desarrollado con **Astro 5.0**, inspirado en una estética "minimalista de lujo": fondos oscuros con acentos dorados, microinteracciones cuidadas y optimización SEO lista para producción.

---

## 📌 Índice

1. [Características principales](#-características-principales)
2. [Stack tecnológico](#️-stack-tecnológico)
3. [Estructura del proyecto](#-estructura-del-proyecto)
4. [Requisitos previos](#-requisitos-previos)
5. [Instalación y uso local](#-instalación-y-uso-local)
6. [Scripts disponibles](#-scripts-disponibles)
7. [Variables de entorno](#-variables-de-entorno)
8. [Despliegue en Vercel](#-despliegue-en-vercel)
9. [Licencia](#-licencia)
10. [Contacto](#-contacto)

---

## 🚀 Características principales

- **⚡ Rendimiento extremo**: render estático, imágenes optimizadas y carga diferida con la arquitectura de islas de Astro.
- **✨ UI/UX de alto nivel**: animaciones con `IntersectionObserver`, microtransiciones y bloques glassmorphism.
- **🔍 SEO listo para producción**: meta tags completas (OG/Twitter), `robots.txt`, `sitemap` y marcado semántico.
- **♿ Accesibilidad garantizada**: contrastes aprobados WCAG, `aria-labels` y diseño fluido en cualquier dispositivo.
- **📬 Formulario funcional**: validaciones con Zod y envío de correos mediante Resend + Astro Actions.

---

## 🛠️ Stack tecnológico

- **Framework**: [Astro 5.0](https://astro.build/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Fuentes**: Outfit (titulares) + Inter (cuerpo) vía [@fontsource](https://fontsource.org/)
- **Validación**: [Zod](https://zod.dev/) para el formulario de contacto
- **Deploy**: [Vercel](https://vercel.com/)

---

## 📂 Estructura del proyecto

```text
/
├── public/             # Assets estáticos (favicon, imágenes)
├── src/
│   ├── components/     # Componentes Astro reutilizables (Hero, Projects, etc.)
│   ├── actions/        # Astro Actions para el formulario de contacto
│   ├── layouts/        # Layouts base con metadatos SEO
│   ├── pages/          # Rutas principales
│   └── assets/         # SVG, fondos y recursos compartidos
└── package.json        # Dependencias y scripts
```

---

## ✅ Requisitos previos

- Node.js **>= 20**
- npm **>= 10**
- Cuenta en [Resend](https://resend.com/) para el envío de correos
- Cuenta en [Vercel](https://vercel.com/) para el despliegue (opcional)

---

## 🧑‍💻 Instalación y uso local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/programfive/portafolio.git
   cd portafolio
   ```
2. **Instalar dependencias**
   ```bash
   npm install
   ```
3. **Levantar el servidor de desarrollo**
   ```bash
   npm run dev
   ```
4. Visita `http://localhost:4321` para ver el sitio.

---

## 🧞 Scripts disponibles

| Script | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el entorno de desarrollo |
| `npm run build` | Genera la build de producción en `dist/` |
| `npm run preview` | Sirve localmente la build generada |

---

## 🔐 Variables de entorno

Crea un archivo `.env` en la raíz (no se versiona) con:

```env
RESEND_API_KEY=tu_api_key_de_resend
```

> En Vercel, añade la misma variable (`RESEND_API_KEY`) en **Project Settings → Environment Variables** para que las funciones serverless puedan enviar correos.

---

## ☁️ Despliegue en Vercel

1. Crea un proyecto nuevo en Vercel y conecta este repositorio.
2. Configura la variable `RESEND_API_KEY` en los entornos **Preview** y **Production**.
3. Despliega; Vercel detectará el framework Astro automáticamente.

> Si usas `vercel deploy --prebuilt`, recuerda ejecutar antes `npm run build` para generar `.vercel/output`.

---

## 📄 Licencia

Este proyecto está licenciado bajo **MIT**. Consulta el archivo `LICENSE` para más detalles.

---

## 📫 Contacto

- Sitio web: [https://josuekennedy.com](https://josuekennedy.com)
- Correo: [kennedysuedavid24@gmail.com](mailto:kennedysuedavid24@gmail.com)
- LinkedIn: [linkedin.com/in/josue-kennedy](https://www.linkedin.com/in/josue-kennedy/)

Construido con ❤️ por Josue Kennedy.
