function case1() {

    const people = [
        { name: 'Глеб', age: 29 },
        { name: 'Анна', age: 17 },
        { name: 'Олег', age: 7 },
        { name: 'Оксана', age: 47 }
    ];

    people.sort(function (a, b) {
        if (a.age > b.age) {
            return 1;
        }
        if (a.age < b.age) {
            return -1;
        }
        return 0;
    });

    console.log(people.sort());
}

function case2() {

    function isPositive(number) {
        return number > 0;
    }

    function isMale(user) {
        if (user.gender === 'male') {
            return 1;
        }
        return 0;
    }

    function filter(arr, callBack) {

        const output = [];

        for (let i = 0; i < arr.length; i++) {
            if (callBack(arr[i])) {
                output.push(arr[i]);
            }
        }

        return output;
    }

    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

    const people = [
        { name: 'Глеб', gender: 'male' },
        { name: 'Анна', gender: 'female' },
        { name: 'Олег', gender: 'male' },
        { name: 'Оксана', gender: 'female' }
    ];

    console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
}

function case3() {

    const timer = (deadline) => {
        console.log(new Date());
        const interval = setInterval(() => {
            console.log(new Date());
        }, 3000);

        setTimeout(() => {

            clearInterval(interval);
            console.log(`${deadline} секунд прошло`)
        }, (deadline - 1) * 1000)
    };

    timer(30);
}

function case4() {

    function delayForSecond(callback) {
        setTimeout(() => {
            callback();
        }, 1000)
    }

    delayForSecond(function () {
        console.log('Привет, Глеб!');
    })
}

function case5() {
    // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
    // а затем вызывает переданный колбэк
    function delayForSecond(cb) {
        setTimeout(() => {
            console.log('Прошла одна секунда');
            if (cb) { cb(); }

        }, 1000)
    }

    // Функция sayHi выводит в консоль приветствие для указанного имени
    function sayHi(name) {
        console.log(`Привет, ${name}!`);
    }


    // Код выше менять нельзя

    // Нужно изменить код ниже:
    delayForSecond(() => sayHi('Глеб'));
}
