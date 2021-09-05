
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
console.log("stuents")

function deleteQueue(){
  students.remove();
  location.reload();
}


function checkIfStudentExists(currentStudent){
  students.once('value', function(snapshot){
    snapshot.forEach(
      function (child){
        let name = child.val().Name;
        let time = child.val().Time;

        console.log("name is ")
        console.log(name);

        
        if(name == currentStudent){
          return true;
        }
        console.log(name)
        console.log(time)
      }
    )
  });
  return false;
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
      var cell3 = row.insertCell(2);

      cell1.innerHTML = name;
      cell2.innerHTML = time;
      cell3.innerHTML = "Not done";

    });
  
