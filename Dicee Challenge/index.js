var randomNumber1= Math.floor(Math.random()*7);
var randomNumber2= Math.floor(Math.random()*7);


var diceDisplay=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
var diceImage1=diceDisplay[randomNumber1];
var diceImage2=diceDisplay[randomNumber2];

document.querySelector(".img1").setAttribute("src",diceImage1);
document.querySelector(".img2").setAttribute("src",diceImage2);
console.log(randomNumber1,randomNumber2);
if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML='🚩Player1Win';
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML='Player2Win🚩';
}
else if (randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
else{
  document.querySelector("h1").innerHTML="Refresh Me";
}
