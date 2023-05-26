const alunosInMemory = [];

const find = async (request, h) => {
    return alunosInMemory;
}

const findById = async (request, h) => {
    const codigoProcurado = request.params.codigo;
    const alunoEncontrado = alunosInMemory.find(a => a.codigo == codigoProcurado);

    if(alunoEncontrado){
        return h.response(alunoEncontrado).code(200);
    }

    return h.response({error: "Aluno não encontrado"}).code(404);
}

const remove = async (request, h) => {
    const codigoRemover = request.params.codigo;

    const index = alunosInMemory.findIndex(a => a.codigo == codigoRemover);

    alunosInMemory.splice(index, 1)
    return h.response().code(202);
}

const update = async (request, h) => {
    const codigoAlteracao = request.params.codigo;

    const index = alunosInMemory.findIndex(a => a.codigo == codigoAlteracao);

    alunosInMemory[index] = request.payload;
    alunosInMemory[index].codigo = codigoAlteracao;

    return h.response().code(201);
}

const create = async (request, h) => {

    const exists = alunosInMemory.find(a => a.codigo === request.payload.codigo);

    if(exists){
        return h.response({error: "Aluno já existe"}).code(409);
    }

    alunosInMemory.push(request.payload);

    return h.response("created").code(201);
}

module.exports = {find, create, findById, remove, update};