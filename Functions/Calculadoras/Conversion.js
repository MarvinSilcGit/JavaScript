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