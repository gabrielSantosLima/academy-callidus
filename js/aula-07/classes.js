class Pessoa{
    constructor(nome, idade, sexo, dataDeNascimento){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
        this.dataDeNascimento = dataDeNascimento
    }

    getFormattedDate(){
        return this.dataDeNascimento.toLocaleDateString('pt-BR')
    }

    toString(){
        return `${this.nome} com idade de ${this.idade} do sexo ${this.sexo}, nascido em ${this.getFormattedDate()} é legal!!!`
    }
}

const gabriel = new Pessoa("Gabriel Lima", 19, "Masculino", new Date("01-12-2003"))
console.log(gabriel.toString())
document.querySelector('h1').innerText = gabriel.toString()