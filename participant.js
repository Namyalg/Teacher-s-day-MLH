
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

var database = firebase.database();
var students = database.ref().child("students");


function deleteQueue(){
  students.remove();
  location.reload();
}


  students.on("child_added", function(snapshot, prevChildKey) {
      var newPost = snapshot.val();
      console.log(newPost);
      var name = newPost.Name;
      var time = newPost.Time;      
      var table = document.getElementById("myTable");
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
     
    
      cell1.innerHTML = name;
      cell2.innerHTML = time;

      //cell4.innerHTML = "<button onclick='deleteEntry(this)'>remove</button>"

    });
  
