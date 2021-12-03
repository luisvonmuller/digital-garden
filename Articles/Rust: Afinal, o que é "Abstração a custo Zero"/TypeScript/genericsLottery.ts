import { BetterBets, Winners } from './types';


/*!!!!!!!! _toBetIn must be an Enumartion or kinda a type */
function genericsLottery<T, A, B>(_toBetIn: T, targetResult: A, bets: BetterBets<T>[]): void /* Winners<B, T> */ {
  /* We do Remove Invalid Bets by using a filter into BettersBet (Recreates a DataSet with only valid bets) */
  let realBets: unknown = bets.map((bet) => {
    try {
      return bet as unknown as T;
    } catch (e) {
      console.log("Heres a non mega-sena value - Which shouldn't happen because TypeSafety.");
      console.warn(e);
    }
  });
  // console.log(realBets);


  /** Care for real bets */
  // return bets.reduce((bet) => {
  //   let betToCareAbout = bet.realBetValue as unknown as A;
  //   return betToCareAbout == targetResult;
  // })
}

export default genericsLottery;