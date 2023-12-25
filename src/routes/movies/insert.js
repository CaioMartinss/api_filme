import movie_validator from '../../controllers/movie_validator.js';

import express from 'express';
import Movie from '../../models/Movie.js';
import '../../db/connection.js';



const app = express();



// Middleware para análise de JSON
app.use(express.json());

app.post('/', async (req, res) => {
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


export default app;

