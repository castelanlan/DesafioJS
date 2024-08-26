function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);

    var classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Acima do peso";
    } else {
        classificacao = "Obeso";
    }

    return `O IMC é ${imc.toFixed(2)} - ${classificacao}`;
}

console.log(calcularIMC(70, 1.75));
console.log(calcularIMC(50, 1.60));
console.log(calcularIMC(85, 1.70));
console.log(calcularIMC(95, 1.65));