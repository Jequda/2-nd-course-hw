let arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
} 

arr = [1, 5, 4, 10, 0, 3];
console.log(arr.indexOf(4));

arr = [1, 3, 5, 10, 20];
console.log(arr.join(' '));

arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = []; 
    for (let j = 0; j < 3; j++) {
        arr[i][j] = [1];
    }
}
console.log(arr);

arr = [1, 1, 1];
arr.push(2,2,2);
console.log(arr);

arr = [9, 8, 7, 'a', 6, 5];
console.log(arr.sort().filter((el) => el > 0 ));

arr = [9, 8, 7, 6, 5];
let userNumber = Number (prompt("Назовите число"));
for (let i = 0; i < arr.length; i++) {
    if (arr.includes(userNumber)) {
        alert("Угадал");
        break;
    } else {
        alert ("Не угадал");
        break;
    }
}

const str = 'abcdef';
arr = str.split('').reverse().join('');
console.log(`'${arr}'`);

arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random()* 9) + 1);
}
let n = 0;
for (let i = 0; i < arr.length; i++) {
    n = arr[i] + arr[i+1];
    if (isNaN(n)) {
        n = arr[i];
    }
    console.log(n);
}

function eleven(array) {
    console.log(array.map((el) => el * el));
}
eleven([2, 4, 6, 8])


function twelve(array) {
    console.log(array.map(el => el.length));
}
twelve(['слово', '', 'слог', 'длинное предложение', 'буква', 'страшная фраза', 'фраза пострашнее, но не слишком']);

function filterPositive(array) {
    console.log(array.filter((el) => el < 0 ))
}
  
filterPositive([-1, 0, 5, -10, 56]); 
filterPositive([-25, 25, 0, -1000, -2]); 

function fourteen() {
    arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(Math.round(Math.random()* 10));
    }
    console.log(arr);
    console.log(arr.filter((el) => el % 2 === 0));
}
fourteen();

function fifteen() {
    arr = [];
    let a = 0;
    for (let i = 0; i < 6; i++) {
        arr.push(Math.round(Math.random()* 9) + 1);
        a += arr[i] / 6;
    }
    console.log(arr);
    console.log(a);
}
fifteen();