/*console.log("Aula xpto");

// declaração variaveis
let a = "api";
const b = "300";
const c = b * 2;
a = "Gilson";

console.log("Variável a: " + a);

console.log("Variável b: " + b);
console.log("Variável c: " + c);

function mensagem(texto){
    console.log(texto);
}

function somar(a,b){
    return a + b;
}

mensagem("teste funcao");

console.log(somar(10,20));

const produtos= [
    {
        nome: "Tv",
        valor: 300.99
    },
    {
        nome: "SmartTV",
        valor: 5000.88
    }
];

for(let i=0;i<produtos.length;i++){
    console.log(produtos[i].nome);
}

*/

const server = require('./server');
(async () => {
    await server.start();
    console.log("server started: " + server.info.uri);
})();