var welcome = function (name) {
    console.log('Welcome, ${name}. Have a great day!');
}

//arguments branch
welcome("vera");
welcome("Adrian");
welcome("Aida");
welcome("Jimmy");
welcome("Jommy");

//parameters branch
var addTogether = function (num1, num2) {
    console.log(num1 + num2);
};

addTogether(13, 72);
addTogether(36, -2.88);

//return keyword
var addTogether = function (num1, num2) {
    return num1 + num2;
};

alert(addTogether(36, -2.88));
console.log(addTogether(13, 72));
var lunchForTwo = addTogether(24.56, 18.99);