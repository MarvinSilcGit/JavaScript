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