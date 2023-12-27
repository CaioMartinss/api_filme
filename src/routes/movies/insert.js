import verify_exist_movie from '../../controllers/verify_exist_movie.js';
import verify_fields from '../../controllers/verify_fields.js';


import express from 'express';
import Movie from '../../models/Movie.js';
import '../../db/connection.js';


const app = express();

// Middleware para análise de JSON
app.use(express.json());

app.post('/', verify_exist_movie, verify_fields, async (req, res) => {
    try {
        // Agora você pode criar o filme com segurança
        const movie = await Movie.create(req.body);
        res.status(201).json({ movie });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao inserir filme' });
    }
});

export default app;

