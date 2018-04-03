/* Event Handlers */
/**Make things happen **/

/*this is the basic layout before the event handlers goes into the html*/
/**by having ScriptID in the HTML, html will read the script **/
/***edit the functionID to show the id of the function ***/
function functionID (){
    document.getElementById("scriptID").innerHTML="hfdg"
}


/*when mouse button is pushed down and released*/
function mouseDown() {
    document.getElementById("mouse").style.color = "red";}

function mouseUp() {
    document.getElementById("mouse").style.color = "black";}


/*when clicking or double clicking an element*/

function mouseclick() {
    document.getElementById("mouse").innerHTML ="singular";}

function mouseclick_knapp2() {
    document.getElementById("mouse").innerHTML ="trykk meg en gang til";}

function mousex2click() {
    document.getElementById("mouse").innerHTML ="You did it";}


/*when mouse enters, moves or leave an element*/

function mousemove() {
    document.getElementById("test").style.color = "orange";}

function mouseenter() {
    document.getElementById("test").style.color = "green";}

function mouseisover() {
    document.getElementById("test").innerHTML="sadkhkdhakhd";}



