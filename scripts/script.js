function seasonsGame() {
    let  monthNumber = Number (prompt("Введите номер месяца"));
    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        alert("Это зима");
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        alert("Это весна");
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        alert("Это лето");
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        alert("Это осень");
    } else {
        alert("Такого месяца нет");
    }
}

function rememberGame() {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);
    alert(arr);

    let quest1 = prompt("Чему равнялся первый элемент массива?");
    let quest2 = prompt("Чему равнялся последний элемент массива?");

        if ((arr[0].toLowerCase().includes(quest1.toLowerCase())) && (arr[6].toLowerCase().includes(quest2.toLowerCase()))) {
            alert("Поздравляю, вы все угадали!");
        } else if ((arr[0].toLowerCase().includes(quest1.toLowerCase())) || (arr[6].toLowerCase().includes(quest2.toLowerCase()))) {
            alert("Вы были близки к победе!");
        } else {
            alert("Извините, вы ответили неверно.");
        }
}
