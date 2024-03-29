import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';


import movie_router_insert from './src/routes/movies/insert.js';
import movie_router_list from './src/routes/movies/list.js';
import movie_router_delete from './src/routes/movies/delete.js';
import movie_router_update from './src/routes/movies/update.js';
import movie_router_list_gender from './src/routes/movies/list_gender.js';

import swaggerDocument from './swagger.json' assert {
    type: 'json',
    integrity: 'sha384-ABC123'
};

// Conectar ao MongoDB
import './src/db/connection.js';



const app = express();
const port = process.env.PORT || 3000;

// Middleware para análise de JSON
app.use(express.json());

// Middleware para habilitar o CORS
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/', movie_router_insert);
app.use('/', movie_router_list);
app.use('/', movie_router_delete);
app.use('/', movie_router_update);
app.use('/', movie_router_list_gender);


// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

