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


function validar_cpf(cpf) {

  let cpf_validador = [... cpf].splice(0, 9);

  let resultado_posicao_j = 0;

  let resultado_posicao_k = 0;

  let contador = 10;

  cpf_validador = cpf_validador.join('');

  for (let contador2 of cpf_validador) {

    resultado_posicao_j += parseInt(contador2) * contador;

    contador--;

  }

  if (resultado_posicao_j % 11 < 2) {

    cpf_validador += '0';

  } else if (resultado_posicao_j % 11 >= 2 && resultado_posicao_j % 11 <=10) {

    cpf_validador += (11 - (resultado_posicao_j % 11)).toString();

  }

  contador = 11;

  for (let contador2 of cpf_validador) {

    resultado_posicao_k += parseInt(contador2) * contador;

    contador--;

  }

  if (resultado_posicao_k % 11 < 2) {

    cpf_validador += '0';

  } else if (resultado_posicao_k % 11 >= 2 && resultado_posicao_k % 11 <=10) {

    cpf_validador += (11 - (resultado_posicao_k % 11)).toString();

  }

  return cpf === cpf_validador;

}


function gerador_cpf() {

  let cpf = '';

  for (let contador = 0; contador < 11; contador++) {

    cpf += Math.floor(Math.random() * 10);

  }

  cpf = formatar_cpf(cpf);

  return cpf;

}


function local_emissao_cpf(cpf){

  const dicionario_estados =
      {"1": "Distrito Federal, Goiás, Mato Grosso do Sul ou Tocantins",
      "2": "Pará, Amazonas, Acre, Amapá, Rondônia ou Roraíma",
      "3": "Ceará, Maranhão ou Piauí",
      "4": "Pernambuco, Rio Grande do Norte, Paraíba ou Alagoas",
      "5": "Bahia ou Sergipe", "6": "Minas Gerais",
      "7": "Rio de Janeiro ou Espírito Santo",
      "8": "São Paulo",
      "9":"Paraná ou Santa Catarina"}

    return `O CPF foi emitido em: ${dicionario_estados[cpf[8]]}`
}