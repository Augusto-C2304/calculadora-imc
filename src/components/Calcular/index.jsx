const CalculoIMC = (altura, peso) => {
    const alturaMetros = parseFloat(altura) / 100;
    const imc = parseFloat(peso) / (alturaMetros ** 2);

    let classificacao = '';
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc < 34.9) classificacao = "Obesidade Grau I";
    else if (imc < 39.9) classificacao = "Obesidade Grau II";
    else classificacao = "Obesidade Grau III";

    return {imc: imc.toFixed(2), classificacao };
};

export default CalculoIMC;