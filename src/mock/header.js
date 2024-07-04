///////////////
// MENU MOCK //
///////////////

const menuData = {
  items: [
    {
      label: 'Productos',
      ref: 'productsPanel',
      items: [
        {
          label: 'Construir',
          icon: '',
          items: [
            {
              icon: 'ai ai-edge-application',
              label: 'Edge Application',
              description: 'Construir aplicaciones web que se ejecutan en la Plataforma de Edge de Azion.',
              href: '/es/productos/edge-application/',
              overline: "Add-ons",
              items: [
                {
                  icon: '',
                  label: 'Application Accelerator',
                  description: '',
                  href: '/es/productos/application-accelerator/'
                },
                {
                  icon: '',
                  label: 'Edge Cache',
                  description: '',
                  href: '/es/productos/edge-cache/'
                },
                {
                  icon: '',
                  label: 'Tiered Cache',
                  description: '',
                  href: '/es/productos/tiered-cache/'
                },
                {
                  icon: '',
                  label: 'Edge Functions',
                  description: '',
                  href: '/es/productos/edge-functions/'
                },
                {
                  icon: '',
                  label: 'Image Processor',
                  description: '',
                  href: '/es/productos/image-processor/'
                }, {
                  icon: '',
                  label: 'Load Balancer',
                  description: '',
                  href: '/es/productos/load-balancer/'
                }
              ]
            }
          ]
        },
        {
          label: 'Store',
          icon: '',
          items: [
            {
              icon: 'ai ai-edge-storage',
              label: 'Edge Storage',
              description: 'Almacena y recupera objetos desde cualquier lugar con baja latencia.',
              href: '/es/productos/edge-storage/',
            },
            {
              icon: 'ai ai-edge-sql',
              label: 'Edge SQL',
              description: 'Base de datos SQL serverless que combina la agilidad de la tecnología serverless y el desempeño de edge.',
              href: '/es/productos/edge-sql/',
            },
            {
              icon: 'ai ai-edge-kv',
              label: 'Edge KV',
              description: 'Aprovecha tus datos con nuestra Key-Value Store serverless en el edge.',
              href: '/es/productos/edge-kv/',
            }
          ]
        },
        {
          label: 'Proteger',
          icon: '',
          items: [
            {
              icon: 'ai ai-edge-firewall',
              label: 'Edge Firewall',
              description: 'Protege a tus usuarios, aplicaciones y redes con un enfoque moderno.',
              href: '/es/productos/edge-firewall/',
              overline: "Add-ons",
              items: [
                {
                  icon: '',
                  label: 'DDoS Protection',
                  description: '',
                  href: '/es/productos/ddos-protection/'
                },
                {
                  icon: '',
                  label: 'Network Layer Protection',
                  description: '',
                  href: '/es/productos/network-layer-protection/'
                },
                {
                  icon: '',
                  label: 'Web Application Firewall',
                  description: '',
                  href: '/es/productos/web-application-firewall/'
                }
              ]
            },
            {
              icon: 'ai ai-edge-dns',
              label: 'Edge DNS',
              description: 'Mejora la disponibilidad y seguridad de tus aplicaciones.',
              href: '/es/productos/edge-dns/'
            }

          ]
        },
        {
          label: 'Desplegar',
          icon: '',
          items: [
            {
              icon: 'ai ai-edge-orchestrator',
              label: 'Edge Orchestrator',
              description: 'Implementa, controla, observa y automatiza cargas de trabajo de edge en cualquier lugar.',
              href: '/es/productos/edge-orchestrator/'
            }
          ]
        },
        {
          label: 'Observar',
          icon: '',
          items: [
            {
              icon: 'ai ai-data-stream',
              label: 'Data Stream',
              description: 'Datos en tiempo real para potenciar us plataformas de Big Data.',
              href: '/es/productos/data-stream/'
            },
            {
              icon: 'ai ai-edge-pulse',
              label: 'Edge Pulse',
              description: 'Mejora la experiencia de tus aplicaciones al generar insights detallados sobre los usuarios.',
              href: '/es/productos/edge-pulse/'
            },
            {
              icon: 'ai ai-real-time-metrics',
              label: 'Real-Time Metrics',
              description: 'Excelentes insights con una potente visualización en tiempo real sobre tus aplicaciones.',
              href: '/es/productos/real-time-metrics/'
            },
            {
              icon: 'ai ai-real-time-events',
              label: 'Real-Time Events',
              description: 'Explora en tiempo real los datos de tus aplicaciones con nuestro motor de búsquedas complejas.',
              href: '/es/productos/real-time-events/'
            }
          ]
        },
        {
          label: "Servicios Profesionales",
          href: "/es/servicios-profesionales/"
        }
      ],
      rightBlock: {
        label: 'Casos de Éxitos',
        type: 'cases',
        items: [
          {
            img: {
              src: '/assets/blog/images/uploads/vtex.png?ims=160x90',
              alt: 'El logo de VTEX, que consiste en el nombre de la empresa en una fuente estilizada.'
            },
            description: 'VTEX construye aplicaciones serverless de latencia ultrabaja con Azion y permite que miles...',
            link: {
              href: '/es/casos-de-exito/vtex/',
              label: 'Leer más'
            }
          },
          {
            img: {
              src: '/assets/blog/images/uploads/magalu.png?ims=160x90',
              alt: 'El logo de Magalu, que consiste en el nombre de la empresa en una fuente estilizada.'
            },
            description: 'Magalu garantiza una alta disponibilidad para cientos de aplicaciones de escala global...',
            link: {
              href: '/es/casos-de-exito/magalu/',
              label: 'Leer más'
            }
          }
        ]
      },
    },
    {
      label: 'Precios',
      href: '/es/precios/',
      items: []
    },
    {
      label: 'Soluciones',
      ref: 'solutionsPanel',
      items: [
        {
          label: 'Desarrollo de Aplicaciones',
          items: [
            {
              label: 'Sitios Jamstack',
              description: 'Mejora el desempeño, seguridad y escalabilidad de tus sitios y aplicaciones web',
              href: '/es/soluciones/sitios-jamstack/'
            },
            // {
            //   label: 'Aplicaciones Serverless',
            //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            //   href: '/es/soluciones/aplicaciones-serverless/'
            // },
            // {
            //   label: 'Modernización de Aplicaciones',
            //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            //   href: '/es/soluciones/modernizacion-de-aplicaciones/'
            // },
          ]
        },
        {
          label: 'Seguridad de Aplicaciones y Redes',
          items: [
            {
              label: 'Protección de aplicaciones web y API (WAAP)',
              description: 'Seguridad avanzada para tus aplicaciones y APIs.',
              href: '/es/soluciones/proteccion-de-aplicaciones-web-y-api-waap/'
            },
            {
              label: 'Modernización de Seguridad',
              description: 'Simplifica tu estructura de seguridad y protege tu negocio con una plataforma de edge integral',
              href: '/es/soluciones/modernizacion-de-seguridad/'
            },
            {
              label: 'Gestión de bots',
              description: 'Minimiza el fraude y tiempos de actividad con mejor observabilidad en aplicaciones web y API',
              href: '/es/soluciones/gestion-de-bots/'
            },
          ]
        },
        {
          label: 'Rendimiento y Confiabilidad del Servicio',
          items: [
            {
              label: 'Entrega de contenido (CDN)',
              description: 'Desde el edge, lleva tu experiencia de entrega más allá de las CDN tradicionales',
              href: '/es/soluciones/entrega-de-contenido-cdn/'
            },
            {
              label: 'Aceleración de aplicaciones',
              description: 'Acelera aplicaciones y API con el mejor desempeño en todo momento',
              href: '/es/soluciones/aceleracion-de-aplicaciones/'
            },
            // {
            //   label: 'Procesamiento y optimización de imágenes',
            //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            //   href: '/es/soluciones/procesamiento-optimizacion-de-imagenes/'
            // },
            {
              label: 'Live Streaming',
              description: 'Máximo desempeño y seguridad para tu live streaming bajo demanda',
              href: '/es/soluciones/live-streaming/'
            },
          ]
        },
      ],
      rightBlock: {
        label: 'Casos de Éxito',
        type: 'cases',
        items: [
          {
            img: {
              src: '/assets/blog/images/uploads/vtex.png?ims=160x90',
              alt: 'Logo de VTEX'
            },
            description: 'VTEX construye aplicaciones serverless de ultra baja latencia con Azion y permite miles...',
            link: {
              href: '/es/casos-de-exito/vtex/',
              label: 'Leer más'
            }
          },
          {
            img: {
              src: '/assets/blog/images/uploads/magalu.png?ims=160x90',
              alt: 'Logo de Magalu'
            },
            description: 'Magalu garantiza alta disponibilidad para cientos de aplicaciones a escala global...',
            link: {
              href: '/es/casos-de-exito/magalu/',
              label: 'Leer más'
            }
          }
        ]
      }
    },
    {
      label: 'Recursos',
      ref: 'resourcesPanel',
      items: [
        {
          label: 'Documentación',
          items: [
            {
              icon: 'pi pi-play',
              label: 'Punto de Partida',
              description: 'Esta página de documentación te ayudará a comenzar tu camino con Azion.',
              href: '/en/documentation/products/getting-started/'
            },
            {
              icon: 'pi pi-map',
              label: 'Guías',
              description: 'Descubre nuestras guías que te ayudarán en la plataforma de edge de Azion.',
              href: '/en/documentation/products/guides/'
            },
            {
              icon: 'pi pi-wrench',
              label: 'Dev Tools',
              description: 'Descubre nuestras herramientas para desarrolladores.',
              href: '/en/documentation/products/dev-tools/'
            },
            {
              icon: 'pi pi-code',
              label: 'API',
              description: 'Documentación que te guiará en los primeros pasos para usar la API de Azion.',
              href: 'https://api.azion.com/'
            },
            {
              icon: 'pi pi-list',
              label: 'Release Notes',
              description: 'Descubre nuestras últimas notas de versión.',
              href: '/en/documentation/products/release-notes/'
            },
            {
              icon: 'pi pi-briefcase',
              label: 'Acuerdos',
              description: 'Nuestros términos de servicio, acuerdo con el cliente, política de privacidad y más.',
              href: '/en/documentation/agreements/'
            },
          ]
        },
        {
          label: 'Blog',
          href: '/es/blog/'
        },
        {
          label: 'Resource Hub',
          href: '/es/resource-hub/'
        },
        {
          label: 'Marketplace',
          href: '/es/marketplace/',
        },
        {
          label: 'Compliance',
          href: '/es/compliance/'
        },
        {
          label: 'Our Network',
          href: '/es/productos/edge-network/'
        },
        {
          label: 'Comunidad',
          href: 'https://discord.com/invite/Yp9N7RMVZy',
          external: true,
          icon: "pi pi-external-link"
        },
      ],
      rightBlock: {
        label: 'Contenido destacado',
        type: 'featured',
        items: [
          {
            img: {
              src: '/assets/blog/images/uploads/thumbnailblog-4templatesimproveexperience-440x343px-1.png',
              alt: 'Aprovecha el poder de edge computing con el nuevo conjunto de templates de Azion'
            },
            title: 'Aprovecha el poder de edge computing con el nuevo conjunto de templates de Azion',
            description: 'Explora las herramientas intuitivas para desarrolladores de Azion. Simplif...',
            link: {
              href: '/es/blog/nuevo-conjunto-templates-azion-dev/',
              label: 'Leer más'
            }
          }
        ]
      }
    }
  ]
};

const menuSecondary = [
  {
    text: "Contacto",
    title: "Contactar Ventas",
    link: "/es/contacto-ventas/",
    destak: false,
  },
  {
    text: "Iniciar sesión",
    title: "Azion Console Login",
    link: "https://console.azion.com/login",
    destak: false,
  },
  {
    text: "Cuenta Gratis",
    title: "Azion Cuenta Gratis",
    link: "https://console.azion.com/signup/",
    destak: true,
  }
];

const menuSecondaryMobile = [
  {
    // label: 'Documents',
    items: [
      {
        label: 'Trabaja en Azion',
        // icon: 'pi pi-briefcase',
        tags: ['ver vacantes!'],
        url: '/es/trabaja-en-azion'
      },
      {
        label: 'Casos de Exito',
        // icon: 'pi pi-dollar'
        url: '/es/casos-de-exito/'
      },
      {
        label: 'Soporte',
        // icon: 'pi pi-question-circle'
        url: '/es/soporte/'
      },
      {
        label: 'Política de Privacidad',
        // icon: 'pi pi-exclamation-triangle'
        url: '/en/documentation/agreements/privacy-policy'
      }
    ]
  }
];

const bottomButtonsMobile = [
  {
    label: 'Cuenta gratuita',
    urlTitle: 'Azion Console Cuenta gratuita',
    url: 'https://console.azion.com/singup',
    destak: true
  },
  {
    label: 'Iniciar sesión',
    urlTitle: 'Azion Real Time Manager Sign In',
    url: 'https://console.azion.com/login'
  },
  {
    label: 'Contacto',
    url: '/es/contacto-ventas/',
    urlTitle: 'Contacto',
    icon: 'pi pi-chevron-right text-xs'
  }
];

const algoliaIndex = [
  {
    name: `azion-site-es`,
    label: 'site',
    activeIndex: 1
  },
  {
    name: `azion-doc-es`,
    label: 'docs',
    activeIndex: 2
  },
  {
    name: `azion-blog-es`,
    label: 'blog',
    activeIndex: 3
  },
  {
    name: `azion-cases-es`,
    label: 'cases',
    activeIndex: 4
  }
];

const algoliaModel = [
  { label: 'All' },
  { label: 'Site' },
  { label: 'Docs' },
  { label: 'Blog' },
  { label: 'Cases' }
];

const algoliaInputPlaceholder = "Escribe tu búsqueda"

export default {
  menuData,
  menuSecondary,
  menuSecondaryMobile,
  bottomButtonsMobile,
  algoliaIndex,
  algoliaModel,
  algoliaInputPlaceholder
}
