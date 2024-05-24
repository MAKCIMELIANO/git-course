const numders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// вывести две переменные которые будут содержать сумму четных и нечетных чисел в массиве

let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < numders.length; i++) {
  if (numders[i] % 2 === 0) {
    sumEven += numders[i];
  } else {
    sumOdd += numders[i];
  }
}
console.log(sumEven, sumOdd);

// вычесть 10% из каждой суммы

sumEven = sumEven * 0.12;
sumOdd = sumOdd * 0.12;
console.log(sumEven, sumOdd);

// вывести сумму четных и нечетных чисел в массиве

let sum = 0; // сумма четных чисел
let sum1 = 0; // сумма нечетных чисел
for (let i = 0; i < numders.length; i++) {
  if (numders[i] % 2 === 0) {
    sum += numders[i];
  } else {
    sum1 += numders[i];
  }
}
console.log(sum, sum1);
