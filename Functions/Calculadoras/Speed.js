// Miles to many


function milhas_quilometros(milhas) {

  const milha = parseFloat(milhas);

  return `${milha.toFixed(2)} Milhas/h equivalem à ${milha.toFixed(2) * 1.609} KM/h`;

}


function milhas_pes(milhas) {

  const milha = parseFloat(milhas);

  return `${milha.toFixed(2)} Milhas/h equivalem à ${milha.toFixed(2) * 1.467} Pés/s`;

}

console.log(milhas_pes(10));

function milhas_metros(milhas) {

  const milha = parseFloat(milhas);

  return `${milha.toFixed(2)} Milhas/h equivalem à ${milha.toFixed(2) * 2.237} M/s`;

}
console.log(milhas_metros(2));

function milhas_nos(milhas) {

  const milha = parseFloat(milhas);

  return `${milha.toFixed(2)} Milhas/s equivalem à ${milha.toFixed(2) / 1.151} Nós`;

}

console.log(milhas_nos(1))