let password = 'пароль';
let userPassword = prompt("Введите пароль").toLowerCase();
switch (userPassword) {
    case password:
        console.log("Пароль введен верно");
        break;
    default: 
        console.log("Пароль введен неправильно");
        break;
}
let c = Number (prompt('Введите любое число'));
(c >= 0 && c <= 10) ? console.log("Верно") : console.log("Неверно");
let d = prompt("Введите любое число 1");
let e = prompt("Введите любое число 2");
if (d > 100 || e > 100) {
    console.log("Верно");
}
    else{
        console.log("Неверно");
    }
let a = '2';
let b = '3';
alert( Number (a) + ( Number (b)));
let  monthNumber = Number (prompt("Введите номер месяца"));
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log("Это зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Это весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Это лето");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Это осень");
        break;
    default:
        console.log("Такого месяца нет");
        break;
}
