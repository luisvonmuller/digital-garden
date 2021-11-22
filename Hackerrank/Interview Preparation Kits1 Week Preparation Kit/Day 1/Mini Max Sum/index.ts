/** Set-up terminal env like */
process.stdin.resume();
process.stdin.setEncoding('utf-8');

/* Global Variables */
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

/** Listen For Data beeing placed on the terminal */
process.stdin.on('data', function (inputStdin: string): void {
  inputString += inputStdin;
});

/* After adding 2 lines you'd like to type: CTRL+D to Fire "EOF" */
process.stdin.on('end', function (): void {
  inputLines = inputString.split('\n');
  inputString = '';

  main();
});

/** Read Lines as it goes */
const readLine = (): string => {
  return inputLines[currentLine++];
}

/**------------------------------------------
 *  TODO: QUESTION CODE GOES BELOW HERE (☞ﾟヮﾟ)☞
 * ------------------------------------------ */
/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const miniMaxSum = (arr: number[]): void => {
  /* Ordeno de maneira Crescente e somo */
  const sumSmallers: number = arr.sort((a, b) => a - b).slice(0, 4).reduce(sumUp, 0);

  /* Ordeno de maneira Descrescente e somo */
  const sumBiggers: number = arr.sort((a, b) => b - a).slice(0, 4).reduce(sumUp, 0);

  console.log(`${sumSmallers} ${sumBiggers}`);
}

const sumUp = (accumulator: number, num: number): number => {
  return accumulator + num;
}

function main() {
  const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
