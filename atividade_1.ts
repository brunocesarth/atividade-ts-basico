const nome: string = "Maria";
const idade: number = 30;
const altura: number = 1.75;
const estudante: boolean = true;

const verificaParImpar = function (num: number) {
    if (num % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
};

const somatorio = function (num: number) {
    let soma = 0;
    for (let i = 1; i <= num; i++) {
        soma += i;
    }
    return soma;
};

const fibonacci = function (num: number) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    let a = 0;
    let b = 1;
    let c;
    for (let i = 2; i <= num; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
};


class Retangulo {
    constructor(private largura: number, private altura: number) { }

    area(): number {
        return this.largura * this.altura;
    }

    perimetro(): number {
        return 2 * (this.largura + this.altura);
    }
};

export { nome, idade, altura, estudante, verificaParImpar, somatorio, fibonacci, Retangulo };