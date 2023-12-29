
import express from 'express';
import Movie from '../../models/Movie.js';
import '../../db/connection.js';



const app = express();


// Middleware para análise de JSON
app.use(express.json());


app.get('/gender', async (req, res) => {
    try {
        const { genre } = req.query;
        if (!genre) {
            return res.status(400).json({ error: 'Parâmetro de consulta (genre) ausente.' });
        }
        const moviesByGenre = await Movie.find({ gender: genre });
        res.json(moviesByGenre);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar filmes.' });
    }
});

export default app;