//um objeto em JavaScript é uma coleção dinâmica de {} + valor
const thiago = {
    nome: 'Thiago Mauricio',
    idade: 38,
}
console.log(thiago.nome);
console.log(thiago.idade);
console.log(thiago);

//criando um método

const pessoa = {
    nome: 'thiago',
    idade: 38,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
pessoa.descrever(); //chamando o método
console.log(pessoa[nome]); //acessando o atributo "nome"

//criando um objeto de comparação entre pessoas

class Pessoa {
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p2.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const Thiago = new Pessoa('Thiago', 38);
const Rodrigo = new Pessoa('Rodrigo', 45);

compararPessoas(Thiago, Rodrigo);