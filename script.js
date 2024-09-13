
const btnCalcular = document.getElementById('calcular')
let imc = 0;
let classificacao = ''
const imcValor = ''

function calcularImc() {
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultadoValor = document.getElementById('imcValor')
    const resultadoTexto = document.getElementById('imcTexto')

    if (altura !== '' && peso !== '') {
        imc = (peso / (altura^2)).toFixed(1)
        resultadoValor.textContent = imc.toString()
        classificaImc(imc, resultadoTexto) 
    }else {
        resultadoTexto.textContent = 'Preencha todos os campos!'
    }
}

function classificaImc(imc, resultadoTexto) {
    if (imc < 18.5){
        classificacao = 'Você está abaixo do peso.'
    }else if (imc < 25) {
        classificacao = 'Você está com peso ideal.'
    }else if (imc < 30){
        classificacao = 'Você está levemente acima do peso.'
    }else if (imc < 35){
        classificacao = 'Você está com obesidade grau I.'
    }else if (imc < 40){
        classificacao = 'Você está com obesidade grau II.'
    }else {
        classificacao = 'Você está com obesidade grau IIIrwerwefewfwefwe.'
    }

    resultadoTexto.textContent = classificacao
}

btnCalcular.addEventListener('click', calcularImc)
