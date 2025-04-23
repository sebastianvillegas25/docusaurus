---
sidebar_position: 2
---

# Funciones básicas del Inspector

## Seleccionar elementos

Existen varias formas de seleccionar elementos para inspeccionar:

1. **Selección directa**: Haz clic en cualquier elemento en el panel DOM.
2. **Selector de elementos**: Haz clic en el icono de flecha (🔍) en la esquina superior izquierda de DevTools y luego haz clic en cualquier elemento de la página.
3. **Búsqueda por texto**: Utiliza Ctrl+F (o Cmd+F en Mac) para buscar elementos por texto o selectores CSS.

## Navegar por el DOM

Una vez que has seleccionado un elemento, puedes:

- **Expandir/colapsar nodos**: Haz clic en las flechas junto a los elementos que contienen elementos hijos.
- **Navegar con el teclado**: 
  - Usa las flechas arriba/abajo para moverte entre elementos
  - Usa las flechas izquierda/derecha para colapsar/expandir elementos
  - Usa Tab para moverte entre las propiedades de un elemento

## Modificar el HTML

Para modificar el HTML de un elemento:

1. **Edición rápida**: Haz doble clic en una etiqueta, atributo o texto para editarlo.
2. **Edición completa**: Haz clic derecho en un elemento y selecciona "Edit as HTML" para editar todo el HTML del elemento y sus hijos.
3. **Añadir atributos**: Haz doble clic en el espacio después del nombre de la etiqueta.

## Ver y modificar estilos CSS

El panel de estilos muestra todos los estilos CSS aplicados al elemento seleccionado:

1. **Estilos en cascada**: Los estilos se muestran en orden de especificidad, con los estilos más específicos en la parte superior.
2. **Estilos calculados**: Muestra los valores finales después de aplicar la cascada de CSS.
3. **Modelo de caja**: Visualiza el tamaño, padding, border y margin del elemento.

Para modificar un estilo:

1. Haz clic en el valor que quieres cambiar y escribe el nuevo valor.
2. Para añadir una nueva propiedad, haz clic en un espacio vacío dentro de un bloque de reglas.
3. Para añadir una nueva regla, haz clic en el botón "+" en la parte superior del panel de estilos.

## Estados de los elementos

Puedes simular estados como `:hover`, `:active`, `:focus` y `:visited` utilizando el menú `:hov` en el panel de estilos.

## Depurar diseño responsive

Utiliza el modo de diseño responsive (icono de dispositivo móvil) para:

1. **Simular diferentes dispositivos**: Selecciona dispositivos predefinidos del menú desplegable.
2. **Establecer dimensiones personalizadas**: Ingresa valores específicos de ancho y alto.
3. **Probar orientaciones**: Cambia entre modos vertical y horizontal.
4. **Simular condiciones de red**: Prueba cómo se comporta tu sitio con diferentes velocidades de conexión.

En la siguiente sección, exploraremos funciones más avanzadas del Inspector de Elementos.