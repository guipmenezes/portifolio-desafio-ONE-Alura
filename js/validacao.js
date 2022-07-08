export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ' '
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch'
]

const mensagemDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar em branco.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar em branco.',
        typeMismatch: 'O email digitado não é válido.'
    },
    assunto: {
        valueMissing: 'O campo de assunto não pode estar em branco.'
    },
    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar em branco.'
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ' '
    
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagemDeErro[tipoDeInput][erro]
        }
    })

    return mensagem
}