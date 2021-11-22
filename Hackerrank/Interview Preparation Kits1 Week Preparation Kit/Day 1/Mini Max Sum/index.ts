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
  const smallerNumbers: number[] = getSmallerNumbers(arr);
  const biggerNumbers: number[] = getBiggerNumbers(arr);
  console.log(`${smallerNumbers}  ${biggerNumbers}`);
}

/* ## Get Smaller ones */
const getSmallerNumbers = (arr: number[]): number[] => {
  const smallerNumbersArray: number[] = [];
  return arr.filter((number) => {
    if (smallerNumbersArray.length < 4) {
      smallerNumbersArray.push(number);
      return checkSmaller(smallerNumbersArray, number);
    }
  });
}

const checkSmaller = (arr: number[], num: number): number => {
  return arr.filter(someNum => someNum > num)[0]
}

/** ## Get Notorius Big ones */
const getBiggerNumbers = (arr: number[]): number[] => {
  const biggerNumbersArray: number[] = [];
  return arr.filter((number) => {
    if (getBiggerNumbers.length < 4) {
      biggerNumbersArray.push(number);
      return checkBigger(biggerNumbersArray, number);
    }
  });
}

const checkBigger = (arr: number[], num: number): number => {
  return arr.filter(someNum => someNum > num)[0]
}

function main() {

  const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
