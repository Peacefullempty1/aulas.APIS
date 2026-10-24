import dados from "./dados/alunos.json" with { type: "json" };

console.log("\n=== dados ===\n")

for (let i = 0; i < 5; i++){

let nome = dados[i].nome
let turma = dados[i].turma
let idade = dados[i].idade
let info = dados[i].info

console.log("nome", nome);
console.log("turma", turma);
console.log("idade", idade);
console.log("info", info);
}