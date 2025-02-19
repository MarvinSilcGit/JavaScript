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
/*for (let contador = 1; contador < 20 + 1; contador++) {

    for (let contador2 of atm_machine(contador)) {

        console.log(contador2);
    }

}
console.log(atm_machine(16));*/