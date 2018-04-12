var theList=[];
var typeUser=document.getElementById(`userInput`);
var typeError=document.getElementById(`error`);
var typeWords=document.getElementById(`words`);
var removeWord=document.getElementById(`remove`);

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



//function tesst(){
    //words.innerHTML=theList.splice(bil,1);
//}

function fjern(){
    words.innerHTML=theList.splice(5,1);
}






    

    