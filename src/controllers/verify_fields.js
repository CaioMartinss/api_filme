import Movie from '../models/Movie.js';

const verify_fields = (req, res, next) => {
    const { title, description, trailer, genger } = req.body;

    if (!title || !description || !trailer || !genger) {
        return res.status(400).json({ error: "Dados obrigatórios faltando." });
    }

    next();
}

export default verify_fields;

