function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Keli',
	idade: 37,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 29,
};

const pessoa3 = {
	nome: 'James',
	idade: 36,
};

const animal = {
	nome: 'Bob',
	idade: 10,
};

console.log(calculaIdade.apply(animal, [24]));