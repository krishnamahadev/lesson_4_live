
// checking if its working
console.log("Hey it is working!")


// two ways of using Javascript 1. Prompt 2. Alert
// alert("Hey welome!")

// var x = prompt("What is your name buddy")

// alert("Hey welcome "+x+" Javascript world")




// button is created in HTML. I am try to reference that button from JS and also play around with it. This is called DOM scripting.

var btnTranslate = document.querySelector("#btn-translate");

// console.log(btnTranslate); This was only to show that you can control HTML from JS

// There is a button and by clicking the button i am sort of interacting with the app. So i should be listening to the click - this is called an event

btnTranslate.addEventListener("click",function clickEventHandler()
{
    console.log("clicked")
})

// To check for different event, just type - Browser events JS
