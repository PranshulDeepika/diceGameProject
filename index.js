var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "dice"+randomNumber1+".png"; //dice image name
var randomImageSource = "./images/"+randomDiceImage;  //image source


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource)
// image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImage1 = "dice"+randomNumber2+".png"; //dice image name
var randomImageSource1 = "./images/"+randomDiceImage1;  //image source


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource1);




if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "DRAW";
    
}else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 win";
    
}else{
    document.querySelector("h1").innerHTML = "Player 2 win";
    
}