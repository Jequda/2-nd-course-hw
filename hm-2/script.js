let a = 10;
alert(a);
a = 20;
alert(a);
const iphone = 2007;
alert(iphone + ' - год выпуска первого Iphone');
const creator = "Брендон Айк";
alert(creator + ' - создатель JavaScript');
let first = 10;
let second = 2;
a = first + second;
alert('Сумма 10 и 2 = ' + a);
a = first - second;
alert('Разность 10 и 2 = ' + a);
a = first * second;
alert('Произведение 10 и 2 = ' + a);
a = first / second;
alert('Частное 10 и 2 = ' + a);
let result = 0;
result = 2 ** 5;
alert('2 в 5-ой степени = ' + result);
a = 9;
let b = 2;
result = a % b;
alert('Остаток от деления a на b = ' + result);
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);
let age = prompt("Сколько вам лет?");
alert(age);
const user = {
    name: 'Yaroslav',
    age: 22,
    isAdmin: false,
}
const object = {
    cityOfResidence: 'Moscow',
}
Object.assign(user,object);
console.log(user);
user.age = 23;
console.log(user);
delete user.cityOfResidence;
console.log(user);
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);
let username = prompt("Назовите свое имя");
alert("Привет, " + username + "!");

