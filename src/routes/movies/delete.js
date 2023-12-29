import express from 'express';
import Movie from '../../models/Movie.js';
import '../../db/connection.js';


const app = express();


// Middleware para análise de JSON
app.use(express.json());


app.delete('/delete/:id', async (req, res) => {
    try {
        // Verifique se o filme existe antes de tentar excluí-lo
        const movieToDelete = await Movie.findById(req.params.id);
        if (!movieToDelete) {
            return res.status(404).json({ error: 'Filme não encontrado' });
        }

        const deleteMovie = await Movie.findByIdAndDelete(req.params.id);
        res.json(deleteMovie);
        res.json({ message: 'Filme deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar filme' });
    }
});


export default app;