function fahrenheit_celsius(valor)
{

    const temperatura_fahrenheit = parseFloat(valor);

    const temperatura_celsius = (temperatura_fahrenheit - 32) / 1.8;

    return `A temperatura em ${temperatura_fahrenheit.toFixed(1)}° Fahrenheit equivale à ${temperatura_celsius.toFixed(1)}° Celsius`;

}


function fahrenheit_kelvin(valor)
{
    const temperatura_fahrenheit = parseFloat(valor);

    const temperatura_kelvin = (temperatura_fahrenheit - 32) * 5 / 9 + 273.15

    return `A temperatura em ${temperatura_fahrenheit.toFixed(1)}° Fahrenheit equivale à ${temperatura_kelvin.toFixed(1)}° Kelvin`

}


function fahrenheit_rankine(valor)
{
    const temperatura_fahrenheit = parseFloat(valor);

    const temperatura_rankine = temperatura_fahrenheit + 459.67;

    return `A temperatura em ${temperatura_fahrenheit.toFixed(1)}° Fahrenheit equivale à ${temperatura_rankine.toFixed(1)}° Rankine`

}


function celsius_fahrenheit(valor)
{

    const temperatura_celsius = parseFloat(valor)

    const temperatura_fahrenheit = (temperatura_celsius * 1.8) + 32;

    return `A temperatura em ${temperatura_celsius.toFixed(1)}° Celsius equivale à ${temperatura_fahrenheit.toFixed(1)}° Fahrenheit`;

}


function celsius_kelvin(valor)
{

    const temperatura_celsius = parseFloat(valor);

    const temperatura_kelvin = temperatura_celsius + 237.15

    return `A temperatura em ${temperatura_celsius.toFixed(1)}° Celsius equivale à ${temperatura_kelvin.toFixed(1)}° Kelvin`;

}

function celsius_rankine(valor)
{

    const temperatura_celsius = parseFloat(valor);

    const temperatura_rankine = (temperatura_celsius - 391.67) * 5 / 9;

    return `A temperatura em ${temperatura_celsius.toFixed(1)}° Celsius equivale à ${temperatura_rankine.toFixed(1)}° Rankine`;
    
}


function kelvin_fahrenheit(valor)
{

    const temperatura_kelvin = parseFloat(valor);

    const temperatura_fahrenheit = (temperatura_kelvin - 273.15) * 9 / 5 + 32;

    return `A temperatura em ${temperatura_kelvin.toFixed(1)}° Kelvin equivale à ${temperatura_fahrenheit.toFixed(1)}° Fahrenheit`;

}


function kelvin_celsius(valor)
{
    const temperatura_kelvin = parseFloat(valor);

    const temperatura_celsius = temperatura_kelvin - 273.15;

    return `A temperatura em ${temperatura_kelvin.toFixed(1)}° Kelvin equivale à ${temperatura_celsius.toFixed(1)}° Celsius`;

}


function kelvin_rankine(valor)
{

    const temperatura_kelvin = parseFloat(valor);

    const temperatura_rankine = temperatura_kelvin * 9 / 5;

    return `A temperatura em ${temperatura_kelvin.toFixed(1)}° Kelvin equivale à ${temperatura_rankine.toFixed(1)}° Rankine`;

}


function rankine_fahrenheit(valor)
{

    const temperatura_rankine = parseFloat(valor);

    const temperatura_fahrenheit = temperatura_rankine - 459.67;

    return `A temperatura em ${temperatura_rankine.toFixed(1)}° Rankine equivale à ${temperatura_fahrenheit.toFixed(1)}° Fahrenheit`;

}


function rankine_celsius(valor)
{
    const temperatura_rankine = parseFloat(valor);

    const temperatura_celsius = (temperatura_rankine - 491.67) * 5 / 9;

    return `A temperatura em ${temperatura_rankine.toFixed(1)}° Rankine equivale à ${temperatura_celsius.toFixed(1)}° Celsius`;
}


function rankine_kelvin(valor)
{

    const temperatura_rankine = parseFloat(valor);

    const temperatura_kelvin = temperatura_rankine * 5 / 9;

    return `A temperatura em ${temperatura_rankine.toFixed(1)}° Rankine equivale à ${temperatura_kelvin.toFixed(1)}° Kelvin`;

}