
import verifica_genero from '../../controllers/verify_gender.js';

describe('verifica_genero function', () => {
    it('should return true for existing gender', () => {
        const req = { body: { gender: 'ação' } };
        const res = {};
        const next = jest.fn();
        verifica_genero(req, res, next);
        expect(next).toHaveBeenCalled();
    });
});