const controller = require('./controllers/aluno-controller')
const schema = require("./controllers/aluno-schema");

const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {return {message: "OK"}} 
    },
    {
        method: "GET",
        path: "/alunos",
        handler: controller.find
    },
    {
        method: "GET",
        path: "/alunos/{codigo}",
        handler: controller.findById
    },
    {
        method: "DELETE",
        path: "/alunos/{codigo}",
        handler: controller.remove
    },
    {
        method: "PUT",
        path: "/alunos/{codigo}",
        options: {
            handler: controller.update,
            validate: schema.update
        }
    },
    {
        method: "POST",
        path: "/alunos",
        options: {
            handler: controller.create,
            validate: schema.postAluno
        }
    }
];

module.exports = routes;