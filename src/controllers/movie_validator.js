import Movie from '../models/Movie.js';

//validar title, description e trailer
const movie_validator = async (req, res, next) => {
    const { title, description, trailer } = req.body;

    if (!title || !description || !trailer) {
        return res.status(400).json({ error: 'Dados obrigatórios faltando.' });
    }

    const title_exist = await Movie.findOne({ title });
    const description_exist = await Movie.findOne({ description });
    const trailer_exist = await Movie.findOne({ trailer});

    if (title_exist || description_exist || trailer_exist) {
        return res.status(400).json({ error: 'Filme já cadastrado.' });
    }

    next();
};

export default movie_validator;