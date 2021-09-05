console.log("Meet-Attendance.js in Action!!");

window.onload = function(){
    localStorage.setItem('status', "not")
}

chrome.runtime.onMessage.addListener(startIt);

function startIt(message, sender, sendResponse){


    
    if(document.domain == "meet.google.com"){
        if(message == 1){
            localStorage.setItem('status', "set")
            alert("Queue started")
        }
        else if(message == 2){
            localStorage.setItem('status', "not")
            alert("Queue ended")
        }

    }
} 


window.setInterval(function() {
    console.log(localStorage.getItem('status'))
    if(localStorage.getItem('status') == 'set'){
        try{
            console.log("trying now")
            var names = document.querySelectorAll('.YTbUzc');
            var times = document.querySelectorAll('.MuzmKe');
            for(var i = 0; i < names.length; i++){
                console.log(names[i].innerHTML);
                console.log(times[i].innerHTML);
                if(names[i].innerHTML !== "You"){
                    chrome.runtime.sendMessage({Name : names[i].innerHTML, Time : times[i].innerHTML});   
                }
               
            }
        }
        catch(err){
            console.log(err)
        }
    }
    
    
}, 5000); 
