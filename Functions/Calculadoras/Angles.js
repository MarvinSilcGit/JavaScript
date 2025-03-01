function radiano_graus(valor) {

  const radiano = parseFloat(valor)

  const graus = radiano * 180 / Math.PI;

  return `${radiano.toFixed(2)}° radianos equivalem à ${graus.toFixed(2)}° graus`

}


function radiano_grados(valor) {

  const radiano = parseFloat(valor);

  const grados = radiano * 200 / Math.PI;

  return `${radiano.toFixed(2)}° Radianos equivalem à ${grados.toFixed(2)}° Grados`;

}


function graus_radiano(valor) {

  const graus = parseFloat(valor)

  const radiano = graus * Math.PI / 180;

  return `${graus.toFixed(2)}° Graus equivalem à ${radiano.toFixed(2)}° Radianos`;

}


function graus_grados(valor) {

  const graus = parseFloat(valor);

  const grados = graus * 200 / 180;

  return `${graus.toFixed(2)}° Graus equivalem à ${grados.toFixed(2)}° Grados`;

}


function grados_radianos(valor) {

  const grados = parseFloat(valor);

  const radiano =  grados * Math.PI / 200;

  return `${grados.toFixed(2)}° Grados equivalem à ${radiano.toFixed(2)}° Radianos`;
    
}


function grados_graus(valor) {

  const grados = parseFloat(valor);

  const graus = grados / 100 * 90

  return `${grados.toFixed(2)}° Grados equivalem à ${graus.toFixed(2)}° Graus`;
}