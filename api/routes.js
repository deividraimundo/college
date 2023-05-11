const routes = [
    {
        method: "GET",
        path: "/alunos",
        handler: (request, h) => {
            const alunos = [
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
            ]
            return alunos;
        }
    }
];

module.exports = routes;

/*for(let i=0;i<vetor.lenght;i++){
    console.log(vetor[i]);
}*/