import Movie from '../models/Movie.js';

//validar title, description e trailer
const movie_validator = async (req, res, next) => {
    const { title, description, trailer, genger } = req.body;

    if (!title || !description || !trailer || !genger) {
        return res.status(400).json({ error: 'Dados obrigatórios faltando.' });
    }

    const title_exist = await Movie.findOne({ title });
    const description_exist = await Movie.findOne({ description });
    const trailer_exist = await Movie.findOne({ trailer});
    const genger_exist = await Movie.findOne({ genger});

    if (title_exist || description_exist || trailer_exist || genger_exist) {
        return res.status(400).json({ error: 'Filme já cadastrado.' });
    }

    next();
};

export default movie_validator;