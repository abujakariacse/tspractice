// function in typescript

// Normal function
// Arrow function

function add(number1: number, number2: number): number {
  return number1 + number2;
}

const addArr = (num1: number, num2: number): number => num1 + num2;

// object -> function = method

const poorUser = {
  name: "Abu Jakaria",
  balance: 0,
  addBalance(newBalance: number): number {
    return this.balance + newBalance;
  },
};

// higher order function

const numbers: number[] = [4, 6, 7];
const newNumebrs: number[] = numbers.map(
  (element: number): number => element * element
);
