"use strict"
let score = 0
alert("welcome to my website")
  let userName = prompt("what's your name?")
alert ("welcome, " + userName + ", I am pleased to have you here !")
function first(){ let q1 = prompt("Is my age 23 ?").toUpperCase();
 while (q1 != "YES" && q1 != "NO"){q1= prompt("you have to answer with yes or no please").toUpperCase();
}
if (q1 == "YES") {
    //console.log("correct");
    alert("correct");
}
else {
    //console.log ("sorry, the right answer has to be yes");
    alert("sorry, the right answer has to be yes");
}
}



function seconed() {let q2 = prompt("am I a lazy person ?").toLowerCase();
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
}

function third(){  let q3 = prompt("was my major in college history?").toUpperCase();
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
}
function fourth(){ let q4 = prompt("is my favorite food Mansaf ?").toLowerCase();
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
}

function fifth (){ let q5 = prompt("do you think I'm a good person?").toLowerCase();
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
}



 function sixth (){ for (let i=1; i<=4; i++) {
     let q6 = Number(prompt("can you guess how many siblings do I have ?"));
     window.qq = q6;
     if (q6>6){alert("oops! too high");
    //console.log("oops! that's too high");
 }
     else if (q6<6) {alert("that's too low");
    //console.log("that's too low")
}
     if (q6 === 6) {alert("yes, that's correct !");
     //console.log("yes, that's correct !")
         break;}
 }
 if(qq !=6){alert ("well, thank you I have 6 siblings");
//console.log("well, thank you I have 6 siblings");
 }
}

//   let favMovies= ["Joker", "forgotten", "circle", "inception","prisoners"];
//   for (let i=0; i<=5; i++) {
//        let q7 = prompt("can you guess one of my favorite movies ?");
//        window.qq2=q7;
//      if (q7 != favMovies[0] && q7 != favMovies[1] && q7 != favMovies[2] && q7 != favMovies[3] && q7 != favMovies[4]){alert("well that's not true ! try again please");
//     //console.log(("well that's not true ! try again please");)
//   }
//        if (q7 == favMovies[0] || q7 == favMovies[1] || q7 == favMovies[2] || q7 == favMovies[3] || q7 == favMovies[4]){alert("That's correct! Thank you");
//    //console.log("That's correct! Thank you");
//        break;}
//    }

//   if(qq2 != favMovies[0] && qq2 != favMovies[1] && qq2 != favMovies[2] && qq2 != favMovies[3] && qq2 != favMovies[4]){alert ("well, thanks for trying, my favorite movies are: " + favMovies);
//console.log("well, thanks for trying, my favorite movies are: " + favMovies);
  //}

// let q7 = prompt("can you guess one of my favorite movies ?");
// let favMovies= ["Joker", "forgotten", "circle", "inception","prisoners"];

// for (let i=0; i<=5; i++) {
//     if (q7==favMovies[i]) {alert("that's correct! thank you");
//     break;
// }
// if (q7!=favMovies[i]) {alert("sorry that's not true ! try again");}
// }

// if (q7!=favMovies[i]) {alert("thanks for trying ! mu favorite movies are: ") + favMovies}

 let favMovies = ["Joker", "forgotten", "circle", "inception","prisoners"];
  function seventh (){   for (let i = 0; i <= 5; i++) {
        let q7 = prompt('Can you guess my favorite movie?');
        for (let j = 0; j < favMovies.length; j++){
            if (q7 === favMovies[j]) {
                alert("that's correct! thank you");
                //console.log("that's correct! thank you";)
                score++;
                i = 6;
                break;
            }
        }
        if (i !==6){
            alert("Sorry wrong answer, try again");
            //console.log("Sorry wrong answer, try again");
        }
    }


alert("thank you, my favorite movies are: "+ favMovies);
//console.log("thank you, my favorite movies are: "+ favMovies);

  }
  first();
  seconed();
  third();
  fourth();
  fifth();
  sixth();
  seventh();
  
    alert ("thanks for playing my game, your score is: " + score + " out of 7");
    //console.log("thanks for playing my game, your score is: " + score + " out of 7");

    
    
    
  
    
    


