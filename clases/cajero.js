class Cajero {
    constructor(saldo_inicial) {
        this._saldo = saldo_inicial // GUIÓN BAJO PARA OCUPAR GETTERS Y SETTERS Y DIFERENCIAS CON OTROS ATRIBUTOS
    }
    get saldo() { // ACCESADOR
        return Number(parseFloat(this._saldo)).toFixed(2)
    }

    set saldo(nuevo_saldo) { // MUTADOR
        this._saldo = nuevo_saldo
    }

    consultarSaldo() {
        return `El saldo actual es: ${this.saldo}`
    }

    depositarDinero(deposito) {
        this._saldo += deposito;
        console.log(this.consultarSaldo());
    }

    retirarDinero(retiro) {
        this._saldo -= retiro;
        console.log(this.consultarSaldo());
    }


}

module.exports = { Cajero }