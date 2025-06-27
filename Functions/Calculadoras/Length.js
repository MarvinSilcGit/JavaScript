// Meters to many


function metro_quilometro(metro) {

  const metros = parseFloat(metro);

  return `${metros.toFixed(2)} Metros equivalem à ${metros.toFixed(2) / 1000} Quilômetros`;

}


function metro_centimetro(metro) {

  let metros = parseFloat(metro);

  let teste = metros.toLocaleString('en-US')

  return `${metros} Metros equivalem à ${teste * 100} Centímetros`;

}
