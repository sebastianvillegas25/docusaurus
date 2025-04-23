# 📘 Documentación Técnica - Proyecto Docusaurus

Este proyecto implementa un sitio de documentación usando **Docusaurus** para servir manuales técnicos internos. El sitio ha sido personalizado y desplegado en entorno local y en cPanel bajo un dominio personalizado.
link: https://sebastianvillegas25.github.io/docusaurus/

---

## 🔧 1. Instalación Local de Docusaurus

### Requisitos:
- Node.js (v18.x o superior)
- npm (v9.x o superior)

### Pasos:

```bash
npx create-docusaurus@latest mi-docu classic
cd mi-docu
npm install
npm run start
Accede a: http://localhost:3000
```
🌐 2. Despliegue en Producción (cPanel)
Construcción del sitio:
```bash
bash
Copiar
Editar
npm run build
Esto genera una carpeta /build con los archivos estáticos.
```
Subida a cPanel:
Zipear la carpeta build/ → build.zip

Subirla al directorio: /public_html/docusaurus/ mediante el Administrador de Archivos

Descomprimirla en ese mismo directorio

Confirmar que el archivo index.html está directamente en public_html/docusaurus

Configuración del baseUrl:
En docusaurus.config.js, modificar:
```bash
js
Copiar
Editar
baseUrl: '/docusaurus/',
Luego volver a construir:

bash
Copiar
Editar
npm run build
```
🌍 3. Dominio Personalizado
Accediendo al sitio por:
```bash
https://tudominio.com/docusaurus
```
📑 4. Contenido del Sitio
El contenido está organizado en 2 manuales principales.
```bash
Archivos:
docs/inspector.md: Manual del inspector de elementos

docs/gestor.md: Guía para implementar un gestor de contraseñas

Ejemplo de estructura de sidebar.js:
js
Copiar
Editar
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Manuales',
      items: ['inspector', 'gestor'],
    },
  ],
};
```
🎨 5. Personalización de Estilos
Se modificó el archivo src/css/custom.css para cambiar colores, tipografías y ocultar marcas de Docusaurus.

Ejemplo:
```bash
css
Editar
.navbar__title,
.footer__copyright {
  display: none;
}

:root {
  --ifm-color-primary: #00aaff;
  --ifm-font-family-base: 'Poppins', sans-serif;
}
Configuración:
En docusaurus.config.js:

js
Copiar
Editar
stylesheets: [
  'src/css/custom.css',
],
```
🧭 6. Menú Lateral con Íconos
Se instalaron íconos con react-icons:

bash
```bash
Editar
npm install react-icons
Ejemplo de uso en una página .mdx:

jsx
Copiar
Editar
import { FaTools } from 'react-icons/fa';
```
# <FaTools /> Manual del Inspector de Elementos
Para mostrar íconos en el menú lateral de forma avanzada.
