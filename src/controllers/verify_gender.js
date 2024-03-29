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
        "suspense", "terror", "crime",


    ];

//função para verificar se o genero que o usuário colocou é um genero que existe no array
function verifica_genero(genero) {
    if(genero){
        return generos.includes(genero.toLowerCase());
    }
}


const validate_gender = (req, res, next) => {
    const { gender } = req.body;
    if (!verifica_genero(gender)) {
        return res.status(400).json({ error: 'Gênero não existe.' });
    }
    next();
};

export default validate_gender;
