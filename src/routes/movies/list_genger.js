
import express from 'express';
import Movie from '../../models/Movie.js';
import '../../db/connection.js';



const app = express();


// Middleware para análise de JSON
app.use(express.json());


app.get('/genger', async (req, res) => {
    try {
        const Movies = await Movie.find();
        res.json(Movies);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar filmes.' });
    }
});


export default app;