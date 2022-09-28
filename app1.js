

var btnTranslate = document.querySelector("#btn-translate");


var txtInput = document.querySelector("#txt-input")
var outputresult = document.querySelector("#output")


function clickEventHandler()
{
    outputresult.innerText="translation in progress "+ txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler);









