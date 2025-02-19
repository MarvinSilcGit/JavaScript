function raio_circulo(area) {

  area = 3.14 * (area**2);

  return area;

}

function equacao_segundo_grau_bhaskara(a, b, c) {

  let coeficiente_a = parseInt(a);

  let coeficiente_b = parseInt(b);

  let coeficiente_c = parseInt(c);

  const mathjs = require('mathjs');

  //const Fraction = require('fractional-arithmetic').Fraction;

  //const Frac = require('fractional').Fraction

  //const frac = require('fraction.js');

  if (coeficiente_a === 0) {

    return 'Coeficiente a não pode ser 0';

  } else {

    let delta = coeficiente_b ** 2 - 4 * coeficiente_a * coeficiente_c;

    if (delta < 0) {

      return 'A equação não possui raízes reais';

    } else {

      let x_1 = -coeficiente_b + Math.sqrt(delta)

      if (Math.floor(x_1 / (2 * coeficiente_a)) !== x_1 / (2 * coeficiente_a)) {

        x_1 = mathjs.fraction(x_1, 2 * coeficiente_a); //--mathjs

        x_1 = mathjs.format(x_1, {x_1: 'ratio'}); //--mathjs

        //x_1 = new Fraction(x_1, 2 * coeficiente_a).toString(); -- fractional-arithmetic

        //x_1 = new Frac(x_1, 2 * coeficiente_a) // -- fractional

        //x_1 = frac(x_1, 2 * coeficiente_a);

      } else {

        x_1 /= (2 * coeficiente_a);

      }

      let x_2 = -coeficiente_b - Math.sqrt(delta)

      if (Math.floor(x_2 / (2 * coeficiente_a)) !== x_2 / (2 * coeficiente_a)) {

        x_2 = mathjs.fraction(x_2, 2* coeficiente_a);

        x_2 = mathjs.format(x_2, {x_2: 'ratio'});

        //x_2 = new Fraction(x_2, 2 * coeficiente_a).toString();

        //x_2 = new Frac(x_1, 2 * coeficiente_a)

        //x_2 = frac(x_1, 2 * coeficiente_a);

      } else {

        x_2 /= (2 * coeficiente_a);

      }

      if (delta === 0) {

        return `A equação possui apenas uma raiz real. A raíz positiva é ${x_1}`;

      } else {

        return `A equação é completa. A raíz positiva é ${x_1}. A raíz negativa é ${x_2}`

      }

    }

  }

}

console.log(equacao_segundo_grau_bhaskara(3, 6, 2));