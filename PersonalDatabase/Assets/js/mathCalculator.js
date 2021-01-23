let setOfNumbers = new Array();
var choice;

// ask user what type of calculation to run
choice = prompt("Choose 1 for Addition, 2 for Subtraction, 3 for Multiplication, 4 for Division");

// Run the desired calculation

// Addition calculation
if(choice == "1"){
    console.log("Addition")
    multipleNumberReceiver();
    addition(multipleNumberReceiver);

    // Addition function
    function addition(setOfNumbers) {
        let sum = 0;
        setOfNumbers.forEach(function(member, index){
            sum = sum + parseInt(member);
        });
        console.log("The sum of " + setOfNumbers + " is " + sum);
    }
}
// Subtraction calculation
else if(choice == "2"){
    console.log("Subtraction");
    multipleNumberReceiver();
    subtraction(setOfNumbers)

    // Subtraction function
    function subtraction(setOfNumbers) {
        let reminder = setOfNumbers[0];
        for(let i = 1; i < setOfNumbers.length; i++){
            reminder = reminder - parseInt(setOfNumbers[i]);
        }
        console.log("The Reminder of " + setOfNumbers + " is " + reminder);
        console.log("Subtraction done from left to right");
    }
}

// accept multiple numbers of n length from the user
function multipleNNumberReceiver() {
    let numberLength = prompt("How many numbers: ");
    for (let i = 0; i < parseInt(numberLength); i++){
        setOfNumbers[i] = prompt("Your Number " + (i + 1));
    }
}