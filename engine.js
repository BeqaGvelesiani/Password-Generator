const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const condition1 = letters.concat(numbers,symbols);
const condition2 = letters.concat(numbers);
const condition3 = letters.concat(symbols);
const condition4 = letters;

const pass1 = document.getElementById("password1");
const pass2 = document.getElementById("password2");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
let numberOfSymbol = 15;
let indicator1 = 0;
let indicator2 = 0;
let a = false;
let b = false;
let button1 = "on";
let button2 = "on";
let world;

function c1Switch(){
    a = cheker(indicator1)
    if (a === false){
        c1_on();
    }else{
        c1_off();
    }
    indicator1 +=1;
}

function c2Switch(){
    b = cheker(indicator2)
    if (b === false){
        c2_on();
    }else{
        c2_off();
    }
    indicator2 +=1;
}

function generate() {
    pass1.textContent = "";
    pass2.textContent = "";

    if (button1 === "on" && button2 === "on"){
        world = condition1;
    }else if(button1 === "on" && button2 === "off"){
        world = condition2;
    }else if(button1 === "off" && button2 === "on"){
        world = condition3;
    }else if(button1 === "off" && button2 === "off"){
        world = condition4;
    }

    for (var i=0; i<numberOfSymbol; i++){
        pass1.textContent += world[random(0,world.length-1)];
        pass2.textContent += world[random(0,world.length-1)];
    }
    pass1.style.color = "#10B981";
    pass2.style.color = "#10B981";
}

function random(a,b){
    let i = b-a+1;
    return Math.floor(Math.random()*i) + a;
}

function cheker(a){
    if (a%2 === 0){
        return true;
    }else{
        return false;
    }
}

function c1_off(){
    c1.style.color = "black";
    c1.style.backgroundColor = "none";
    c1.style.boxShadow = "none";
    button1 = "off";
}

function c1_on(){
    c1.style.color = "white";
    c1.style.backgroundColor = "green";
    c1.style.boxShadow = "0px 0px 30px 3px green";
    button1 = "on";
}

function c2_off(){
    c2.style.color = "black";
    c2.style.backgroundColor = "none";
    c2.style.boxShadow = "none";
    button2 = "off";
}

function c2_on(){
    c2.style.color = "white";
    c2.style.backgroundColor = "green";
    c2.style.boxShadow = "0px 0px 30px 3px green";
    button2 = "on";
}