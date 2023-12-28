import verify_exist_movie from '../../controllers/verify_exist_movie.js';

import Movie from '../../models/Movie.js'; // Certifique-se de ajustar o caminho conforme necessário

describe('verify_exist_movie function', () => {
    beforeEach(async () => {
        // Limpar o banco de dados antes de cada teste
        await Movie.deleteMany({});
    });

    it('should pass for non-existing movie', async () => {
        const req = {
            body: {
                title: 'New Movie',
                description: 'Description of the new movie',
                trailer: 'https://www.youtube.com/new-movie',
            },
        };

        const res = {
            status: jest.fn(),
            json: jest.fn(),
        };

        const next = jest.fn();

        await verify_exist_movie(req, res, next);

        expect(next).toHaveBeenCalled();
    });

    it('should return an error for existing movie', async () => {
        // Inserir um filme fictício para simular a existência
        await Movie.create({
            title: 'Existing Movie',
            description: 'Description of the existing movie',
            trailer: 'https://www.youtube.com/existing-movie',
        });

        const req = {
            body: {
                title: 'Existing Movie', // Título duplicado
                description: 'Description of the existing movie',
                trailer: 'https://www.youtube.com/existing-movie',
            },
        };

        const res = {
            status: jest.fn(),
            json: jest.fn(),
        };

        const next = jest.fn();

        await verify_exist_movie(req, res, next);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'Filme já cadastrado.' });
        expect(next).not.toHaveBeenCalled();
    });
});
