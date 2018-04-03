/* Event Handlers */
/**Make things happen **/

/*this is the basic layout before the event handlers goes into the html*/
/**by having ScriptID in the HTML, html will read the script **/
/***edit the functionID to show the id of the function ***/
function functionID (){
    document.getElementById("scriptID").innerHTML="hfdg"
}

function mouseDown() {
    document.getElementById("myP").style.color = "red";
}

function mouseUp() {
    document.getElementById("myP").style.color = "green";
}