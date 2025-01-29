function resto_divisao(dividendo, divisor) {

  const numero1 = parseFloat(dividendo);

  const numero2 = parseFloat(divisor);

  let resto = 0;

  if (numero1 === 0 || numero2 === 0) {

      return "Divisão por zero inválida";

  }

  else
  {

    if (numero1 === numero2) {

        resto = 0;

    } else if (numero1 > numero2) {

      while (numero2 + resto <= numero1) {

        resto += numero2;

      }

      resto = numero1 - resto;

    }

    else
    {

      while (numero1 + resto < numero2) {

        resto +=numero1;

      }

      while (resto !== numero2) {

          resto += 1;

      }

    }

    return `O resto da divisão entre ${numero1.toFixed(1)} e ${numero2.toFixed(1)} é: ${resto.toFixed(1)}`;

  }

}


function resto_inteiro_divisao (dividendo, divisor) {

  const numero1 = parseFloat(dividendo);

  const numero2 = parseFloat(divisor);

  let resto_inteiro = 0;

  let resto = 0;

  if (numero1 === 0 || numero2 === 0) {

    return 'Divisão por zero é inválida';

  }

  else {

    if (numero1 === numero2) {

        resto_inteiro = 1

    } else if (numero1 > numero2) {

      while (numero2 + resto <= numero1) {

        resto_inteiro += 1;

        resto += numero2

      }

    } else {

      while (numero1 + resto < numero2) {

        resto += numero1;

      }

      while (resto !== numero2) {

        resto += 1;

      }

    }

    return `O resto inteiro da divisão entre ${numero1.toFixed(2)} e ${numero2.toFixed(2)} é: ${resto_inteiro}`;

  }

}


function raiz_quadrada(valor) {

  const numero = parseFloat(valor);

  let base = 2;

  let resultado_raiz_quadrada = (base + numero / base) / 2;

  resultado_raiz_quadrada = resultado_raiz_quadrada ** 2;

  while (resultado_raiz_quadrada * resultado_raiz_quadrada -  numero > 0.001) {

    base = resultado_raiz_quadrada;

    resultado_raiz_quadrada = (base + numero / base) / 2;

  }

  return `A raiz quadrada aproximada de ${numero.toFixed(2)} é ${resultado_raiz_quadrada.toFixed(2)}`;

}


function numero_primo(valor) {

  const numero = parseInt(valor, 10)

  let confirmacao = 2;

  if (numero === 0 || numero === 1) {

      return 'Esse número é inválido';

  }

  if (numero === 3 || numero === 2) {

      return `${numero} é um número primo`;

  } else {

    for (let contador = confirmacao; contador < numero + 1; contador++) {

        if (numero % contador !== 0) {

            confirmacao += 1;

        }

    }

    if (confirmacao === numero) {

        return `${numero} é um número primo, pois ele é divisível somente por ele e por 1`;

    } else {
      process.stdout.write(`O número ${numero} não é primo, pois ele é divisível por: `);

      for (let contador = 1; contador < numero + 1; contador++) {

        if (numero % contador === 0) {

          if (numero - contador === 0) {

            process.stdout.write(`${contador} `);

          } else {

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

  if (numero % 2 === 0) {

    return `O número ${numero} é par`;

  } else {

    return `O número ${numero} é ímpar`;

  }

}


function calculo_fatorial(numero) {

  let resultado_fatorial = numero;

  let contador = numero;

  while (contador !== 1) {

    resultado_fatorial *= contador - 1;

    contador--;

  }

  return resultado_fatorial;

}


function ano_bissexto(ano)
{

  if (ano % 4 === 0) {

    if (ano % 100 !== 0) {

      return `O ano ${ano} é bissexto`;

    } else if (ano % 100 === 0) {

      return `O ano ${ano} é bissexto especial`;

    }

  } else {

    return `O ano ${ano} não é bissexto`

  }

}


function numero_decimal_inteiro(numero) {

  let numero_inteiro = Math.trunc(numero);

  if (numero > numero_inteiro) {

    return `O número ${numero} é decimal`;

  } else {

    if (numero.includes('.')) {

      return `O número ${numero} é decimal`;

    } else {

      return `O número ${numero} não é decimal`;

    }

  }

}


function numero_fizz_buzz(numero) {

  if (numero <= 0) {

    return 'Número menores que 1 não são válidos';

  }

  if (numero % 3 === 0 && numero % 5 === 0 && numero !== 0) {

    return `O número ${numero} é FizzBuzz`;

  }

  else if (numero % 3 === 0) {

    return `O número ${numero} é Fizz`;

  } else if (numero % 5 === 0) {

    return `O número ${numero} é Buzz`;

  } else {

    return `O número ${numero} não é nem Fizz ou nem Buzz`;

  }

}


function binary_decimal(numero) {

  let tamanho_decimal = numero.length;

  let decimal = 0;

  let expoente = tamanho_decimal - 1;

  for (let contador of numero) {

    if (contador === "1") {

      decimal += (2 ** expoente);

    }

    else if (contador === "0") {

      decimal += 0;

    } else {

        return 'Esse número não é binário';

    }

    expoente--;

    numero = parseInt(numero);

  }

  return `${decimal}`;

}


function decimal_binary(numero) {

  let resto = [];

  let numero_decimal = parseInt(numero);

  while (numero_decimal !== 0) {

    resto.unshift(numero_decimal % 2);

    numero_decimal = Math.floor(numero_decimal / 2);

  }

  resto = resto.join('');

  return `${resto}`;

}


function equacao_segundo_grau_bhaskara(coeficiente_a, coeficiente_b, coeficiente_c) {


}