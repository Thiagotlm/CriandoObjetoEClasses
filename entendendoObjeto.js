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