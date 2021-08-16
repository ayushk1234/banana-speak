var btnTranslate =document.querySelector("#btnTranslate");
var txtInput = document.querySelector("#txtInput");
var txtOutput=document.querySelector("#txtOutput");


var url= "https://api.funtranslations.com/translate/minion.json";



function errorCheck(){
    var textValue= txtInput.value;
    var urlText= url+"?"+"text="+textValue;
    
    fetch(urlText)
        .then(response => response.json())
        .then(json => {txtOutput.innertext=(json.contents.text);}) ;


    // txtOutput.innerHTML= json.text;
}



btnTranslate.addEventListener("click",errorCheck);
// errorCheck(b)

console.log(btnTranslate);
// console.log(txtInput.value);