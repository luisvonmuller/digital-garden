/**
 * O nosso "Arquivo que possuí nosso vetor de dados" -
 * @type {Array<object>} */
var dataSet = require("../data.json");

/** ## Sem "Abstração"/"OverHead". */

// ! O abaixo seria "Overhead"/"Sem Abstração" (Inicaremos o "Timer")
console.time("js-sem-abstração");
/** ## Calculando o tamanho...
 * Pegando o "tamanho" total do nosso Vetor (JSON).
 * @type {number}
 */
const dataSetLenght = dataSet.length;
/** Contador que iterará sobre o nosso "Vetor" de Aeroportos - @type number */
let counter = 0;
let counterExecutions = 0;
let dataSetWantedData = [];
// ! O abaixo seria um loop com o "Overhead"/"Sem Abstração"
while (counterExecutions <= 10) {
  while (dataSetLenght > counter) {
    /** ## Pegando os dados...
     * Pegamos o Objeto Aeroporto de dentro de nosso Vetor "Aeroportos" -
     * @type json*/
    const airPort = dataSet[counter];
    /** Pegando os dados "Desejados..." */
    dataSetWantedData[counter] = {
      name: airPort.Airport.Name,
      code: airPort.Airport.Name,
      totalFlights: airPort.Statistics.Flights.Total,
    };
    counter++;
  }
  counterExecutions++;
}
console.timeEnd("js-sem-abstração");

// ! O abaixo seria com  "OverHead/Abstração" (Inicaremos o "Timer")
console.time("js-com-abstração");
Array.from(Array(10).keys()).forEach(() => {
  dataSetWantedData = dataSet.map((airPort) => {
    return {
      name: airPort.Airport.Name,
      code: airPort.Airport.Name,
      totalFlights: airPort.Statistics.Flights.Total,
    };
  });
});

console.timeEnd("js-com-abstração");
