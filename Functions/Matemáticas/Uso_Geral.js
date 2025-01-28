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


function atm_machine(valor) {

  let valor_pagamento = valor;

  if (valor_pagamento < 1) {

    return 'Valor insuficiente para saque';

  } else {

    let cedulas = 0;

    let limite_cedulas = 200;

    let resultado = [];

    let limite_moedas = 0.5;

    let moedas = 0;

    while (true) {

      if (limite_cedulas <= valor_pagamento) {

        valor_pagamento -= limite_cedulas;

        cedulas += 1;

      } else {

        resultado.push(`${cedulas} cédulas de R$ ${limite_cedulas}`);

        if (valor_pagamento === 0) {

            return resultado;

        } else {

          if (limite_cedulas === 200) {

            limite_cedulas = 100;

          } else if (limite_cedulas === 100) {

            limite_cedulas = 50;

          } else if (limite_cedulas === 50) {

            limite_cedulas = 20;

          } else if (limite_cedulas === 20) {

            limite_cedulas = 10;

          } else if (limite_cedulas === 10) {

            limite_cedulas = 5;

          } else if (limite_cedulas === 5) {

            limite_cedulas = 2;

          } else if (limite_cedulas === 2) {

            limite_cedulas = 1;

          }

          cedulas = 0;

          if (valor_pagamento > 0 && valor_pagamento < 1) {

            if (limite_moedas <= valor_pagamento) {

              valor_pagamento -= limite_moedas;

              moedas += 1;

            }

            if (valor_pagamento === 0) {

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




function raio_circulo(area) {

  area = 3.14 * (area**2);

  return area;

}


function calculo_imc(peso, altura) {

  let imc = peso / altura ** 2

  return imc.toFixed(2);

}


function calculo_tmb(peso, altura, idade, genero) {

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


function triangulo_validade_tipo(lado1, lado2, lado3) {

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


function gerador_tabuada_simples(numero_tabuada) {

  for (let contador = 1; contador < 11; contador++) {

    console.log(`${numero_tabuada} x ${contador} = ${numero_tabuada * contador}`);

  }

  return "";

}


function gerador_tabuada_inico_fim(numero_inicial, numero_final) {

  for (let contador = 1; contador < numero_final + 1; contador++) {

    console.log(`${numero_inicial} x ${contador} = ${numero_inicial * contador}`);

  }

  return 0

}


function gerador_tabuada_inicio_fim_razao(numero_inicial, numero_final, razao) {

  for (let contador = 1; contador <= numero_final; contador += razao) {

    console.log(`${numero_inicial} x ${contador} = ${numero_inicial * contador}`)

  }

    return 0;

}


function juros_compostos(valor_inicial, aporte_mensal, juros_anual, quantidade_meses) {

  let ganho_bruto_total = valor_inicial;

  let ganho_juros = 0;

  for (let contador = 1; contador < quantidade_meses + 1; contador++) {

      ganho_bruto_total += ganho_bruto_total / 100 * juros_anual / 12;

      ganho_juros += ganho_bruto_total / 100 * juros_anual / 12;

      console.log(`O valor no ${contador}° mês será de R$ ${ganho_bruto_total.toFixed(2)}. Com uma taxa de ${juros_anual.toFixed(2)}% anual, gerou o valor de R$ ${ganho_juros.toFixed(2)} em juros`)

      ganho_bruto_total += aporte_mensal;

  }

  return ''

}


function formatar_cpf(cpf) {

  let cpf_formatado = [... cpf]

  for (let contador = 0; contador < 14; contador++) {

        if (contador === 3) {

          cpf_formatado.splice(contador, 0, '.');

        } else if (contador === 7) {

          cpf_formatado.splice(contador, 0, '.');

        } else if (contador === 11) {

          cpf_formatado.splice(contador, 0, '-');

        }

      }

  cpf_formatado = cpf_formatado.join('');

  return `${cpf_formatado}`;

}


function validade_cpf(cpf) {

  if (cpf.length !== 11) {

    return 'CPF inválido'

  } else {

    let estado = cpf[8]

    let cpf_validador = [... cpf].splice(0, 9);

    cpf_validador = cpf_validador.join('');

    const dicionario_estados = {"1": "Distrido Federal, Goiás, Mato Grosso do Sul ou Tocantins", "2": "Pará, Amazonas, Acre, Amapá, Rondônio ou Roraíma",
                              "3": "Ceará, Maranhão ou Piauí",
                              "4": "Pernambuco, Rio Grande do Norte, Paraíba ou Alagoas", "5": "Bahia ou Sergipe", "6": "Minas Gerais",
                              "7": "Rio de Janeiro ou Espírito Santo", "8": "São Paulo",
                              "9":"Paraná ou Santa Catarina"}

    let resultado_posicao_j = 0;

    let resultado_posicao_k = 0;

    let posicao_j = 0;

    let posicao_k = 0;

    let contador = 10;

    for (let contador2 of cpf_validador) {

      resultado_posicao_j += parseInt(contador2) * contador;

      contador--;

    }

    if (resultado_posicao_j % 11 < 2) {

      cpf_validador += 0;

    } else if (resultado_posicao_j % 11 >= 2 && resultado_posicao_j % 11 <=10) {

      cpf_validador += 11 - (resultado_posicao_j % 11);

    }

    contador = 11;

    for (let contador2 of cpf_validador) {

      resultado_posicao_k += parseInt(contador2) * contador;

      contador--;

    }

    if (resultado_posicao_k % 11 < 2) {

      cpf_validador += 0;

    } else if (resultado_posicao_k % 11 >= 2 && resultado_posicao_k % 11 <=10) {

      cpf_validador += 11 - (resultado_posicao_k % 11);

    }

    if (cpf === cpf_validador) {

      return `O CPF ${formatar_cpf(cpf)} é válido, sendo emitido em: ${dicionario_estados[estado]}`

    } else {

      return 'CPF inválido';

    }

  }

}


function formatar_cnpj(cnpj) {

  cnpj = [...cnpj]

  for (let contador = 0; contador < 18; contador++) {

    if (contador === 2) {

      cnpj.splice(contador, 0, '.');

    } else if (contador === 6) {

      cnpj.splice(contador, 0, '.');

    } else if (contador === 10) {

      cnpj.splice(contador, 0, '/');

    } else if (contador === 15) {

      cnpj.splice(contador, 0, '-');

    }

  }

  cnpj = cnpj.join('');

  return `${cnpj}`

}


function validade_cnpj(cnpj) {

  cnpj = [... cnpj]

  let cnpj_validador = [...cnpj];

  cnpj_validador.splice(12,2);

  cnpj_validador = cnpj_validador.join('');

  let resultado_posicao_x_1 = 0;

  let resultado_posicao_x_2 = 0;

  let posicao_x_1 = 0;

  let posicao_x_2 = 0;

  let contador = 5;

  for (let contador2 of cnpj_validador) {

    contador++;

    posicao_x_1 = parseInt(contador2, 10);

    resultado_posicao_x_1 += posicao_x_1 * contador;

    if (contador === 9) {

      contador = 1;

    }

  }

  cnpj_validador += resultado_posicao_x_1 % 11;

  contador = 4;

  for (let contador2 of cnpj_validador) {

    contador++;

    posicao_x_2 = parseInt(contador2, 10);

    resultado_posicao_x_2 += posicao_x_2 * contador;

    if (contador === 9) {

      contador = 1;

      }

  }

  cnpj_validador += resultado_posicao_x_2 % 11;

  cnpj_validador = formatar_cnpj(cnpj_validador)

  cnpj = formatar_cnpj(cnpj)

  if (cnpj === cnpj_validador) {

    return `O CNPJ ${cnpj} é válido`

  } else {

    return `O CNPJ ${cnpj} é inválido`

  }

}

//console.log(validade_cnpj('59120772000100'));

function gerador_cnpj() {

  let cnpj = '';

  for (let contador = 0; contador < 14; contador++) {

    if (contador === 8 || contador === 9 || contador === 10) {

      cnpj += '0';

    } else if (contador === 11) {

      cnpj += '1';

    } else {

      cnpj += Math.floor(Math.random() * 10);

    }

  }

  cnpj = formatar_cnpj(cnpj)

  return cnpj

}