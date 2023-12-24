// swagger.js

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Nome da Sua API',
            version: '1.0.0',
            description: 'Descrição da Sua API',
        },
    },
    apis: ['./routes/*.js'], // Substitua pelo caminho correto para seus arquivos de rota
};

export const swaggerDocument = swaggerJsdoc(options);
export default swaggerUi;
export { swaggerUi };
