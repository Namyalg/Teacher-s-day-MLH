console.log("Meet-Attendance.js in Action!!");
console.log(document.domain);

// if(document.domain == "zoom.us" || document.domain == "us04web.zoom.us"){
//     let mess_zoom = {
//         text: "Page being used is ZOOM"
//     };
//     chrome.runtime.sendMessage(mess_zoom);
//     console.log("message sent");
// }else{
//     let mess_zoom = {
//         text: "Page being used is not ZOOM"
//     };
//     chrome.runtime.sendMessage(mess_zoom);
//     console.log("message sent");
// }


let mess_zoom = {
    text: "Page being used is not ZOOM"
};
chrome.runtime.sendMessage(mess_zoom);
console.log("message sent");

chrome.runtime.onMessage.addListener(startIt);

function startIt(message, sender, sendResponse){
    if(document.domain == "meet.google.com"){
        console.log("You are on Google Meet session");
        var today = new Date();
        var month = today.getMonth();
        var day = today.getDate();
        var hours = today.getHours();
        var file_name = "Attendance:" + hours + "hrs-" + day +"-" + month + ".txt"  ;
        alert("in take attendence");
		var names = document.querySelectorAll('div[data-self-name="You"]');

        //#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.R3Gmyc.qwU8Me > div.WUFI9b > div.hWX4r > div > div.z38b6
        let elements = document.getElementsByClassName('z38b6');
        //var senderElement = document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.R3Gmyc.qwU8Me > div.WUFI9b > div.hWX4r > div > div.z38b6")
        var senderElement = document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.R3Gmyc.qwU8Me > div.WUFI9b > div.hWX4r > div > div.z38b6")
        
        //console.log(senderElement.querySelector('div.YTbUZc'));
        //var descendents = elements.getElementsByTagName('*');
        console.log(senderElement);
        
        // for( el in senderElement)
        // {
        //     console.log(el);
           
        // }

        //var senderElement = document.querySelectorAll('div:nth-child(2)')[1]
       
        
        
        var messageElement = document.querySelector('div:nth-child(3)')

        const commentList = document.querySelector('[jscontroller=ENYfP]')
        console.log("sender is ");
        console.log(senderElement);

        console.log(commentList);

        ////*[@id="ow3"]/div[1]/div/div[9]/div[3]/div[4]/div[2]/div[2]/div/div[2]
        //<div jsname="xySENc" class="z38b6" aria-live="polite"><div class="v8W0vf">Messages can only be seen by people in the call and are deleted when the call ends.</div><div class="GDhqjd" style="order: 1;" jsname="Ypafjf" tabindex="-1" jscontroller="LQRnv" jsaction="JIbuQc:cut0F(aUCive),dcNHe(g21v4c);" data-sender-id="_self_" data-sender-name="You" data-timestamp="1630689276999" data-formatted-timestamp="10:44 PM"><div><div class="YTbUzc">You</div><div class="MuzmKe">10:44 PM</div></div><div class="Zmm6We" jsname="h83qlf"><div class="oIy2qc" jsname="dTKtvb" data-message-text="hello">hello</div><div class="oIy2qc" jsname="dTKtvb" data-message-text="hello">hello</div><div class="oIy2qc" jsname="dTKtvb" data-message-text="hello">hello</div><div class="oIy2qc" jsname="dTKtvb" data-message-text="hello">hello</div></div></div></div>

        //console.log(names);
        var allp = [];
				for(var i = 0; i < names.length; i += 2){
					var name = names[i].innerText;
					if(name != "" && name != "You" && !name.startsWith("Presentation (")){
					
                        allp.push(name);
					}
				}

        console.log(allp);
        console.log("checking in this thingy");
    }
} 


