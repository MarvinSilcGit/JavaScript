function resto_divisao(dividendo, divisor)
{

    const numero1 = parseFloat(dividendo);

    const numero2 = parseFloat(divisor);

    let resto = 0;

    if (numero1 === 0 || numero2 === 0)
    {

        return "Divisão por zero inválida";

    }

    else
    {

        if (numero1 === numero2)
        {

            resto = 0;

        }

        else if (numero1 > numero2)
        {

            while (numero2 + resto <= numero1)
            {

                resto += numero2;

            }

            resto = numero1 - resto;

        }

        else
        {

            while (numero1 + resto < numero2)
            {

                resto +=numero1;

            }

            while (resto !== numero2)
            {

                resto += 1;

            }

        }

        return `O resto da divisão entre ${numero1.toFixed(1)} e ${numero2.toFixed(1)} é: ${resto.toFixed(1)}`;

    }

}


function resto_inteiro_divisao (dividendo, divisor)
{

    const numero1 = parseFloat(dividendo);

    const numero2 = parseFloat(divisor);

    let resto_inteiro = 0;

    let resto = 0;

    if (numero1 === 0 || numero2 === 0)
    {

        return 'Divisão por zero é inválida';

    }

    else
    {

        if (numero1 === numero2)
        {

            resto_inteiro = 1

        }

        else if (numero1 > numero2)
        {

            while (numero2 + resto <= numero1)
            {

                resto_inteiro += 1;

                resto += numero2

            }

        }

        else
        {

            while (numero1 + resto < numero2)
            {

                resto += numero1;

            }

            while (resto !== numero2)
            {

                resto += 1;

            }

        }

        return `O resto inteiro da divisão entre ${numero1.toFixed(2)} e ${numero2.toFixed(2)} é: ${resto_inteiro}`;

    }

}


function raiz_quadrada(valor)
{

    const numero = parseFloat(valor);

    let base = 2;

    let resultado_raiz_quadrada = (base + numero / base) / 2;

    resultado_raiz_quadrada = resultado_raiz_quadrada ** 2;

    while (resultado_raiz_quadrada * resultado_raiz_quadrada -  numero > 0.001)
    {

        base = resultado_raiz_quadrada;

        resultado_raiz_quadrada = (base + numero / base) / 2;

    }

    return `A raiz quadrada aproximada de ${numero.toFixed(2)} é ${resultado_raiz_quadrada.toFixed(2)}`;

}


function numero_primo(valor)
{

    const numero = parseInt(valor, 10)

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


function numero_par_impar(valor)
{

    const numero = parseInt(valor, 10)

    if (numero % 2 === 0)
    {

        return `O número ${numero} é par`;

    }

    else
    {

        return `O número ${numero} é ímpar`;

    }

}


function palindromo(valor)
{

    let contador2 = 0;

    if (valor.length <= 2)
    {

        return 'Tamanho insuficiente';

    }

    else
    {

        for (let contador1 = 0; contador1 < valor.length; contador1++)
        {

            if (valor[contador1] === valor.at(-1 - contador1))
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
/*for (let contador = 1; contador < 20 + 1; contador++)
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


function calculo_imc(peso, altura)
{
    let imc = peso / altura ** 2

    return imc.toFixed(2);

}


function calculo_tmb(peso, altura, idade, genero)
{

    const lista_generos = ['Masculino', 'masculino', 'Feminino', 'feminino'];

    let tmb = 0;

    if (lista_generos.includes(genero, 0) === false)
    {
        return 'Gênero inválido';

    }

    else
    {

        if (genero === 'Masculino' || genero === 'masculino')
        {

            tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;

            return tmb.toFixed(2);

        }
        else if (genero === 'Feminino' || genero === 'feminino')
        {
            tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;

            return tmb.toFixed(2);

        }

    }

}


function triangulo_validade_tipo(lado1, lado2, lado3)
{

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0)
    {

        return 'Um triângulo naõ poder ter lado 0';

    }

    else
    {

        if (lado1 + lado2 <= lado3)
        {

            return 'A somas desse lados não forma um triângulo';

        }

        else
        {

            if (lado1 === lado2 && lado2 === lado3 && lado1 === lado3)
            {

                return 'Esse é um triângulo equilátero';

            }

            else if (lado1 !== lado2 && lado2 !== lado3 && lado3 !== lado1)
            {

                return 'Esse é um triângulo escaleno';

            }

            else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3)
            {

                return 'Esse é um triângulo isóceles';

            }

        }

    }

}


function ano_bissexto(ano)
{

    if (ano % 4 === 0)
    {

        if (ano % 100 !== 0)
        {

            return `O ano ${ano} é bissexto`;

        }

        else if (ano % 100 === 0)
        {

            return `O ano ${ano} é bissexto especial`;

        }

    }

    else
    {
        return `O ano ${ano} não é bissexto`

    }

}


function numero_decimal_inteiro(numero)
{

    let numero_inteiro = Math.trunc(numero);

    if (numero > numero_inteiro)
    {

        return `O número ${numero} é decimal`;

    }

    else
    {

        if (numero.includes('.'))
        {
            return `O número ${numero} é decimal`;
        }

        else
        {

            return `O número ${numero} não é decimal`;

        }

    }

}


function gerador_tabuada_simples(numero_tabuada)
{

    for (let contador = 1; contador < 11; contador++)
    {

        console.log(`${numero_tabuada} x ${contador} = ${numero_tabuada * contador}`);

    }

    return "";

}


function gerador_tabuada_inico_fim(numero_inicial, numero_final)
{

    for (let contador = 1; contador < numero_final + 1; contador++)
    {

        console.log(`${numero_inicial} x ${contador} = ${numero_inicial * contador}`);

    }

    return 0

}


function gerador_tabuada_inicio_fim_razao(numero_inicial, numero_final, razao)
{

    for (let contador = 1; contador <= numero_final; contador += razao)
    {

        console.log(`${numero_inicial} x ${contador} = ${numero_inicial * contador}`)

    }

    return 0;

}


function numero_fizz_buzz(numero)
{

    if (numero <= 0)
    {

        return 'Número menores que 1 não são válidos';

    }

    if (numero % 3 === 0 && numero % 5 === 0 && numero !== 0)
    {

        return `O número ${numero} é FizzBuzz`;

    }

    else if (numero % 3 === 0)
    {

        return `O número ${numero} é Fizz`;

    }

    else if (numero % 5 === 0)
    {

        return `O número ${numero} é Buzz`;

    }

    else
    {

        return `O número ${numero} não é nem Fizz ou nem Buzz`;

    }

}


function juros_compostos(valor_inicial, aporte_mensal, juros_anual, quantidade_meses)
{

    let ganho_bruto_total = valor_inicial;

    let ganho_juros = 0;

    for (let contador = 1; contador < quantidade_meses + 1; contador++)
    {

        ganho_bruto_total += ganho_bruto_total / 100 * juros_anual / 12;

        ganho_juros += ganho_bruto_total / 100 * juros_anual / 12;

        console.log(`O valor no ${contador}° mês será de R$ ${ganho_bruto_total.toFixed(2)}. Com uma taxa de ${juros_anual.toFixed(2)}% anual, gerou o valor de R$ ${ganho_juros.toFixed(2)} em juros`)

        ganho_bruto_total += aporte_mensal;

    }

    return ''

}


function validade_cpf(cpf)
{

    if (cpf.length !== 11)
    {

        return 'CPF inválido';

    }

    else
    {

        const dicionario_estados = {"0": "Bahia", "1": "Distrido Federal, Goiás, Mato Grosso do Sul ou Tocantins", "2": "Pará, Amazonas, Acre, Amapá, Rondônio ou Roraíma",
                              "3": "Ceará, Maranhão ou Piauí",
                              "4": "Pernambuco, Rio Grande do Norte, Paraíba ou Alagoas", "5": "Bahia ou Sergipe", "6": "Minas Gerais",
                              "7": "Rio de Janeiro ou Espírito Santo", "8": "São Paulo",
                              "9":"Paraná ou Santa Catarina"}


        let resultado_posicao_j = 0;

        let resultador_posicao_k = 0;

        let contador = 0;

        let estado = cpf[8]

        let posicao_j = 0;

        let posicao_k = 0;

        for (let contador2 = 0; contador2 < 9; contador2++)
        {

            for (let cont of cpf)
            {

                console.log(cont)
            }

            resultado_posicao_j += resultado_posicao_j.parseInt(cpf[contador2],10) * contador;

            contador--

        }

        if (resultado_posicao_j % 11 < 2)
        {

            posicao_j = 0;


        }

        else if (resultado_posicao_j % 11 >= 2 && resultado_posicao_j % 11 <=10)
        {

            posicao_j = 11 - resultado_posicao_j % 11;

        }

        else
        {

            return 'CPF inválido';

        }

        contador = 11;

        for (let contador2 = 0; contador2 < 10; contador2++)
        {

            resultador_posicao_k += resultador_posicao_k.parseInt(cpf[contador2]) * contador;

            contador--;

        }

        if (resultador_posicao_k % 11 < 2)
        {

            posicao_k = 0;

        }

        else if (resultador_posicao_k % 11 >= 2 && resultador_posicao_k % 11 <=10)
        {

            posicao_k = 11 - resultador_posicao_k % 11;

        }

        else
        {

            return 'CPF inválido';

        }

        posicao_j.toString();

        posicao_k.toString();

        cpf = [...cpf]

        console.log(cpf);


    }

}

//console.log(validade_cpf('06288231509'))

let cpf = ['a', '1', 3, 4, 5, 1];

for (let cont of cpf)
{

    console.log(cont)

}