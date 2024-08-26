var extenso = require('extenso')
var prompt = require('prompt')

function numeroPorExtenso(numero) {
    let input = Number(numero, 10)
    
    // Checando input !== Number(numero, 10) pois em JS
    // Number(NaN) == Number(NaN) sempre vai ser falso,
    // e NaN é do tipo number, então não podemos checar
    // simplesmente por `input == NaN`
    if (input < 0 || input > 9999 || input !== Number(numero, 10)) {
        console.log("Número fora dos limites ou não é um número.")
    } else {
        console.log(extenso(input.toFixed(0)))
    }
}

// prompt no console
prompt.start()
prompt.get(["valor"], function (err, res) {
    numeroPorExtenso(res.valor)
})