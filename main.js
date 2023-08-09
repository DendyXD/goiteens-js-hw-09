// Завдання 1

const result1 = document.querySelector("#result1");

let numArr1 = [1, 2, 3];

numArr1[1] = 10;

result1.textContent = numArr1;

// Завдання 2

const result2 = document.querySelector("#result2");

let stringArr1 = ["a", "b", "c"];

stringArr1[3] = "d";

result2.textContent = stringArr1;

// Завдання 3

const result3 = document.querySelector("#result3");

let summa = 0;

for (const number of numArr1) {
    summa += number;
}

result3.textContent = summa;


// Завдання 4

const result4 = document.querySelector("#result4");

const numArr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < numArr2.length; i += 1) {
    result4.textContent += numArr2[i] + " ";
}

// Завдання 5

const result5 = document.querySelector("#result5");

const stringArr2 = ["a", "element", "coffee", "arrays", "book"];

for (let i = 0; i < stringArr2.length; i += 1) {
    if (stringArr2[i].length > 5) {
        result5.textContent += stringArr2[i] + " ";
    }
}

// Завдання 6

const result6 = document.querySelector("#result6");

const numArr3 = [1, 6, 3, 9, 19, 99, 5, 44, 38, 0];

let n = 0;

for (let num of numArr3) {
    if (n < num) {
        n = num;
    }

    result6.textContent = n + " ";
}

// Завдання 7

const result7 = document.querySelector("#result7");

for (let num of numArr3) {
    if (num % 2 === 1) {
        continue
    } else {
        result7.textContent += num + " ";
    }
}