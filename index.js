import express from 'express';
import Movie from './models/Movie.js';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.js';


// Conectar ao MongoDB
import './db/connection.js';


const app = express();
const port = process.env.PORT || 3000;

// Middleware para análise de JSON
app.use(express.json());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Rota para obter todos os usuários
app.get('/Movies', async (req, res) => {
    try {
        const Movies = await Movie.find();
        res.json(Movies);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }
});


//atualizar dados
app.put('/update/:id', async (req, res) => {
    try {
        const { title, description, trailer } = req.body;
        const updateMovie = await Movie.findByIdAndUpdate(req.params.id, { title, description, trailer});
        res.json(updateMovie);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar filme' });
    }
});


//deletar dados
app.delete('/delete/:id', async (req, res) => {
    try {
        const deleteMovie = await Movie.findByIdAndDelete(req.params.id);
        res.json(deleteMovie);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar filme' });
    }
});


// Rota para adicionar um novo usuário
app.post('/insert', async (req, res) => {
    try {
        const { title, description, trailer } = req.body;
        const newMovie = await Movie.create({ title, description, trailer });
        res.json(newMovie);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao inserir filme' });
    }
});



// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

