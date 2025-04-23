// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Inspector',
      collapsible: true,
      collapsed: false,
      items: [
        'inspector/intro',
        'inspector/basico',
        'inspector/avanzado',
        'inspector/ejemplos',
      ],
    },
    {
      type: 'category',
      label: 'Herramientas',
      collapsible: true,
      collapsed: false,
      items: [
        'herramientas/console',
        'herramientas/network',
        'herramientas/performance',
      ],
    },
  ],
};

module.exports = sidebars;
