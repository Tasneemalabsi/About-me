"use strict"
alert("welcome to my website")
let userName = prompt("what's your name?")
alert ("welcome, " + userName + ", I am pleased to have you here !")

let q1 = prompt("Is my age 23 ?").toUpperCase();
while (q1 != "YES" && q1 != "NO")
{q1= prompt("you have to answer with yes or no please").toUpperCase();
}
if (q1 == "YES") {
    //console.log("correct");
    alert("correct");
}
else {
    //console.log ("sorry, the right answer has to be yes");
    alert("sorry, the right answer has to be yes");
}

let q2 = prompt("am I a lazy person ?").toLowerCase();
while  (q2 != "yes" && q2 != "no")
{q2 = prompt("you have to answer with yes or no please").toLowerCase();
}
if (q2 == "yes") {
    //console.log("correct! I am a very lazy person, I hope I can change that :D");
   alert("correct! I am a very lazy person, I hope I can change that :D");
}
else{
    //console.log ("sorry, the right answer has to be yes");
    alert("sorry, the right answer has to be yes");
}

let q3 = prompt("was my major in college history?").toUpperCase();
while (q3 != "YES" && q3 != "NO")
{q3= prompt("you have to answer with yes or no please").toUpperCase();
}
if (q3 == "YES") {
    //console.log("well that's not true, my major was physics");
alert("well that's not true, my major was physics");
}
else { //console.log("correct!")
    alert("correct!");
}

let q4 = prompt("is my favorite food Mansaf ?").toLowerCase();
while (q4 != "yes" && q4 != "no")
{q4= prompt("you have to answer with yes or no please").toLowerCase();
}
if (q4 == "yes") {
    //console.log("yay ! thank you for knowing that about me")
    alert("yay ! thank you for knowing that about me");
}
else {
    //console.log ("My favorite food is actaully mansaf, so it's a yes ^^")
    alert("My favorite food is actaully mansaf, so it's a yes ^^");
}

let q5 = prompt("do you think I'm a good person?").toLowerCase();
while (q5 != "yes" && q5 != "no")
{q5= prompt("tell me the truth please ! is it a yes or a no :D").toLowerCase();
}
if (q5 == "yes") {
    //console.log("thank you! you're the best")
alert("thank you! you're the best");
}
else {
    //console.log ("well that's understandable")
    alert("well that's understandable");
}

