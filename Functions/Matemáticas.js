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