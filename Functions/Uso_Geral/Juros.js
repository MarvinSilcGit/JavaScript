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