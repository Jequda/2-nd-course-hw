function seasonsGame() {
    let  monthNumber = Number (prompt("Введите номер месяца"));
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            alert("Это зима");
            break;
        case 3:
        case 4:
        case 5:
            alert("Это весна");
            break;
        case 6:
        case 7:
        case 8:
            alert("Это лето");
            break;
        case 9:
        case 10:
        case 11:
            alert("Это осень");
            break;
        default:
            alert("Такого месяца нет");
            break;
    }
}