console.log("Meet-Attendance.js in Action!!");

window.onload = function(){
    localStorage.setItem('status', "not")
}

chrome.runtime.onMessage.addListener(startIt);

function startIt(message, sender, sendResponse){

    //alert(message);
    
    if(document.domain == "meet.google.com"){
        if(message == 1){
            localStorage.setItem('status', "set")
        }
        else if(message == 2){
            localStorage.setItem('status', "not")
        }

        
        // try{
        //     var names = document.querySelectorAll('.YTbUzc');
        //     var times = document.querySelectorAll('.MuzmKe');
        //     for(var i = 0; i < names.length; i++){
        //         console.log(names[i].innerHTML);
        //         console.log(times[i].innerHTML);
        //         chrome.runtime.sendMessage({Name : names[i].innerHTML, Time : times[i].innerHTML});   
        //     }
        // }
        // catch(err){
        //     console.log(err)
        // }
        // console.log("You are on Google Meet session");
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
                chrome.runtime.sendMessage({Name : names[i].innerHTML, Time : times[i].innerHTML});   
            }
        }
        catch(err){
            console.log(err)
        }
    }
    
    
}, 5000); 
