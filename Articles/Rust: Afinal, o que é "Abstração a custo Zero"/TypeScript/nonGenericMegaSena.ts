/*!!!!!!!! _toBetIn must be an Enumartion or kinda a type */

type MegaSenaBet = {
  realBetValue: number[],
  betBy: String
}

function nonGenericMegaSena(targetResult: number[], bets: MegaSenaBet[]): void /* Winners<B, T> */ {
  const amountOfBets: number = bets.length;
  console.log(`<Função Específica Mega-Sena> Started Processing: ${amountOfBets} bets...`)
  /** Proccess right Bets */
  let winners = bets.filter((bet) => {
    return bet.realBetValue == targetResult;
  })
  console.log(`<Função Específica Mega-Sena> Fineshed Processing: ${amountOfBets}...bets Here goes winners.`)
  console.log(winners);
}


export { nonGenericMegaSena, MegaSenaBet };
