const lowerValue = function () {
    let a = prompt("Введите число a");
    let b = prompt("Введите число b");
    if (a > b) {
        console.log(b);
    } else {
        console.log(a);
    }
}
lowerValue();

function parity(n) {
    if (n % 2 == 0) {
        return "Число чётное";
    } else {
        return "Число нечётное";
    }
}
console.log(parity(6));

let square = (n) =>{
    console.log(n ** 2);
}
square(6);

function square2(n) {
    n = n ** 2;
    return (n);
}
console.log(square2(4));

function userAge() {
    let age = prompt("Сколько вам лет?");
    if (age < 0) {
        alert("Вы ввели неправильное значение");
    } else if (12 < age <= 0) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!")
    }
}
userAge();

function isNumber() {
    let a = prompt ("Введите первое число");
    let b = prompt ("Введите второе число");
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    } else {
        return "Одно или оба значения не являются числом";
    }
}
console.log(isNumber());

function squareCheck() {
    let n = prompt("Введите число n");
    if (!isNaN(n)) {
        return `n в кубе равняется ${n**2}`;
    } else {
        return "Переданный параметр не является числом";
    }
}
console.log(squareCheck());

const circle1 = {
    radius: 3,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
}
const circle2 = {
    radius: 4,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
}

function getCircleArea() {
    return Math.PI * (this.radius ** 2);
}

function getCirclePerimeter() {
    return 2 * Math.PI * this.radius;
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
