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

    return `A temperatura em ${temperatura_celsius.toFixed(1)}° Celsius equivale à ${temperatura_rankine.toFixed(1)}° Rankine`
    
}


function kelvin_fahrenheit(valor)
{

}


/*
def kelvin_fahrenheit (temperatura: float):

    temperatura_fahrenheit = (temperatura - 273.15) * 9 / 5 + 32

    return "A temperatura em %.1f° Kelvin equivale à %.1f° Fahrenheit" % (temperatura, temperatura_fahrenheit)


def kelvin_celsius (temperatura: float):

    temperatura_celsius = temperatura - 273.15

    return "A temperatura em %.1f° Kelvin equivale à %.1f° Celsius" % (temperatura, temperatura_celsius)


def kelvin_rankine (temperatura: float):

    temperatura_rankine = temperatura * 9 / 5

    return "A temperatura em %.1f° Kelvin equivale à %.1f° Rankine" % (temperatura, temperatura_rankine)


def rankine_fahrenheit (temperatura: float):

    temperatura_fahrenheit = temperatura - 459.67

    return  "A temperatura em %.1f° Rankine equivale à %.1f° Fahrenheit" % (temperatura, temperatura_fahrenheit)


def rankine_celsius (temperatura: float):

    temperatura_celsius = (temperatura - 491.67) * 5/ 9

    return "A temperatura em %.1f° Rankine equivale à %.1f° Celsius" % (temperatura, temperatura_celsius)


def rankine_kelvin (temperatura: float):

    temperatura_kelvin = temperatura * 5 / 9

    return "A temperatura em %.1f° Rankine equivale à %.1f° Kelvin" % (temperatura, temperatura_kelvin)



*/