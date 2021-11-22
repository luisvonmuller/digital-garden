'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString = '';
var inputLines = [];
var currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function () {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function plusMinus(arr) {
}
function main() {
    /** Gets first line -> The array size. */
    var n = parseInt(readLine().trim(), 10);
    /** Gets spaced numbers as integers */
    var arr = readLine().replace(/\s+$/g, '').split(' ').map(function (arrTemp) { return parseInt(arrTemp, 10); });
    plusMinus(arr);
}
main();
