import express from 'express';
import Movie from '../../models/Movie.js';
import '../../db/connection.js';


const app = express();


// Middleware para análise de JSON
app.use(express.json());


app.delete('/', async (req, res) => {
    try {
        const deleteMovie = await Movie.findByIdAndDelete(req.params.id);
        res.json(deleteMovie);
        res.json({ message: 'Filme deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar filme' });
    }
});

export default app;