/*1- Crie uma classe para rpresentar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;


    construtor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

//atribuindo as características

const monza = new Carro('Chevrolet', 'vinho', 1/12);
console.log(monza.calcularGastoDePercurso(70, 5));
const onix = new Carro ('Chevrolet', 'Laranja', 1/13);
console.log(onix.calcularGastoDePercurso(70, 5));
