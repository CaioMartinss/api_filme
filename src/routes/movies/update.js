import express from 'express';
import Movie from '../../models/Movie.js';
import '../../db/connection.js';


const app = express();


// Middleware para análise de JSON
app.use(express.json());


app.put('/', async (req, res) => {
    try {
        const { title, description, trailer, genger } = req.body;
        const updateMovie = await Movie.findByIdAndUpdate(req.params.id, { title, description, trailer, genger});
        res.json(updateMovie);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar filme' });
    }
});


export default app;