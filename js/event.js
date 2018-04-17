//alerts
function alerty(){
    alert("test");
}

function popupTime(){
    alert(Date());
} 

function blurAlert(){
    alert(Date())
}


function timey(){
    document.getElementById('time').innerHTML=Date();
}

//Background Changes

function bgRed(){
    document.body.style.background="red"
}

function bgGreen(){
    document.body.style.background="green"
}

function bgGray(){
    document.body.style.background="gray"
}

function bgYellow(){
    document.body.style.background="yellow"
}

//text changes
function textColorBlue(){
    document.body.style.color="blue"
}

function textColorDefault(){
    document.body.style.color="black"
}

//clipboard events
//oncopy
function copyMeNot(){
    alert("Copy Power 9000!!!!!!")
}
//onpaste
function pasted(){
    alert("Your lazy")
}

//oncut
function cutted(){
    alert("Ouch!!!")
}