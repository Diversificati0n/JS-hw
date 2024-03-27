// Задание 1
let num1 = parseInt(prompt("Введите число num1:"));
let num2 = parseInt(prompt("Введите число num2:"));

if (num1 <= 1 && num2 >= 3) {
    console.log("Переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.");
} else {
    console.log("Условие не выполнено.");
}

// Задание 2
let test = true;
console.log(test === true ? '+++' : '---');

// Задание 3
let day = parseInt(prompt("Введите число от 1 до 31:"));

if (day >= 1 && day <= 10) {
    console.log("Число " + day + " попадает в первую декаду месяца.");
} else if (day > 10 && day <= 20) {
    console.log("Число " + day + " попадает во вторую декаду месяца.");
} else if (day > 20 && day <= 31) {
    console.log("Число " + day + " попадает в третью декаду месяца.");
} else {
    console.log("Некорректное число.");
}

// Задание 4
let number = parseInt(prompt("Введите число:"));
let hundreds = Math.floor(number / 100);
let tens = Math.floor((number % 100) / 10);
let units = number % 10;

console.log("В числе " + number + " количество сотен: " + hundreds + ", десятков: " + tens + ", единиц: " + units);
