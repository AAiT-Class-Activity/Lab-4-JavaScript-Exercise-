
var birthYear;          //Changing the var age to birth Year

var weight;
var height;

//Some changes 
birthYear = prompt("Enter Your Birth Year");



//age calculator function
function ageCalc(birthYear)
{
    let age = new Date().getFullYear() - birthYear;
    return age;
}
let tempAge = ageCalc(birthYear);
console.log("Age : " + tempAge + " " + "years old");

weight = prompt("Enter Your Weight: ");
height = prompt("Enter Your Height:")


//BMI calculator function
let calcBmi = function(weight, height) 
{
    let bmi1 = weight / Math.pow(2, height);
    return bmi1.toFixed(2);
}
let bmi = calcBmi(weight, height)
console.log("BMI: " + bmi);