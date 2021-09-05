
console.log("POPUP Script in Action!");
load();
localStorage.setItem('qstatus', false)
let bgpage = chrome.extension.getBackgroundPage();
if (bgpage.word == "Page being used is ZOOM"){
    document.getElementById("time_div").style.display = "none";
}
let params= {
    active: true,
    currentWindow: true
}
var config = 0;
function load() {

} 
window.onload = function(){
    localStorage.setItem('status', "not")
    document.getElementById("start").addEventListener("click", function(){
        
        localStorage.setItem('status', "set")
        buttonClicked(1);
        save();
    });
   
    document.getElementById("end").addEventListener("click", function(){
        buttonClicked(2);
        localStorage.setItem('status', "not")
        console.log(localStorage.getItem('qstatus'))
        //alert("ended now")
    });

    function buttonClicked(val){
        var data = [];
        localStorage.setItem('status', "set")
        data.push(4);
        chrome.tabs.query(params, doIt);
        console.log(data);
        function doIt(tabs){
            chrome.tabs.sendMessage(tabs[0].id, val);
        }
    } 

    function save(){
        
    }
}