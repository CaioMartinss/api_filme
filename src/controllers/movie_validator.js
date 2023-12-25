import Movie from '../models/Movie.js';

//validar title, description e trailer
const movie_validator = async (req, res, next) => {
    const { title, description, trailer } = req.body;

    if (!title || !description || !trailer) {
        return res.status(400).json({ error: 'Dados obrigatórios faltando.' });
    }

    const movieExists = await Movie.findOne({ title, description, trailer  });

    if (movieExists) {
        return res.status(400).json({ error: 'Filme já cadastrado.' });
    }

    next();
};

export default movie_validator;