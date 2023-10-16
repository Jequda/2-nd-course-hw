let i = 1;
while (i < 3) {
    console.log("Привет");
    i++;
}
for (i = 1; i < 6; i++) {
    console.log(i);
}
i = 7;
do {
    console.log(i);
    i++;
} while (i < 23);
const obj = {
    "Коля": 200,
    "Петя": 300,
    "Вася": 400
}
for (let salary in obj) {
    console.log(`${salary} — зарплата ${obj[salary]} долларов.`);
}
let n = 1000;
let num = 0;
while (n >= 50) {
    n = n / 2;
    num++;
}
console.log(n + " - результат деления 1000");
console.log(num + " - количество итераций деления");
let friday = 5;
for (day = 1; day < 32; day++) {
    if (day === friday) {
        console.log("Сегодня пятница, " + day + "-е число. Необходимо подготовить отчет.");
        friday = friday + 7;
    }
}
