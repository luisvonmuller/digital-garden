
import { WriteStream, createWriteStream } from "fs";

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
 *  TODO: QUESTION CODE GOES BELOW HERE 
 * ! SHIT DONT WORK? WHY?! I DONO
 * ------------------------------------------ */

const timeConversion = (timeOnAmericanFormat: string, ws: WriteStream): string => {
  ws.write(`So as you asked, @luisvonmuller, heres go the time: ${timeOnAmericanFormat}`);
  // Write your code here
  const [time, modifier] = timeOnAmericanFormat.slice(0, 9);
  ws.write(`So as you asked, @luisvonmuller, heres go the time: ${time}`);
  ws.write(`So as you asked, @luisvonmuller, heres go the modifier: ${time}`);

  let [hours, minutes, seconds]: unknown[] = time.split(':');

  if (hours == '12') {
    hours = '00' as string;
  }

  if (modifier == 'PM') {
    hours = (parseInt(hours as string, 10) + 12) as unknown as string;
  }

  return `${hours}:${minutes}:${seconds}`;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH'] ?? "./");
  const s: string = readLine();
  const result: string = timeConversion(s, ws);

  ws.write(result + '\n');
  ws.end();
}
