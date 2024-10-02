"use strict";

let userName = prompt(`What is your name?`);
alert(`Hello ${userName} how are you?`);


let userNumber = prompt(`Insert any three-digit number:`);

let numberOne = userNumber[0];
let numberTwo = userNumber[1];
let numberThree = userNumber[2];

if (numberOne === numberTwo && numberTwo === numberThree){
    console.log("All numbers are the same!")
}else{
    console.log("Numbers are different!")
}
  if(numberOne === numberTwo && numberTwo === numberThree){
      console.log("All numbers are equal again!!!!");
  }
else if (numberOne === numberTwo){
    console.log("Number 1 are equal to number 2");
}else if (numberTwo === numberThree){
    console.log("Number 2 are equal to number 3");
}else if (numberOne === numberThree){
    console.log("Number 1 are equal to number 3");
}




let userBirth = prompt(`What is your date of birth?`);
let userResidence = prompt(`What city do you live in?`);
let userFavouriteSport = prompt(`What is your favourite sport?`);
let userAge = 2024 - Number(userBirth);
if ( userAge !== null && userBirth !== null && userResidence !== null && userFavouriteSport !== null){

    alert(`Your age is ${userAge}`);
    alert(`You live in ${userResidence}`);
    alert(`Your favorite sport is ${userFavouriteSport}`);

}else {
    if (userBirth === null || userBirth === ""){
        alert("Too bad you did not want to insert your date of birth:((")
    }else if (userResidence === null || userResidence === ""){
        alert("Too bad you did not want to insert your place of living:((")
    }else if (userFavouriteSport === null || userFavouriteSport === ""){
        alert("Too bad you did not want to insert your favorite sport:((")
    }
}


// Додаткове дз;

let sport = prompt(`What is your favorite sport?`);

let favoriteSport = {
    box: "Mike Tyson",
    football: "Lionel Messi",
    swimming: "Mike Felps"
}


if (sport !== null && sport !== ""){
    if (favoriteSport[sport.toLowerCase()]){
        alert(`Cool! Want to became a ${favoriteSport[sport.toLowerCase()]}?`);
    }else {
        alert("Sorry we dont have info about this kind of sport((")
    }
}else {
    alert("Too bad u didnt choose any type of sport((")
}

let numOrStr = prompt('input number or string');
console.log(numOrStr)
switch (numOrStr){
    case (numOrStr === null):
        console.log('ви скасували');
        break
    case( numOrStr.trim() === '' ):
        console.log('Empty String');
        break
    case (isNaN( +numOrStr)):
        console.log(' number is Ba_NaN');
        break
    default:
        console.log('OK!');

}


