function juros_compostos(valor_inicial, aporte_mensal, juros_anual, quantidade_meses) {

  let ganho_bruto_total = valor_inicial;

  let ganho_juros = 0;

  for (let contador = 1; contador < quantidade_meses + 1; contador++) {

    ganho_bruto_total += ganho_bruto_total / 100 * juros_anual / 12;

    ganho_juros += ganho_bruto_total / 100 * juros_anual / 12;

    console.log(`O valor ao final do ${contador}° mês será de R$ ${ganho_bruto_total.toFixed(2)}. Com uma taxa anual de ${juros_anual.toFixed(2)}%, gerou-se o valor de R$ ${ganho_juros.toFixed(2)} em juros`)

    ganho_bruto_total += aporte_mensal;

  }

  return ''

}

console.log(juros_compostos(18000,2500,12,36));