// src/controllers/__tests__/movie_validator.test.js

import  verifica_genero  from '../../controllers/verify_fields'; // Importe a função a ser testada

describe('verifica_genero function', () => {
    test('Should return true for an existing genre', () => {
        const result = verifica_genero('ação');
        expect(result).toBe(true);
    });

    test('Should return false for a non-existing genre', () => {
        const result = verifica_genero('inexistente');
        expect(result).toBe(false);
    });
});
