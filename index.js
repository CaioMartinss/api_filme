import express from 'express';
import swaggerUi from 'swagger-ui-express';


import movie_router_insert from './src/routes/movies/insert.js';
import movie_router_list from './src/routes/movies/list.js';
import movie_router_delete from './src/routes/movies/delete.js';
import movie_router_update from './src/routes/movies/update.js';
import movie_router_list_genger from './src/routes/movies/list_genger.js';

import  swaggerDocument  from './swagger.json' assert {
    type: 'json',
    integrity: 'sha384-ABC123'
};

// Conectar ao MongoDB
import './src/db/connection.js';





const app = express();
const port = process.env.PORT || 3000;

// Middleware para análise de JSON
app.use(express.json());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/insert', movie_router_insert);
app.use('/list', movie_router_list);
app.use('/delete/:id', movie_router_delete);
app.use('/update/:id', movie_router_update);
app.use('/genger', movie_router_list_genger);


// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

