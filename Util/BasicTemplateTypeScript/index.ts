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

  // TODO: REMOVE HERE ------ main();
});

/** Read Lines as it goes */
const readLine = (): string => {
  return inputLines[currentLine++];
}

/**------------------------------------------
 *  TODO: QUESTION CODE GOES BELOW HERE (☞ﾟヮﾟ)☞
 * ------------------------------------------ */