const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gerenciamento de Pedidos',
      version: '1.0.0',
      description: 'API para gerenciar pedidos e itens conforme solicitado no desafio.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desenvolvimento local',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Path to the API routes files
};

const specs = swaggerJsdoc(options);

module.exports = specs;
