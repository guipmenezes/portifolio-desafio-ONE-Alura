export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove()
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
        valueMissing: 'O campo de senha não pode estar em branco.',
        typeMissmatch: 'O email digitado não é válido.'
    },
    assunto: {
        valueMissing: 'O campo de assunto não pode estar em branco.'
    },
    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar em branco.'
    }
}