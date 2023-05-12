const alunosInMemory = [];

const find = async (request, h) => {
    return alunos = [
        {
            nome: "João",
            curso: "ADS"
        },
        {
            nome: "Maria",
            curso: "Gestão Empresarial"
        },
        {
            nome: "MC Gilsim",
            curso: "ADS"
        }
    ];
}

const create = async (request, h) => {

    alunosInMemory.push(request.payload);

    return h.response("created").code(201);
}

module.exports = {find, create};