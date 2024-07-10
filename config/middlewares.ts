export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  // {
  //   name: 'strapi::security',
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         'connect-src': ["'self'", 'https:'],
  //         'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'yourDomain.com'],
  //         'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'yourDomain.com'],
  //         upgradeInsecureRequests: null,
  //       },
  //     },
  //   },
  // },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: '*', // Permitir todos los orígenes
      headers: '*', // Permitir todos los encabezados
      methods: '*', // Permitir todos los métodos
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
