//
// Iteration 2 | Functions
//

//2.1
function calcMultiplication(a: number, b: number): number | string {
  if (typeof a !== "number" || typeof b !== "number")
    return "Please provide two numbers";
  return a * b;
}

//2.2
function isEven(num1: number): boolean {
  return num1 % 2 === 0 ? true : false;
}

console.log(isEven(2));
console.log(isEven(3));

//2.3
function calcArrayAverage(arr: number[]): string | number {
  if (!arr.length) return "sorry, no numbers in array";
  return arr.reduce((a: number, c: number) => a + c, 0) / arr.length;
}
console.log(calcArrayAverage([1, 2, 3]));
console.log(calcArrayAverage([]));
