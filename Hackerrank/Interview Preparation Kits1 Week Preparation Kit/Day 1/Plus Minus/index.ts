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

/* ## plusMinus
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const plusMinus = (arr: number[]): void => {
  /** How many numbers are we getting ? */
  const numberArrayLength: number = arr.length;

  /* Lets count up the numbers as it goes. */
  const totalPositiveNumbers: number = arr.filter((number) => number > 0).length;
  const totalNegativeNumbers: number = arr.filter((number) => number > 0).length;
  const totalZeroNumbers: number = arr.filter((number) => number > 0).length;

  console.log(plusMinusHelper(totalPositiveNumbers, numberArrayLength));  /* Display the Proportion for Positive numbers */
  console.log(plusMinusHelper(totalNegativeNumbers, numberArrayLength)); /* Display the Proportion for Negative numbers */
  console.log(plusMinusHelper(totalZeroNumbers, numberArrayLength)); /* Display the Proportion for Zero numbers */
}

/** ## Format Helper to get up to 6 decimal places 
 * * We will not check if the divvy is actually bigger then the divider itself; (Not on the question Scope)
*/
const plusMinusHelper = (divvy: number, divider: number): number => {
  
}

function main() {
  /** Gets first line -> The array size. */
  const n: number = parseInt(readLine().trim(), 10);
  /** Gets spaced numbers as integers */
  const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}