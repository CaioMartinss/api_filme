
import express from 'express';
import Movie from './src/models/Movie.js';
import movie_validator from './src/controllers/movie_validator.js';

import swaggerUi from 'swagger-ui-express';


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
        res.json({ message: 'Filme deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar filme' });
    }
});


// Rota para adicionar um novo usuário
app.post('/insert', async (req, res) => {
    try {
        movie_validator(req, res, async () => {
            const { title, description, trailer } = req.body;
            const newMovie = await Movie.create({ title, description, trailer });
            res.json(newMovie);
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao inserir filme' });
    }
});



// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

