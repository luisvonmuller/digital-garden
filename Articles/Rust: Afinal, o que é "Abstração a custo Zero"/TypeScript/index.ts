/** DataSet que vamos trabalhar em cima... */
import genericsLottery from './genericsLottery';
import { nonGenericMegaSena, MegaSenaBet } from './nonGenericMegaSena';
import { BetterBets, Winners } from './types';
/** # Meta ==============================================
  * * Encontrar um código didático o suficiente para explicar de maneira acessível o que seria uma abstração que seja compatível em PHP/TypeScript/Java e aí comparar com Rust
  * ======================================================
  * Desenvolvimento da ideia...
  *
  *.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-..--.-.-.-.-.-.-.-.-.-.
  * Funções para usar mais tarde...
  * console.time("js-sem-abstração");
  * console.timeEnd("js-com-abstração");
**/

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const numerosPosssiveisMegaSena: number[] = Array.from(Array(61).keys()).map((a, index) => index); // Cria um array de números
const resultadoOficial = [1, 2, 3, 4, 5, 6];
/** Gera 120 apostas aleatórias na Mega-Sena */
const tryOutDataSet: BetterBets<number[]>[] = Array.from(Array(10e6).keys()).map((_) => {
  /* Gera uma aposta aleatória na mega-sena */
  return {
    realBetValue: Array.from(Array(5).keys()).map((_) => getRandomInt(1, 61)),
    betBy: '@luisvonmuller'
  }
});

const megaSenaDataSet: MegaSenaBet[] = [...tryOutDataSet]

console.time("js-com-abstração-generics");
genericsLottery<number[], number[], number[]>(numerosPosssiveisMegaSena, resultadoOficial, tryOutDataSet);
console.timeEnd("js-com-abstração-generics");

// /* Let my computer sleep for a while lol */
// new Promise((a) => setTimeout(a, 1000));
// 
// console.time("js-sem-abstração-específico-para-mega-sena");
// nonGenericMegaSena(resultadoOficial, megaSenaDataSet);
// console.timeEnd("js-sem-abstração-específico-para-mega-sena");


