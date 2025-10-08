function calculo_tmb(peso, altura, idade, genero) {

  const lista_generos = ['Masculino', 'masculino', 'Feminino', 'feminino'];

  let tmb = 0;

  if (lista_generos.includes(genero, 0) === false) {

    return 'Gênero inválido';

  } else {

    if (genero === 'Masculino' || genero === 'masculino') {

      tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;

      return tmb.toFixed(2);

    } else if (genero === 'Feminino' || genero === 'feminino') {

      tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;

      return tmb.toFixed(2);

    }

  }

}