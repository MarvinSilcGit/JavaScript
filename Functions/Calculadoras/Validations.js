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

      return `${numero} é um número primo`;

    } else {

      return `O número ${numero} não é número primo`;

    }

  }

}


export function numero_par_impar(valor)
{

  const numero = parseInt(valor, 10)

  if (numero % 2 === 0) {

    return `O número ${numero} é par`;

  } else {

    return `O número ${numero} é ímpar`;

  }

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


function validade_numero_decimal(numero) {

  let numero_decimal = numero;

  let numero_inteiro = Math.trunc(numero);

  if (numero_decimal > numero_inteiro || numero_decimal !== numero) {

    return `O número ${numero} é decimal`;

  } else {

    if (numero_decimal.includes('.')) {

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


function triangulo_tipo(lado1, lado2, lado3) {

  if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {

    return 'Um triângulo naõ poder ter lado 0';

  } else {

    if (lado1 + lado2 <= lado3) {

      return 'A somas desse lados não forma um triângulo';

    } else {

      if (lado1 === lado2 && lado2 === lado3 && lado1 === lado3) {

        return 'Esse é um triângulo equilátero';

      } else if (lado1 !== lado2 && lado2 !== lado3 && lado3 !== lado1) {

        return 'Esse é um triângulo escaleno';

      } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {

        return 'Esse é um triângulo isóceles';

      }

    }

  }

}


function palindromo(valor) {

  let contador2 = 0;

  if (valor.length <= 2) {

    return 'Tamanho insuficiente';

  } else {

    for (let contador1 = 0; contador1 < valor.length; contador1++) {

      if (valor[contador1] === valor.at(-1 - contador1)) {

        contador2 += 1

      }

    }

    if (contador2 === valor.length) {

      return `${valor} é palíndromo`;

    } else {

      return `${valor} não é palíndromo`;

    }

  }

}