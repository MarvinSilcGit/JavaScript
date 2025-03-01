function estado_ddd(ddd) {

  const discionario_ddd_estados = {"68": "Acre", "96": "Amapá", "92": "Amazonas", "97": "Amazonas", "91": "Pará",
    "93": "Pará", "94": "Pará", "69": "Rondônia", "95": "Roraima", "63": "Tocantins",
    "61": "Distrito Federal", "62": "Goiás", "64": "Goiás", "65": "Mato Grosso",
    "66": "Mato Grosso", "67": "Mato Grosso do Sul", "82": "Alagoas", "71": "Bahia",
    "73": "Bahia", "74": "Bahia", "75": "Bahia", "77": "Bahia", "79": "Sergipe",
    "85": "Ceará", "88": "Ceará", "98": "Maranhão", "99": "Maranhão", "83": "Paraíba",
    "81": "Pernambuco", "87": "Pernambuco", "86": "Piauí", "89": "Piauí", "84": "Rio Grande do Norte",
    "27": "Espírito Santo", "28": "Espírito Santo", "31": "Minas Gerais", "32": "Minas Gerais",
    "33": "Minas Gerais", "34": "Minas Gerais", "35": "Minas Gerais", "37": "Minas Gerais",
    "38": "Minas Gerais", "21": "Rio de Janeiro", "22": "Rio de Janeiro", "24": "Rio de Janeiro",
    "11": "São Paulo", "12": "São Paulo", "13": "São Paulo", "14": "São Paulo", "15": "São Paulo",
    "16": "São Paulo", "17": "São Paulo", "18": "São Paulo", "19": "São Paulo", "41": "Paraná",
    "42": "Paraná", "43": "Paraná", "44": "Paraná", "45": "Paraná", "46": "Paraná", "51": "Rio Grande do Sul",
    "53": "Rio Grande do Sul", "54": "Rio Grande do Sul", "55": "Rio Grande do Sul", "47": "Santa Catarina",
    "48": "Santa Catarina", "49": "Santa Catarina"}

}


function formatar_numero_telefone(numero) {

  let numero_formatado = numero;

  numero_formatado = [... numero_formatado];

  let codigo_local = numero.slice(0, 2)


  for (let contador = 0; contador < 17; contador++) {

    if (contador === 0) {

      numero_formatado.splice(contador, 0, '(');

    } else if (contador === 3) {

      numero_formatado.splice(contador, 0, ')');

    } else if (contador === 4) {

      numero_formatado.splice(contador, 0, ' ');

    } else if (contador === 10) {

      numero_formatado.splice(contador, 0, '-')

    }

  }

  numero_formatado = numero_formatado.join('');

  return numero_formatado;

}