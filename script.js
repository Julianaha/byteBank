class Cliente {
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome =nome;
        this._cpf = cpf;
    }
}

class ContaCorrente{
    static numeroDeContas = 0; 
    agencia;
    _cliente; //propriedade privada

    set cliente (novoValor){
        if( novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    _saldo = 0; 

    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;

    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor;
        }
        
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

//criando cliente e conta corrente;
const cliente1 = new Cliente('Alfredo', 22233311109);
const conta1 = new ContaCorrente(cliente1, 1001);

const cliente2 = new Cliente("Cecilia", 33344455509);
const conta2 = new ContaCorrente(cliente2, 1002);

console.log(conta1);
console.log(conta2);

//depositando na conta;
conta1.depositar(500);
//transferindo dinheiro p outra conta;
conta1.transferir(200, conta2);

console.log(conta1);
console.log(conta2);

//contando o numero de conta;
console.log(ContaCorrente.numeroDeContas)

