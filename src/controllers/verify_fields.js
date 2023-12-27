import Movie from '../models/Movie.js';

//array de generos de filmes, o usuário irá somente conseguir colocar um genero de filme que tenha no array
const generos =
    [
        "ação", "aventura",
        "comédia", "drama", "terror", "suspense",
        "romance", "musical", "documentário",
        "infantil", "animação", "western",
        "guerra", "policial", "fantasia",
        "épico", "erótico", "espionagem",
        "super-heróis", "trash", "thriller",
        "cult", "música", "dança",
        "ficção científica", "biografia", "esporte",
        "faroeste", "histórico", "religioso",
        "guerra", "médico", "político",
        "suspense", "terror",


    ];

//função para verificar se o genero que o usuário colocou é um genero que existe no array
function verifica_genero(genero) {
    return generos.includes(genero);
}


const validate_fields = (req, res, next) => {
    const { title, description, trailer, genger } = req.body;

    if (!verifica_genero(genger)) {
        return res.status(400).json({ error: 'Gênero não existe.' });
    }

    if (!title || !description || !trailer || !genger) {
        return res.status(400).json({ error: "Dados obrigatórios faltando." });
    }

    next();
};

export default validate_fields;
