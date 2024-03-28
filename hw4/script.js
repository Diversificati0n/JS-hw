// Задание 1
console.log("Задание 1:");
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(i + " – это ноль");
    } else if (i % 2 === 0) {
        console.log(i + " – четное число");
    } else {
        console.log(i + " – нечетное число");
    }
}

// Задание 2
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// Задание 3
console.log("\nЗадание 3:");
let randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * 10));
}
console.log("Сгенерированный массив:", randomArray);

let sum = 0;
for (let num of randomArray) {
    sum += num;
}
console.log("Сумма элементов массива:", sum);

let min = Math.min(...randomArray);
console.log("Минимальное число в массиве:", min);

let hasThree = randomArray.includes(3);
console.log("Есть ли в массиве число 3:", hasThree);

// Задание 4
console.log("\nНеобязательное задание:");
for (let i = 1; i <= 20; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "x";
    }
    console.log(row);
}
