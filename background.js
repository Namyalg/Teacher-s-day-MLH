
// Initialize Firebase



  const firebaseConfig = {
    apiKey: "AIzaSyAmleLBrmJH_Io4bWi5FEWvbB7U6TGM3r0",
    authDomain: "studq-c44bf.firebaseapp.com",
    databaseURL: "https://studq-c44bf-default-rtdb.firebaseio.com",
    projectId: "studq-c44bf",
    storageBucket: "studq-c44bf.appspot.com",
    messagingSenderId: "232427224998",
    appId: "1:232427224998:web:cc2c6746b3682f499a9967"
  };

  firebase.initializeApp(firebaseConfig);

console.log("Background Script in Action!");
localStorage.setItem('status', "not")
var database = firebase.database();
var database = firebase.database();
var students = database.ref().child("students");
localStorage.setItem('status', "not")

const myArray = []
localStorage.setItem('myArray', JSON.stringify(myArray))


chrome.runtime.onMessage.addListener(function(response, send, sendResponse){
    database.ref().child("students").once('value', function(snapshot){
      
      var myArrayFromLocalStorage = localStorage.getItem('myArray')
      var myArray = []
      if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
         myArray = JSON.parse(myArrayFromLocalStorage)
          
      }
      
      
      var names = [];
      snapshot.forEach(
        function (child){
          let name = child.val().Name;
          let time = child.val().Time;
          names.push(name)
        }
      )
      if (!names.includes(response.Name) && response.Name !== "You" && !myArray.includes(response.Name)){

        students.push({Name : response.Name, Time : response.Time});
        console.log("added");
      }
      else{
        console.log("not added")
      }
    });
})