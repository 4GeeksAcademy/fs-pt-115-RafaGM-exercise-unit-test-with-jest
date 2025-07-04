// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD
}

const fromDollarToYen = (valueInDollar) => {

    let euro = valueInDollar / oneEuroIs.USD
    return euro * oneEuroIs.JPY
}

const fromDollarToPound = (valueInYenes) => {

   let euro = valueInYenes / oneEuroIs.JPY
   return euro * oneEuroIs.GBP
   
}
console.log(fromDollarToPound(1));


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromDollarToPound }
