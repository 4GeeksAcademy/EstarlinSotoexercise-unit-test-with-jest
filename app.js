const sum = (num1, num2) =>  {return num1 + num2};
console.log(sum(7,7))




let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let fromDollarToYen = (usd) => {
      return oneEuroIs.JPY * usd ;

}




let fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
}



let fromYenToPound = (yenes) => {
        return yenes * oneEuroIs.GBP;
}

console.log(fromYenToPound(100))

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };

