const { Cajero } = require("./clases/cajero.js")

const cajero1 = new Cajero (2_500);

// cajero1.saldo = 3_000

// console.log(cajero1.saldo);
// console.log(cajero1);

console.log("Saldo Inicial: ");
console.log(cajero1.consultarSaldo());

console.log("Depósito de 250");
cajero1.depositarDinero(250);

// console.log("Consulta de saldo posterior al depósito");
// console.log(cajero1.consultarSaldo());

console.log("Retiro de 550");
cajero1.retirarDinero(550)

// console.log("Consulta de saldo posterior al retiro");
// console.log(cajero1.consultarSaldo());

console.log(cajero1);

