// Задание 1
function cube(number) {
    return Math.pow(number, 3);
}

console.log(cube(2) + cube(3));

// Задание 2
function calculateSalary() {
    let input = prompt("Введите число ЗП");
    let number = parseFloat(input);
    
    if (isNaN(number)) {
        console.log("Значение задано неверно");
    } else {
        let salary = number * 0.87;
        console.log(`Размер заработной платы за вычетом налогов равен ${salary}`);
    }
}

calculateSalary();

// Задание 3
function findMaxNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let num3 = parseFloat(prompt("Введите третье число:"));

let max = findMaxNumber(num1, num2, num3);
console.log("Максимальное число: " + max);


// Задание 4
function sum(a, b) {
    return a + b;
}

function difference(a, b) {
    return Math.abs(a - b);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "На ноль делить нельзя";
    }
    return a / b;
}

console.log(sum(2, 6));
console.log(difference(6, 2));
console.log(multiply(2, 6));
console.log(divide(6, 2));
