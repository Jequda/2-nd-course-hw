const str = 'нижний'.toUpperCase();
function searchStart(array, str) {
    const arr = [];
    array.forEach(element => {
        if (element.toLowerCase().startsWith(str.toLowerCase())) {
            arr.push(element);
        }
    });
    console.log(arr);
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], ('ко')); 
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], ('гру'));
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], ('Кино')); 

function roundNumber(num) {
    console.log(Math.floor(num));
    console.log(Math.ceil(num));
    console.log(Math.round(num));
}
roundNumber(32.58884);

function case4(arr) {
    console.log(Math.min(...arr));
    console.log(Math.max(...arr));
}
case4([52, 53, 49, 77, 21, 32]);

function case5() {
        console.log(Math.round(Math.random() * 9) + 1);
}
case5();

function getRandomArrNumbers(num) {
    arr = [];
    count = num / 2;
    for (let i = 0; i < Math.floor(count); i++) {
        arr.push(Math.round(Math.random() * num));
    }
    console.log(arr);
}
getRandomArrNumbers(7); 
getRandomArrNumbers(12); 

function case7(a, b) {
    console.log(Math.round(Math.random() * (a - b) + b ));
}
case7(1, 11);

function case8() {
    console.log(new Date());
}
case8();

function case9() {
    const currentDate = new Date();
    currentDate.setDate(73);
    console.log(currentDate);
}
case9();

function case10(userDate) {
    const date = new Date(userDate);
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    console.log(`Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}`);
    console.log(`Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
case10("15:30:45 3/27/2015");