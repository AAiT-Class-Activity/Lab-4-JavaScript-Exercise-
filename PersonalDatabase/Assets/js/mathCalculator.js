let setOfNumbers = new Array();
var choice;
// accept multiple numbers of n length from the user
function multipleNumberReceiver() {
    let numberLength = prompt("How many numbers: ");
    for (let i = 0; i < parseInt(numberLength); i++){
        setOfNumbers[i] = prompt("Your Number " + (i + 1));
    }
}
// Addition function
function addition(setOfNumbers) {
    let sum = 0;
    setOfNumbers.forEach(function(member, index){
        sum = sum + parseInt(member);
    });
    console.log("The sum of " + setOfNumbers + " is " + sum);
}
// Subtraction function
function subtraction(setOfNumbers) {
    let reminder = setOfNumbers[0];
    for(let i = 1; i < setOfNumbers.length; i++){
        reminder = reminder - parseInt(setOfNumbers[i]);
    }
    console.log("The Reminder of " + setOfNumbers + " is " + reminder);
    console.log("Subtraction done from left to right");
}
// Multiplication function
function multiplication(setOfNumbers) {
    let product = 1;
    setOfNumbers.forEach(function(member, index){
        product = product * parseInt(member);
    });
    console.log("The product of " + setOfNumbers + " is " + product);
}
// Division function
function division(setOfNumbers) {
    let quotient = setOfNumbers[0];
    for (let i = 1; i < setOfNumbers.length; i++){
        if (setOfNumbers[i] == 0) {
            console.log("Invalid Form: Rational numbers can't be divided by 0");
            return;
        } else {
            quotient = quotient / parseInt(setOfNumbers[i]);
        }
    }
    console.log("The quotient of " + setOfNumbers + " is " + quotient);
    console.log("Division done from left to right");
}
(function(){
    // ask user what type of calculation to run
    choice = prompt("Choose 1 for Addition, 2 for Subtraction, 3 for Multiplication, 4 for Division");

    // Run the desired calculation

    // Addition calculation
    if(choice == "1"){
        console.log("Addition")
        multipleNumberReceiver();
        addition(multipleNumberReceiver);    
    }
    // Subtraction calculation
    else if(choice == "2"){
        console.log("Subtraction");
        multipleNumberReceiver();
        subtraction(setOfNumbers)
    }
    // Multiplication calculation
    else if(choice == "3"){
        console.log("Multiplication");
        multipleNumberReceiver();
        multiplication(setOfNumbers);
    }
    // Division calculation
    else if(choice == "4"){
        console.log("Division");
        multipleNumberReceiver();
        division(setOfNumbers);   
    }
    // Wrong choice notifier
    else{
        console.log("Wrong Choice!!");
    }
})();