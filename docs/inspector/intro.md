---
sidebar_position: 1
---

# El Inspector de Elementos

El Inspector de Elementos es una herramienta fundamental en el conjunto de herramientas para desarrolladores (DevTools) de los navegadores web modernos. Te permite ver y modificar en tiempo real el HTML y CSS de cualquier página web.

## ¿Por qué es tan importante?

El Inspector de Elementos te permite:

- **Ver la estructura real del DOM** de una página
- **Modificar elementos HTML** de forma temporal
- **Experimentar con estilos CSS** sin afectar el código fuente
- **Diagnosticar problemas de diseño** de manera eficiente
- **Estudiar cómo están construidos otros sitios web**

## Cómo acceder al Inspector de Elementos

Existen varias formas de abrir el Inspector de Elementos en los navegadores más populares:

### Google Chrome y navegadores basados en Chromium

- Presiona `F12` o `Ctrl+Shift+I` (Windows/Linux) o `Cmd+Option+I` (Mac)
- Haz clic derecho en cualquier elemento y selecciona "Inspeccionar"
- Desde el menú: Ver > Desarrollador > Herramientas para desarrolladores

### Firefox

- Presiona `F12` o `Ctrl+Shift+I` (Windows/Linux) o `Cmd+Option+I` (Mac)
- Haz clic derecho en cualquier elemento y selecciona "Inspeccionar elemento"
- Desde el menú: Herramientas > Desarrollador web > Inspector

### Safari

- Activa primero el menú Desarrollador: Preferencias > Avanzado > "Mostrar menú Desarrollo"
- Luego, presiona `Cmd+Option+I`
- O desde el menú: Desarrollo > Mostrar Inspector Web

## Anatomía del Inspector de Elementos

![Anatomía del Inspector de Elementos](/img/inspector-anatomy.png)

El Inspector de Elementos generalmente se compone de:

1. **Panel DOM**: Muestra la estructura HTML de la página
2. **Panel de Estilos**: Muestra y permite editar los estilos CSS aplicados
3. **Panel de Computed**: Muestra los estilos finales calculados
4. **Panel de Layout**: Muestra información sobre el modelo de caja
5. **Breadcrumb**: Muestra la ruta del elemento seleccionado en el DOM

En las siguientes secciones, exploraremos en detalle cada una de estas partes y cómo utilizarlas efectivamente.