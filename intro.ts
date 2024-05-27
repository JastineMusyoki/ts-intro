//QUESTION ONE
for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) {
    output += "Fizz";
  }
  if (i % 5 === 0) {
    output += "Buzz";
  }
  console.log(output || i);
}

//QUESTION TWO
function generateFibonacciUpTo100(): number[] {
  let fibSequence: number[] = [0, 1];
  let nextFib: number = fibSequence[0] + fibSequence[1];

  while (nextFib <= 100) {
    fibSequence.push(nextFib);
    nextFib =
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
  }

  return fibSequence;
}

console.log(generateFibonacciUpTo100());

//QUESTION THREE
function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(6)); // false

//QUESTION FOUR
import * as promptSync from "prompt-sync";

const prompt = promptSync();

function capitalizeWords(input: string): string {
  return input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const userInput: string = prompt("Enter a string to capitalize: ");
const capitalizedString: string = capitalizeWords(userInput);

console.log(capitalizedString);

//QUESTION FIVE
function reverseDigits(n: number): number {
  const isNegative = n < 0;
  const reversedString = Math.abs(n).toString().split("").reverse().join("");
  const reversedNumber = parseInt(reversedString, 10);
  return isNegative ? -reversedNumber : reversedNumber;
}

console.log(reverseDigits(500));

//QUESTION SIX
function countVowels(sentence: string): number {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (const char of sentence) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World"));
