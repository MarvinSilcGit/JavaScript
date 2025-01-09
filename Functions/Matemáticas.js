function resto_divisao(valor1, valor2)
{
    let resto = 0;

    if (valor1 === 0 || valor2 === 0)
    {

        return "Divisão por zero inválida";

    }else
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