let readlineSync = require('readline-sync')

let produto = readlineSync.question('Qual produto deseja?\n');

let endereco = readlineSync.question('Qual o seu endereço?\n');

function calcFrete(produto, endereco){
     if(produto === "camiseta awari"){
          return `Olá, boas vindas à nossa loja. Já recebemos as informações e iremos mandar o
          produto Camiseta da Awari para Fortaleza - CE`;
     }else{
          return `Olá, boas vindas à nossa loja. Já recebemos as informações e iremos manda o
          produto ${produto} para o endereço ${endereco}`;
     }
}

console.log(calcFrete(produto,endereco));
