import {numero_par_impar as par_impar} from "./Validations.js";

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

  if (numero < 0) {

    return 'Número imaginário';

  }

  let resultado_raiz_quadrada = (base + numero / base) / 2;

  resultado_raiz_quadrada = resultado_raiz_quadrada ** 2;

  while (resultado_raiz_quadrada * resultado_raiz_quadrada -  numero > 0.001) {

    base = resultado_raiz_quadrada;

    resultado_raiz_quadrada = (base + numero / base) / 2;

  }

  return `A raiz quadrada aproximada de ${numero.toFixed(2)} é ${resultado_raiz_quadrada.toFixed(2)}`;

}


function calculo_fatorial(numero) {

  let resultado_fatorial = numero;

  let contador = parseInt(numero);

  while (contador !== 1) {

    resultado_fatorial *= contador - 1;

    contador--;

  }

  return resultado_fatorial;

}


function calculo_porcentagem_representante(valor1, valor2) {

  let numero1 = parseFloat(valor1);

  let numero2 = parseFloat(valor2);

  const porcentagem = numero1 / numero2 * 100;

  return `${numero1} representa a ${porcentagem.toFixed(2)}% de ${numero2}`;
  
}


function minimo_multiplo_comum(valor1, valor2) {

  let numero1 = parseFloat(valor1);

  let numero2 = parseFloat(valor2);

  let numero_primo_inicial = 2;

  let fatoracao = [];

  while (numero1 > 1.0 || numero2 > 1.0) {

     if (numero1 % numero_primo_inicial === 0 && numero2 % numero_primo_inicial === 0) {

       numero1 /= numero_primo_inicial;

       numero2 /= numero_primo_inicial;


       fatoracao.push(numero_primo_inicial);

     } else if (numero1 % numero_primo_inicial === 0) {

       numero1 /= numero_primo_inicial;

       fatoracao.push(numero_primo_inicial);

     } else if (numero2 % numero_primo_inicial === 0) {

       numero2 /= numero_primo_inicial;

       fatoracao.push(numero_primo_inicial);

     } else if (numero1 % numero_primo_inicial !== 0 && numero2 % numero_primo_inicial !== 0) {

       numero_primo_inicial += 1;

     }

  }

  let mmc = fatoracao[0];

  for (let contador = 0; contador < fatoracao.length - 1; contador++) {

    mmc *= fatoracao[contador + 1];

  }

  return mmc

}
//console.log(minimo_multiplo_comum(12, 45))


function collatz_conjecture(numero) {

  let steps = 0;

  let resultado = parseInt(numero);

  while (resultado !== 1 || steps === 0) {

    if (! par_impar(resultado)) {

      resultado = resultado * 3 + 1;

    } else {

      resultado = resultado / 2;

    }

    steps++;

  }

  return `Foram necessários ${steps} passos para o número ${numero}`;

}