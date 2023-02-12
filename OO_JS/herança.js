function DispositivoEletronico(nome, cor, modelo) {
    this.nome = nome
    this.cor = cor
    this.modelo = modelo
}

function Smartphone(nome, cor, modelo, memoria){
    this.memoria = memoria
    DispositivoEletronico.call(this, nome, cor, modelo)
}

function Computador(nome, cor, modelo, sistema) {
    this.sistema = sistema
    DispositivoEletronico.call(this, nome, cor, modelo)
}

const s1 = new Smartphone('Samsung', 'azul', 'galaxy s23', '256 GB')
console.log(s1)
const s2 = new Smartphone('IPhone', 'roxo profundo', '14 Pro Max', '128 GB' )
console.log(s2)
const c1 = new Computador('Lenovo', 'prata', 'IdealPad', 'Linux')
console.log(c1)
