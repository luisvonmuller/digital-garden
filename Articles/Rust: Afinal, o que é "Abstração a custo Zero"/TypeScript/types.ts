type BetterBets<T> = {
  realBetValue: T,
  betBy: String,
};

type Winners<B, T> = BetterBets<B, T>[];

export { Winners, BetterBets };