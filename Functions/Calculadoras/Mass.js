// Kilograms to many

function quilograma_tonelada(quilo) {

  const quilos = parseFloat(quilo) ;

  return `${quilos.toFixed(2)} Quilos equivalem à ${quilos.toFixed(2) / 1000} Toneladas`;
}


function quilograma_grama(quilo) {

  const quilos = parseFloat(quilo) ;

  return `${quilos.toFixed(2)} Quilos equivalem à ${quilos.toFixed(2) * 1000} Gramas`;
}


function quilograma_miligrama(quilo) {

  const quilos = parseFloat(quilo);

  return `${quilos.toFixed(2)} Quilos equivalem à ${quilos.toExponential(2) * 1e+6} Miligramas`;
}
console.log(quilograma_miligrama(15));

function quilograma_micrograma(quilo) {

  const quilos = parseFloat(quilo);

  return `${quilos.toFixed(2)} Quilos equivalem à ${quilos.toFixed(2) * 1e+9} Microgramas`;
}


function quilograma_libra(quilo) {

  const quilos = parseFloat(quilo);

  return `${quilos.toFixed(2)} Quilos equivalem à ${quilos.toFixed(2) * 2.205} Libras`;
}


function quilograma_onca(quilo) {

  const quilos = parseFloat(quilo);

  return `${quilos.toFixed(2)} Quilos equivalem à ${quilos.toFixed(2) * 35.274} Onças`;
}


function quilograma_arroba(quilo) {

  const quilos = parseFloat(quilo);

  return `${quilos.toFixed(2)} Quilos equivalem à ${quilos.toFixed(2) / 15} Arrobas`;
}