var btnTranslate = document.querySelector("#btn-Translate");
var txtInputDiv = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");




var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with the server pls try again letter")
}


function clickHandler(){
   
    var inputText = txtInputDiv.value;



    
   
      fetch(getTranslationURL(inputText))
      .then(response => response.json())
      .then(json => {
          var translatedText = json.contents.translated;
          outputDiv.innerText = translatedText;
      })
      .catch(errorHandler)
};


btnTranslate.addEventListener("click",clickHandler)
