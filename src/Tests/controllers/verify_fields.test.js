import verify_fields from "../../controllers/verify_fields";


describe("test para verificar se os campos estão preenchidos", () => {
    it("deve retornar erro se algum campo estiver vazio", () => {
        const req = {
            body: {
                title: "",
                description: "",
                trailer: "",
                genger: ""
            }
        };

        const res = {
            status: jest.fn(() => res),
            json: jest.fn(() => res)
        };

        const next = jest.fn();

        verify_fields(req, res, next);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: "Dados obrigatórios faltando." });
    });
});