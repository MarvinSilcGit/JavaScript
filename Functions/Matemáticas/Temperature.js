function fahrenheit_celsius(valor)
{

    const temperatura = parseFloat(valor);

    const celsius = (temperatura - 32) / 1.8;

    return `A temperatura em ${temperatura.toFixed(1)}° fahrenheit equivale à ${celsius.toFixed(1)}° celsius`;

}


function celsius_fahrenheit(valor)
{

    const temperatura = parseFloat(valor)

    const fahrenheit = (temperatura * 1.8) + 32;

    return `A temperatura em ${temperatura.toFixed(1)}° celsius equivale à ${fahrenheit.toFixed(1)}° fahrenheit`;
}