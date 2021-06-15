//if statements//
let random = Math.random();
if (random < 0.5) {
    console.log("The number is less than 0.5");
    console.log(random)
}
else {
    console.log("The number is equal to or greater than 0.5")
}

const age = 67;

if (age < 5) {
    console.log("You are a baby. You can enter for free")
}
else if (age < 10) {
    console.log("You are a child. You pay $10")
}
else if (age < 65) {
    console.log("You are an adult. You pay $10")
}
else {
    console.log("You are a senior. You pay $10")
}


const password = prompt("Please Enter A Password");
//Password must be 6+characters//
if (password.length >= 6) {
//Password cannot contain any spaces//
    if (password.indexOf(' ') === -1) {
        console.log("Valid Input")
    }
    else {
        console.log("There Must Be No Spaces")
    }
}
    else {
        console.log("Password Is Too Short. Must Be Atleast 6 Characters")
    }

//Another method//
const password1 = prompt("Please Enter A Password");

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid Input")
} 
else {
    console.log("Invalid Password Input")
}

//0-5 free
//5-10 $10
//10-65 $20
//65+ free

const age = -1;
if (age >= 0 && age < 5 || age >= 65) {
    console.log("FREE")
}
else if (age >= 5 && age < 10) {
    console.log("$10")
}
else if (age >= 10 && age < 65) {
    console.log("$20")
}
else {
    console.log("INVALID INPUT!")
}

//Switch statement
const day = 2
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
    case 7:
        console.log("Weekend")
        break;
    default:
        console.log("I DONT KNOW!")
}
//THIS CAN ALSO BE DONE BY THE IF/ELSE IF/ELSE STATMENTS. THIS WAS DONE TO JUST LEARN THE SWITCH STATEMENT

//PUSH is to add at the end of the array, POP is to remove from the end, SHIFT is to remove from front, and UNSHIFT is to add in the front 


let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
colors.splice()