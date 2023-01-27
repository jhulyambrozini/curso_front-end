

const form = document.querySelector('form')
const campoA = document.querySelector('.camp-a')
const campoB = document.querySelector('.camp-b')
const result = document.querySelector('.result')
/*
pega o valor de a
pegar o valor de b
verificar se b é maior que a
se sim exibir sucesso
se nao exibir erro
*/

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('evento prevenido')
    result.innerHTML = ''; // zerando o html

// aplicando logica
    if (campoB.value > campoA.value) {
        msgSucess()
        return
    }
    if (campoB.value < campoA.value) {
        msgBad()
        return
    }
    if (campoB.value = campoA.value) {
        msgEqual()
        return
    }
    
})

// função da mensagem de sucesso
function msgSucess() {
    const msgSucess = `<p>O número ${campoB.value} é maior que o número ${campoA.value}.</p>`
    result.classList.remove('equal')
    result.classList.remove('bad')
    result.classList.add('sucess')
    result.innerHTML = msgSucess

    return result
}

// função da mensagem de erro
function msgBad() {
    const msgBad = `<p>O número ${campoB.value} não é maior que o número ${campoA.value}.</p>`
    result.classList.remove('equal')
    result.classList.remove('sucess')
    result.classList.add('bad')
    result.innerHTML = msgBad

    return result
}

// função da mensagem de igual
function msgEqual() {
    const msgEqual = `<p>O número ${campoB.value} é igual ao número ${campoA.value}.</p>`
    result.classList.remove('sucess')
    result.classList.remove('bad')
    result.classList.add('equal')
    result.innerHTML = msgEqual

    return result
}