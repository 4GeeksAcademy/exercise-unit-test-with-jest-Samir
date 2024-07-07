const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"]
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor de dólares a euros
    let valueInEuro = valueInDollar / oneEuroIs["USD"];
    // Convertimos el valor de euros a yenes
    let valueInYen = valueInEuro * oneEuroIs["JPY"];
    // Retornamos el valor en yenes
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor de yenes a euros
    let valueInEuro = valueInYen / oneEuroIs["JPY"];
    // Convertimos el valor de euros a libras
    let valueInPound = valueInEuro * oneEuroIs["GBP"];
    // Retornamos el valor en libras
    return valueInPound;
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// Definimos la función sum
const sum = (a, b) => {
    return a + b;
}

console.log(sum(7, 3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }