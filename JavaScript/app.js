console.log("Hello JavaScript");

let a = 10;
let b = 20;
console.log("sum is : ", a + b);


console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);

let age = 18;
console.log(age >= 18);

//Conditional Statements
let Age = 13;
if(Age >= 18) {
    console.log("You can vote.");
}
else  {
    console.log("you can't vote.");
}

//Trafic Light-->
let color ="yellow";
if (color=="red"){
    console.log("Stop!");
}
if (color=="yellow"){
    console.log("Slow Down!");
}
if (color=="green"){
    console.log("Go!");
}

// Days of the week -->
let day = 5;
switch(day){
case 1:
console.log("Monday");
break;
case 2:
console.log("Tuesday");
break;
case 3:
console.log("Wednesday");
break;
case 4:
console.log("Thursday");
break;
case 5:
console.log("Friday");
break;
case 6:
console.log("Saturday");
break;
case 7:
console.log("Sundayy");
default :
console.log ("Not a day!!")

}


 
//Assignment
 let Name = prompt("Enter your name:");
 let Year = prompt("Enter your age:");
alert(`${Name} is ${Year} years old.`);
