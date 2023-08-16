//criando uma classe (como um objeto deve ser)

class pessoa {
    nome;
    idade;
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }
}

//criando uma instância (é uma ocorrência do objeto)

const Thiago = new pessoa();
Thiago.nome = 'Thiago Mauricio';
Thiago.idade = 38;

const Rodrigo = new pessoa();
Rodrigo.nome = 'Rodrigo Mauricio';
Rodrigo.idade = 45;

console.log(Thiago);
console.log(Rodrigo);