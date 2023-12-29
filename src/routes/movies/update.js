import express from 'express';
import Movie from '../../models/Movie.js';
import '../../db/connection.js';


const app = express();


// Middleware para análise de JSON
app.use(express.json());


app.put('/update/:id', async (req, res) => {
    try {

        //verificar se o filme existe no banco de dados
        const movie_to_update = await Movie.findById(req.params.id);
        if (!movie_to_update) {
            return res.status(404).json({ error: 'Filme não encontrado' });
        }

        const { title, description, trailer, gender } = req.body;
        const updateMovie = await Movie.findByIdAndUpdate(req.params.id, { title, description, trailer, gender });
        res.json({ message: 'Filme atualizado com sucesso', updateMovie });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar filme' });
    }
});


export default app;