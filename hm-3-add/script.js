let a = prompt("Пожалуйста, введите любое число»");
if ((!isNaN(a)) && ((a % 2 == 0) === true)) {
    alert('Число четное');
} else if ((!isNaN(a)) && ((a % 2 == 0) === false)) {
    alert('Число нечетное');
} else {
    alert("Это не число");
}
let promptOS = prompt("Укажите вашу ОС").toLowerCase();
let clientOS = 3;
switch (promptOS) {
    case "андроид":
    case "android":
        clientOS = 1;
        break;
    case "ios":
    case "айос":
        clientOS = 0;
        break;
    default:
        console.log("Неизвестная ОС");
}
if (clientOS === 1) {
    console.log("Установите версию приложения для Android по ссылке");
}  else if (clientOS === 0) {
    console.log("Установите версию приложения для iOS по ссылке")
}
let clientDeviceYear = prompt("Укажите год выпуска вашего телефона");
if (isNaN(clientDeviceYear)) {
    console.log("Такого года нет");
}
if ((clientDeviceYear < 2015) && (clientOS === 1)) {
    console.log("Установите облегченную версию приложения для Android по ссылке");
} else if ((clientDeviceYear < 2015) && (clientOS === 0)) {
    console.log("Установите облегченную версию приложения для iOS по ссылке");
} 
