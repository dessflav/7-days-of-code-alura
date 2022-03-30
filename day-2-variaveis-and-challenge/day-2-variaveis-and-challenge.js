const nameOfUser = prompt("Qual o seu nome?");
const age = prompt("Quantos anos você tem?");
const lp = prompt("Qual linguagem de programação você está estudando?");
const msg = `"Olá ${nameOfUser}, você tem ${age} anos e já está aprendendo ${lp}!"`;

alert(msg);

const question = prompt("Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.");

if(question == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso")
}else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}
