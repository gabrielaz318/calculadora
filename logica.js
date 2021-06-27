const num7 = document.querySelectorAll('.item')

num7.forEach(item => {
    item.addEventListener('click', e => digito(e))
})

let primeiroDigito = 0
let operacao = ''
let segundoDigito = 0

function digito(digito) {

    switch(digito.target.outerText) {
        case '+':
            operacao = digito.target.outerText
        break

        case '-':
            operacao = digito.target.outerText
        break

        case '*':
            operacao = digito.target.outerText
        break

        case '/':
            operacao = digito.target.outerText
        break

        case '=':
            realizarConta()
        break

        case 'C':
            limparTudo()
        break
    }
    let d = digito.target.outerText

    if(d === '+' || d === '-' || d === '*' || d === '/' || d === '=' || d === 'C') {

    } else {
        addDigitos(d)
    }
}

function addDigitos(digito) {
    
    if(operacao === '') {
        if(primeiroDigito === 0) {
            primeiroDigito = digito
        } else {
            primeiroDigito += digito
        }
    } else {
        if(segundoDigito === 0) {
            segundoDigito = digito
        } else {
            segundoDigito += digito
        }
    }



    atualizaDisplay()
}
function atualizaDisplay() {

    if(operacao === '') {
        document.querySelector('#display').innerHTML = `${primeiroDigito}`
    } else {
        document.querySelector('#display').innerHTML = `${segundoDigito}`
    }

}

function limparTudo() {
    primeiroDigito = 0
    segundoDigito = 0
    operacao = ''
    atualizaDisplay()
}

function realizarConta() {
    if(operacao === '+'){
        let resultado = parseInt(primeiroDigito) + parseInt(segundoDigito)
        segundoDigito = 0
        operacao = ''
        primeiroDigito = resultado
        document.querySelector('#display').innerHTML = `${resultado}`
    } else if(operacao === '-') {
        let resultado = parseInt(primeiroDigito) - parseInt(segundoDigito)
        segundoDigito = 0
        operacao = ''
        primeiroDigito = resultado
        document.querySelector('#display').innerHTML = `${resultado}`
    } else if(operacao === '*') {
        let resultado = parseInt(primeiroDigito) * parseInt(segundoDigito)
        segundoDigito = 0
        operacao = ''
        primeiroDigito = resultado
        document.querySelector('#display').innerHTML = `${resultado}`
    } else if(operacao === '/') {
        let resultado = parseInt(primeiroDigito) / parseInt(segundoDigito)
        segundoDigito = 0
        operacao = ''
        primeiroDigito = resultado
        document.querySelector('#display').innerHTML = `${resultado}`
    }
}