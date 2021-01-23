console.log (fname);
// Declaring variables 
var fname;
var lname;
var job;
var age;

//Age variable for Holding Number Value  
let tempAge;
//Eligible to vote 
let isEligibleToVote;

//family storage array 
let familyMember = new Array(); //or use []
//number of family 
let numberOfFamily;

// receive input
fname = prompt("Your First name: ");
lname = prompt("Your Last name: ");
age = prompt("Your Age: ");
job = prompt("Your profession: ");

numberOfFamily = prompt("Number of Family: ");
//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    familyMember[i] = prompt("Your Family  Members " + (i + 1));
}


tempAge = parseInt(age);
// check Eligibility 
if (tempAge >= 18) {
    isEligibleToVote = true;
} 
else {
    isEligibleToVote = false;
}

// Display  the result on console from input 
console.log("Here is your Profile ")
console.log("Full Name: " + fname + " "+lname);
console.log("Profession : " + job);
console.log("Age : " + age + " " + "years old");

console.log(fname + " " + lname+ " Is Eligible to Vote : " + isEligibleToVote);
console.log("Family Members ");

//Displaying the family member with foreach
familyMember.forEach(function(member, index) {
   console.log("Family Member  " + (index + 1) + " : " + member);
});
