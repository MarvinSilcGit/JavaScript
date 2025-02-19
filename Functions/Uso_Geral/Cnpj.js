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


function validar_cnpj(cnpj) {

  cnpj = [... cnpj]

  let cnpj_validador = [...cnpj].splice(0, 12);

  cnpj_validador = cnpj_validador.join('');

  let resultado_posicao_x_1 = 0;

  let resultado_posicao_x_2 = 0;

  let contador = 5;

  for (let contador2 of cnpj_validador) {

    contador++;

    let posicao_x_1 = parseInt(contador2, 10);

    resultado_posicao_x_1 += posicao_x_1 * contador;

    if (contador === 9) {

      contador = 1;

    }

  }

  cnpj_validador += resultado_posicao_x_1 % 11;

  contador = 4;

  for (let contador2 of cnpj_validador) {

    contador++;

    let posicao_x_2 = parseInt(contador2, 10);

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

console.log(validar_cnpj('59120772000100'));

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