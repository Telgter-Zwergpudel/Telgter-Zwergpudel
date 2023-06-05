let phoneType = "";

function startChoosing(){
    document.getElementById("starttext").classList.add("novis");
    document.getElementById("startlink").classList.add("novis");
    document.getElementById("choosetype").classList.remove("novis");

}
function goAndroid(){
    document.getElementById("choosetype").classList.add("novis");
phoneType = "Android";
document.getElementById("androidtutorial").classList.remove("novis");

}
function goIphone(){
    document.getElementById("choosetype").classList.add("novis");
phoneType = "iPhone";
document.getElementById("iPhonetutorial").classList.remove("novis");
}