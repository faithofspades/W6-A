/**
 * shopping list
 * access html elements
 * add event listener
 * create function
 */
//GET HTML ELEMENTS

let entryBox = document.getElementById("textEntry");

let button = document.getElementById("buttonClick");

let result = document.getElementById("resultText");

//MAKE FUNCTIONS 

const processText = function(){
    let text = entryBox.value;
    result.innerText = text;
    mySineOsc.frequency.value = text;
    mySineOsc.start();
};

//ADD EVENT LISTENER

button.addEventListener("click", processText);


const myCtx = new AudioContext();

//make an oscillator node

let mySineOsc = myCtx.createOscillator();
mySineOsc.type = "square";
mySineOsc.frequency.value = 440;

mySineOsc.connect(myCtx.destination);

mySineOsc.start();