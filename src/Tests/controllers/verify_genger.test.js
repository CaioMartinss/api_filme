
import verifica_genero from '../../controllers/verify_genger.js';

describe('verifica_genero function', () => {
    it('should return true for existing genger', () => {
        const req = { body: { genger: 'ação' } };
        const res = {};
        const next = jest.fn();
        verifica_genero(req, res, next);
        expect(next).toHaveBeenCalled();
    });
});