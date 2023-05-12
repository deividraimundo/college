const controller = require('./controllers/aluno-controller')

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
        method: "POST",
        path: "/alunos",
        handler: controller.create
    }
];

module.exports = routes;