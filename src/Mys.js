"use strict";

const arrayUsers = [2, 3, 4, 7, "Anton", 12, 35, "Pavel"];

function arraySum(arrayUsers) {
  let arraySum = 0;
  let arrayAverage = 0;
  for (let i = 0; i < arrayUsers.length; i++) {
    if (typeof arrayUsers[i] === "number") {
      arraySum += arrayUsers[i];
    } else {
      continue;
    }
    arrayAverage = arraySum / i;
  }
  console.log(arrayAverage);
}

arraySum(arrayUsers);

const array = [1, 3, 4, 6, 2, 5, 7];

function removeItem(item, itemNumber) {
  let arrayDelete = array.splice(item, itemNumber);
  console.log(array);
}

removeItem(3, 4);

const arrayUser = [
  0,
  122,
  522,
  "true",
  undefined,
  null,
  22,
  true,
  62,
  77,
  "Antosya",
  55,
  false,
];

function arrayChange(arrayElement) {
  let newArray = arrayUser.filter((item) => item === arrayElement);
  console.log(newArray);
}

arrayChange("522");

// Этот метод я использовал чтобы удалить не по номеру индекса а по значению

let inputWord = prompt(`Insert the word!`);
inputWord = inputWord.toLowerCase();
let changeLetter = prompt(`Change its letter!`);

function deleteLetter(word, letterToRemove) {
  let result = word.split(letterToRemove).join("");
  return result;
}

let resultFinal = deleteLetter(inputWord, changeLetter);
console.log(resultFinal);
//Или можно к в методе ниже;

let inputWords = prompt(`Insert the word!`);
let changeLetters = prompt(`Change its letter!`);

function removeLetter(word, letterToRemove) {
  let result1 = word.replace(letterToRemove, "");
  console.log(result1);
}

removeLetter(inputWords, changeLetters);

/*

function CreateObject(name, age, hobbies, occupation) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
  this.occupation = occupation;
}

const user1 = new CreateObject("Ivan", 22, "Football", "IT");
const user2 = new CreateObject("Oleg", 35, "Gym", "Coach");
const user3 = new CreateObject("Danyl", 24, "Gym", "IT");
const user4 = new CreateObject("Dmytro", 29, "Computer games", "None");

console.log(user1, user2, user3, user4);

const userNew = JSON.parse(JSON.stringify(user1));
console.log(userNew);
const userNew1 = JSON.parse(JSON.stringify(user2));
console.log(userNew1);
//Добавляем
const array = [2, 4, 7, 1, 6, 3, 9, 0];
array.splice(2, 0, "Коля");
console.log(array);

// Замена
const array1 = [2, 4, 7, 1, 6, 3, 9, 0];
array1.splice(2, 1, "Кролик");
console.log(array1);
//Удаляем с конца
const array2 = [2, 4, 7, 1, 6, 3, 9, 0];
array2.splice(-5, 5);
console.log(array2);
//Copy  array without link
const array3 = [2, 4, 7, 0];
let arrayCopy = array3.slice();
console.log(arrayCopy);
arrayCopy.push(5);
console.log(array3);

// Тоже самое но ещё может добавить элемент
const array4 = [2, 4, 7, 0];
let arrayCopy1 = array4.concat(6);
console.log(arrayCopy1);
console.log(array4);
console.log(arrayCopy1.indexOf(4));
// ищю элемент 4 поиска начинается с 0
console.log(arrayCopy1.indexOf(4, 0));
console.log(arrayCopy1.includes(2));
// ищю элемент 7 поиска начинается с 0
console.log(arrayCopy1.includes(7, 0));

const myArray = [
  { name: "Ivan", age: 32, hobbies: "Футбол" },
  { name: "Sasha", age: 35, hobbies: "Теннис" },
  { name: "Nikita", age: 25, hobbies: "Футбол" },
  { name: "Kiril", age: 27, hobbies: "Теннис" },
  { name: "Dmytro", age: 45, hobbies: "Бейсбол" },
  { name: "Vyacheslav", age: 21, hobbies: "Бейсбол" },
];

let method = myArray.findIndex(function (item, index, array) {
  if (item.age >= 21) {
    return item.age;
  }
});
console.log(method);

let arrTwo = [2, 6, 122, 22, 33];
console.log(arrTwo.sort());
console.log(arrTwo.sort((a, b) => a - b));




let number = 20;
for (; number <= 30; number = number + 0.5) {
  console.log(number);
}

let dollar = 10;
while (dollar <= 100) {
  let grivna = dollar * 26;
  console.log(grivna);
  dollar += 10;
}

let numberInsert = +prompt(`Insert the number:`);

for (let i = 1; i <= 100; i++) {
  if (i * i <= numberInsert) {
    console.log(i);
  } else {
    break;
    alert(`Your number not exceeding the 100!`);
  }
}

let num = prompt(`Insert the number to check!`);

function checkNumber() {
  if (num < 2 || num === null) {
    return alert(`Number is to small or you did not insert the number!!!`);
  }

  for (let i = 3; i < num; i++) {
    if (num % i === 0) {
      alert(`${num} — not a simple number!`);
      return;
    }
  }
  alert(`${num} — simple число!`);
}

checkNumber();
*/
/*
let array = [];
for (let number = 2; number <= 10; number++) {
  let innerArray = [];
  for (let num = 1; num <= 10; num++) {
    let result = number * num;
    innerArray.push(result);
  }
  array.push(innerArray);
}
console.log(array);

let userName = prompt(`What is your name?`);
alert(`Hello ${userName} how are you?`);

let userNumber = prompt(`Insert any three-digit number:`);

let numberOne = userNumber[0];
let numberTwo = userNumber[1];
let numberThree = userNumber[2];

if (numberOne === numberTwo && numberTwo === numberThree) {
  console.log("All numbers are the same!");
} else {
  console.log("Numbers are different!");
}
if (numberOne === numberTwo && numberTwo === numberThree) {
  console.log("All numbers are equal again!!!!");
} else if (numberOne === numberTwo) {
  console.log("Number 1 are equal to number 2");
} else if (numberTwo === numberThree) {
  console.log("Number 2 are equal to number 3");
} else if (numberOne === numberThree) {
  console.log("Number 1 are equal to number 3");
}

let userBirth = prompt(`What is your date of birth?`);
let userResidence = prompt(`What city do you live in?`);
let userFavouriteSport = prompt(`What is your favourite sport?`);
let userAge = 2024 - Number(userBirth);
if (
  userAge !== null &&
  userAge <= 100 &&
  userAge > 18 &&
  userBirth !== null &&
  userBirth !== "" &&
  userResidence !== null &&
  userResidence !== "" &&
  userFavouriteSport !== null &&
  userFavouriteSport !== ""
) {
  alert(`Your age is ${userAge}`);
  alert(`You live in ${userResidence}`);
  alert(`Your favorite sport is ${userFavouriteSport}`);
} else {
  if (userBirth === null || userBirth === "") {
    alert("Too bad you did not want to insert your date of birth:((");
  } else if (userResidence === null || userResidence === "") {
    alert("Too bad you did not want to insert your place of living:((");
  } else if (userFavouriteSport === null || userFavouriteSport === "") {
    alert("Too bad you did not want to insert your favorite sport:((");
  }
}

// Додаткове дз;

let sport = prompt(`What is your favorite sport?`);

let favoriteSport = {
  box: "Mike Tyson",
  football: "Lionel Messi",
  swimming: "Mike Felps",
};

if (sport !== null && sport !== "") {
  if (favoriteSport[sport.toLowerCase()]) {
    alert(`Cool! Want to became a ${favoriteSport[sport.toLowerCase()]}?`);
  } else {
    alert("Sorry we dont have info about this kind of sport((");
  }
} else {
  alert("Too bad u didnt choose any type of sport((");
}

let numOrStr = prompt("input number or string");
console.log(numOrStr);
switch (numOrStr) {
  case numOrStr === null:
    console.log("ви скасували");
    break;
  case numOrStr.trim() === "":
    console.log("Empty String");
    break;
  case isNaN(+numOrStr):
    console.log(" number is Ba_NaN");
    break;
  default:
    console.log("OK!");
}

let sport1 = "футбол";
let champion1 = "Ліонель Мессі";

let sport2 = "теніс";

let champion2 = "Роджер Федерер";

let sport3 = "баскетбол";

let champion3 = "Леброн Джеймс";

// Запрашиваем у пользователя, какой вид спорта ему нравится
let userSport = prompt(
  "Який твій улюблений вид спорту? (футбол, теніс, баскетбол)",
);
userSport = userSport.toLowerCase();

// Проверяем, какой вид спорта ввел пользователь и выводим сообщение
if (userSport === sport1) {
  alert(`Круто! Хочеш стати ${champion1}?`);
} else if (userSport === sport2) {
  alert(`Круто! Хочеш стати ${champion2}?`);
} else if (userSport === sport3) {
  alert(`Круто! Хочеш стати ${champion3}?`);
} else {
  alert("На жаль, цей вид спорту не в списку.");
}

let a = 25;
let b = Math.floor(a / 10); // Перша цифра
let c = a % 10; // Друга цифра

if (b > c) {
  console.log("B");
} else if (c > b) {
  console.log("C");
} else {
  console.log("Цифри однакові");
}

let number = 24;

if (number % 2 === 0) {
  console.log(23);
} else {
  console.log(25);
}

let getNumber = 25;
let getNum = Math.floor(getNumber / 10);
let getNum1 = getNumber % 10;
if (getNum1 % 2 === 0) {
  console.log("Парное");
} else {
  console.log("Не парное");
}

function getRange(v) {
  if (v <= 500 && v >= 0) {
    console.log("Входит");
  } else {
    console.log("Не входит");
  }
}

getRange(0);

let n = 0;
do {
  console.log(n);
  n++;
} while (n < 0);
console.log(n);

let object1 = {
  name: "Danua",
  age: 22,
  hobbies: {
    games: "GTA 5",
    gym: "Powerlifting",
  },
  measurements: {
    chest: "118 cm",
    shoulders: "140 cm",
    bicep: "44 cm",
  },
};

for (let key in object1) {
  console.log(key);
}
for (let key in object1.measurements) {
  console.log(key);
  console.log(object1.measurements[key]);
}

function constructor(name, age, weightt, heightt, hobbies) {
  this.name = name;
  this.age = age;
  this.weightt = weightt;
  this.heightt = heightt;
  this.hobbies = {
    sport: hobbies.sport,
    music: hobbies.music,
    reading: hobbies.reading,
  };
}

const person = new constructor("Danil", 22, 94, 179, {
  sport: "Football",
  music: "Rock",
  reading: "Sci-fi",
});
console.log(person);
let num2 = 1.005 + Number.EPSILON;
let num1 = Math.round(num2 * 100) / 100;

console.log(num1);

let value = 58 + "Про";
if (isNaN(value)) {
  console.log("Это null!!");
}

let array = [10, 58, 39, -150, 0];
let checkArray = [...array];
console.log(Math.max[checkArray]);

let text = `Hello my name
\t "is Danylo"
\t\t and  name your is?`;
let text1 = text.includes("ello", 3);
console.log(text1);

let userName = prompt("What is your name?");
let userName1 = userName.toLowerCase();

let userNames = {
  ivan: 22,
  volodya: 23,
  danil: 30,
  vasya: 46,
};

if (userNames[userName1]) {
  alert(`You are ${userNames[userName1]} years old.`);
} else {
  alert("User not found.");
}

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Значення в координатах (${i},${j})`, "");

    if (!input) break outer;
  }
}
alert("Готово!");

let multiple = 1;
for (let i = 1; i <= 4; i++) {
  multiple = multiple * i;
}
console.log(multiple);
*/
