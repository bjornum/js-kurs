var theList=[];
var typeUser=document.getElementById(`userInput`);
var typeError=document.getElementById(`error`);
var typeWords=document.getElementById(`words`)


function minListe(){
    typeError.innerHTML="";
    var word = typeUser.value;
    if(word.trim()==="")
        typeError.innerHTML="nothing here";
    else
        theList.push(word);
    typeUser.value="";
}

function progress(){
    words.innerHTML=theList.join(`-`);
}


console.log(theList,typeError,typeUser,typeWords)
    

    