function kw_cv(valor) {

    const kw = parseFloat(valor)

    const cv = kw * 1.36;

    return `${kw.toFixed(2)} Kilowatts equivalem à ${cv.toFixed(2)} Cavalos`;

}


function cv_kw(valor) {

    const cv = parseFloat(valor);

    const kw = cv / 1.36;

    return `${kw.toFixed(2)} Cavalos equivalem à ${cv.toFixed(2)} Kilowatts`;

}


function consumo_aparelho(volts, amperes) {

    return `Com ${volts.toFixed(2)}v e ${amperes.toFixed(2)}A, a potência máxima será ${volts * amperes.toFixed(2)} Watts`;

}