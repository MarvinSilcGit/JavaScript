function resto_divisao(valor1, valor2)
{

    let resto = 0;

    if (valor1 === 0 || valor2 === 0)
    {

        return "Divisão por zero inválida";

    }

    else
    {

        if (valor1 === valor2)
        {

            resto = 0;

        }

        else if (valor1 > valor2)
        {

            while (valor2 + resto <= valor1)
            {

                resto += valor2;

            }

            resto = valor1 - resto;

        }

        else
        {

            while (valor1 + resto < valor2)
            {

                resto +=valor1;

            }

            while (resto !== valor2)
            {

                resto += 1;

            }

        }

        return `O resto da divisão entre ${valor1} e ${valor2} é: ${resto}`;
    }

}


function resto_inteiro_divisao (valor1, valor2)
{

    let resto_inteiro = 0;

    let resto = 0;

    if (valor1 === 0 || valor2 === 0)
    {

        return 'Divisão por zero é inválida';

    }

    else
    {

        if (valor1 === valor2)
        {

            resto_inteiro = 1

        }

        else if (valor1 > valor2)
        {

            while (valor2 + resto <= valor1)
            {

                resto_inteiro += 1;

                resto += valor2

            }

        }

        else
        {

            while (valor1 + resto < valor2)
            {

                resto += valor1;

            }

            while (resto !== valor2)
            {

                resto += 1;

            }

        }

        return `O resto inteiro da divisão entre ${valor1} e ${valor2} é: ${resto_inteiro}`;

    }

}


function raiz_quadrada(numero)
{

    let base = 2;

    let resultado_raiz_quadrada = (base + numero / base) / 2;

    resultado_raiz_quadrada = resultado_raiz_quadrada ** 2;

    while (resultado_raiz_quadrada * resultado_raiz_quadrada -  numero > 0.001)
    {

        base = resultado_raiz_quadrada;

        resultado_raiz_quadrada = (base + numero / base) / 2;

    }

    return `A raiz quadrada de ${numero} é ${resultado_raiz_quadrada}`;

}


function numero_primo(numero)
{

    let confirmacao = 2;

    if (numero === 0 || numero === 1)
    {

        return 'Esse número é inválido';

    }

    if (numero === 3 || numero === 2)
    {

        return `${numero} é um número primo`;

    }

    else
    {

        for (let contador = confirmacao; contador < numero + 1; contador++)
        {

            if (numero % contador !== 0)
            {

                confirmacao += 1;

            }

        }

        if (confirmacao === numero)
        {

            return `${numero} é um número primo, pois ele é divisível somente por ele e por 1`;

        }

        else
        {
            process.stdout.write(`O número ${numero} não é primo, pois ele é divisível por: `);

            for (let contador = 1; contador < numero + 1; contador++)
            {

                if (numero % contador === 0)
                {

                    if (numero - contador === 0)
                    {

                        process.stdout.write(`${contador} `);

                    }

                    else
                    {

                        process.stdout.write(`${contador}, `);

                    }

                }
            }

            return '';

        }

    }

}


function numero_par_impar(numero)
{

    if (numero % 2 === 0)
    {

        return `O número ${numero} é par`;

    }

    else
    {

        return `O número ${numero} é ímpar`;

    }

}


function valor_palindromo(valor)
{

    let contador2 = 0;

    if (valor.length <= 2)
    {

        return 'Tamanho insuficiente';

    }

    else
    {

        for (let contador1 = 0; valor.length; contador1++)
        {

            if (valor[contador1] === valor[-1 - contador1])
            {

                contador2 += 1

            }

        }

        if (contador2 === valor.length)
        {

            return `${valor} é palíndromo`;

        }

        else
        {

            return `${valor} não é palíndromo`;

        }

    }

}


function atm_machine(valor)
{

    let valor_pagamento = valor;

    if (valor_pagamento < 1)
    {

        return 'Valor insuficiente para saque';

    }

    else
    {
        let cedulas = 0;

        let limite_cedulas = 200;

        let resultado = [];

        let limite_moedas = 0.5;

        let moedas = 0;

        while (true)
        {

            if (limite_cedulas <= valor_pagamento)
            {

                valor_pagamento -= limite_cedulas;

                cedulas += 1;

            }

            else
            {

                resultado.push(`${cedulas} cédulas de R$ ${limite_cedulas}`);

                if (valor_pagamento === 0)
                {

                    return resultado;

                }

                else
                {

                    if (limite_cedulas === 200)
                    {

                        limite_cedulas = 100;

                    }

                    else if (limite_cedulas === 100)
                    {

                        limite_cedulas = 50;

                    }

                    else if (limite_cedulas === 50)
                    {

                        limite_cedulas = 20;

                    }

                    else if (limite_cedulas === 20)
                    {

                        limite_cedulas = 10;

                    }

                    else if(limite_cedulas === 10)
                    {

                        limite_cedulas = 5;

                    }

                    else if (limite_cedulas === 5)
                    {

                        limite_cedulas = 2;

                    }

                    else if (limite_cedulas === 2)
                    {

                        limite_cedulas = 1;

                    }

                    cedulas = 0;

                    if (valor_pagamento > 0 && valor_pagamento < 1)
                    {

                        if (limite_moedas <= valor_pagamento)
                        {

                            valor_pagamento -= limite_moedas;

                            moedas += 1;

                        }

                        if (valor_pagamento === 0)
                        {

                            resultado.push(`${moedas} moeda(s) de ${limite_moedas}`);

                            return resultado;

                        }

                    }

                }

            }

        }

    }

}

// Acessar Valores
/*for (let contador = 1; contador < 20+1; contador++)
{

    for (let contador2 of atm_machine(contador))
    {

        console.log(contador2);
    }

}
console.log(atm_machine(16));*/


function calculo_fatorial(numero)
{

    let resultado_fatorial = numero;

    let contador = numero;

    while (contador !== 1)
    {

        resultado_fatorial *= contador - 1;

        contador--;

    }

    return resultado_fatorial;
}


function raio_circulo(area)
{

    area = 3.14 * (area**2);

    return area;

}


function fahrenheit_celsius(temperatura)
{

    let celsius = (temperatura - 32) / 1.8;

    return `A temperatura em ${temperatura.toFixed(1)}° fahrenheit equivale à ${celsius.toFixed(1)}° celsius`;

}


function celsius_fahrenheit(temperatura)
{

    let fahrenheit = (temperatura * 1.8) + 32;

    return `A temperatura em ${temperatura.toFixed(1)}° celsius equivale à ${fahrenheit.toFixed(1)}° fahrenheit`;
}


function calculo_imc(peso, altura)
{

    return peso / altura ** 2;

}


function calculo_tmb(peso, altura, idade, genero)
{

    const lista_generos = ['Masculino', 'masculino', 'Feminino', 'feminino'];

    if (genero.includes('Masculino', 0) === false)
    {
        return 'Gênero inválido';

    }

    else
    {

        if (genero === 'Masculino' || genero === 'masculino')
        {

            return (10 * peso) + (6.25 * altura) - (5 * idade) + 5;

        }
        else if (genero === 'Feminino' || genero === 'feminino')
        {

            return (10 * peso) + (6.25 * altura) - (5 * idade) - 161;

        }

    }

}