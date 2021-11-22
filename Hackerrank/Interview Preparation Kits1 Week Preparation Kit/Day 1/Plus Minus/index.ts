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

function plusMinus(arr: number[]): void {

}

function main() {
  /** Gets first line -> The array size. */
  const n: number = parseInt(readLine().trim(), 10);
  /** Gets spaced numbers as integers */
  const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}