import { BetterBets, Winners } from './types';


/*!!!!!!!! _toBetIn must be an Enumartion or kinda a type */
function genericsLottery<T, A, B>(_toBetIn: T, targetResult: A, bets: BetterBets<T>[]): void /* Winners<B, T> */ {
  const amountOfBets: number = bets.length;
  console.log(`<Generics Lottery> Started Processing: ${amountOfBets}...`)
  /** Proccess right Bets */
  let winners = bets.filter((bet) => {
    let betToCareAbout = bet.realBetValue as unknown as A;
    return betToCareAbout == targetResult;
  })

  console.log(`<Generics Lottery> Finished Processing: ${amountOfBets}... Here goes winners.`)
  console.log(winners);
}

export default genericsLottery;